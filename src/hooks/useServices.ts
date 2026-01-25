/**
 * Custom hook for fetching services from Supabase
 * Supports filtering by service type and provides loading/error states
 */
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { resolveImagePath } from '@/lib/imageResolver';

export interface Service {
  id: string;
  service_type: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  long_description: string | null;
  image_url: string | null;
  gallery: string[];
  price: number | null;
  original_price: number | null;
  duration: string | null;
  category: string | null;
  rating: number;
  review_count: number;
  includes: string[];
  highlights: string[];
  features: string[];
  location: string | null;
  featured: boolean;
  active: boolean;
  sort_order: number;
}

interface UseServicesOptions {
  serviceType?: string;
  featured?: boolean;
  limit?: number;
}

interface UseServicesReturn {
  services: Service[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useServices(options: UseServicesOptions = {}): UseServicesReturn {
  const { serviceType, featured, limit } = options;
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      setError(null);

      let query = supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (serviceType) {
        query = query.eq('service_type', serviceType);
      }

      if (featured !== undefined) {
        query = query.eq('featured', featured);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error: queryError } = await query;

      if (queryError) throw queryError;

      // Transform and resolve image paths
      const transformedData = (data || []).map(service => ({
        ...service,
        image_url: service.image_url ? resolveImagePath(service.image_url) : null,
        gallery: Array.isArray(service.gallery) 
          ? (service.gallery as string[]).map(img => resolveImagePath(img))
          : [],
        includes: Array.isArray(service.includes) ? service.includes as string[] : [],
        highlights: Array.isArray(service.highlights) ? service.highlights as string[] : [],
        features: Array.isArray(service.features) ? service.features as string[] : [],
      })) as Service[];

      setServices(transformedData);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch services'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [serviceType, featured, limit]);

  return {
    services,
    isLoading,
    error,
    refetch: fetchServices,
  };
}

// Hook for fetching a single service by slug
export function useService(slug: string, serviceType?: string) {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        let query = supabase
          .from('services')
          .select('*')
          .eq('slug', slug)
          .eq('active', true);

        if (serviceType) {
          query = query.eq('service_type', serviceType);
        }

        const { data, error: queryError } = await query.maybeSingle();

        if (queryError) throw queryError;

        if (data) {
          const transformedService: Service = {
            ...data,
            image_url: data.image_url ? resolveImagePath(data.image_url) : null,
            gallery: Array.isArray(data.gallery) 
              ? (data.gallery as string[]).map(img => resolveImagePath(img))
              : [],
            includes: Array.isArray(data.includes) ? data.includes as string[] : [],
            highlights: Array.isArray(data.highlights) ? data.highlights as string[] : [],
            features: Array.isArray(data.features) ? data.features as string[] : [],
          };
          setService(transformedService);
        } else {
          setService(null);
        }
      } catch (err) {
        console.error('Error fetching service:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch service'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [slug, serviceType]);

  return { service, isLoading, error };
}

// Helper to transform database service to activity-like format for ActivityCard
export function serviceToActivity(service: Service) {
  return {
    id: service.id,
    slug: service.slug,
    name: service.title,
    nameEn: service.title, // Would need translation from metadata if needed
    category: service.category || '',
    price: service.price || 0,
    originalPrice: service.original_price || undefined,
    duration: service.duration || '',
    image: service.image_url || '',
    rating: service.rating || 5,
    includes: service.includes,
    includesEn: service.includes, // Same for now
    location: service.location || '',
    description: service.description || '',
  };
}
