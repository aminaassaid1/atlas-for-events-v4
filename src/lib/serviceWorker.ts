/**
 * Service Worker Registration & Management
 */

export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Workers not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    });

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('New service worker available, refresh to update');
          }
        });
      }
    });

    console.log('Service Worker registered successfully');
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
};

export const unregisterServiceWorker = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) return false;

  try {
    const registration = await navigator.serviceWorker.ready;
    return await registration.unregister();
  } catch {
    return false;
  }
};

export const clearImageCache = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) return false;

  return new Promise((resolve) => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = (event) => {
      resolve(event.data.success);
    };

    navigator.serviceWorker.controller?.postMessage(
      { type: 'CLEAR_IMAGE_CACHE' },
      [messageChannel.port2]
    );

    setTimeout(() => resolve(false), 5000);
  });
};

export const getImageCacheSize = async (): Promise<number> => {
  if (!('serviceWorker' in navigator)) return 0;

  return new Promise((resolve) => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = (event) => {
      resolve(event.data.count || 0);
    };

    navigator.serviceWorker.controller?.postMessage(
      { type: 'GET_CACHE_SIZE' },
      [messageChannel.port2]
    );

    setTimeout(() => resolve(0), 5000);
  });
};
