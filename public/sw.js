/**
 * Service Worker for Image Caching & Offline Support
 * Caches images and static assets for improved performance
 */

const CACHE_NAME = 'atlas-events-v1';
const IMAGE_CACHE_NAME = 'atlas-images-v1';

// Assets to pre-cache
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon.png'
];

// Image extensions to cache
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.avif'];

// Check if request is for an image
const isImageRequest = (url) => {
  return IMAGE_EXTENSIONS.some(ext => url.toLowerCase().includes(ext));
};

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== IMAGE_CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - cache-first for images, network-first for other requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle image requests with cache-first strategy
  if (isImageRequest(url.pathname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
          // Return cached image and update cache in background
          event.waitUntil(
            fetch(request)
              .then((response) => {
                if (response.ok) {
                  cache.put(request, response.clone());
                }
              })
              .catch(() => {})
          );
          return cachedResponse;
        }

        // Fetch from network and cache
        try {
          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (error) {
          // Return placeholder for failed image requests
          return new Response('', { status: 404, statusText: 'Not Found' });
        }
      })
    );
    return;
  }

  // Network-first for other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache on network failure
        return caches.match(request);
      })
  );
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data.type === 'CLEAR_IMAGE_CACHE') {
    caches.delete(IMAGE_CACHE_NAME).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
  
  if (event.data.type === 'GET_CACHE_SIZE') {
    caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
      const keys = await cache.keys();
      event.ports[0].postMessage({ count: keys.length });
    });
  }
});
