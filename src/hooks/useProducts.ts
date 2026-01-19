import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  price: number;
  promoPrice: number | null;
  category: string;
  image: string | null;
  featured: boolean;
  active: boolean;
}

interface UseProductsOptions {
  activeOnly?: boolean;
}

export function useProducts(options: UseProductsOptions = { activeOnly: true }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (options.activeOnly) {
          query = query.eq('active', true);
        }

        const { data, error } = await query;

        if (error) throw error;

        const mappedProducts: Product[] = (data || []).map(p => ({
          id: p.slug, // Use slug as id for URL compatibility
          slug: p.slug,
          title: p.title,
          description: p.description,
          price: Number(p.price),
          promoPrice: p.promo_price ? Number(p.promo_price) : null,
          category: p.category,
          image: p.image_url,
          featured: p.featured,
          active: p.active,
        }));

        setProducts(mappedProducts);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [options.activeOnly]);

  return { products, isLoading, error };
}

export function useProduct(slug: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('slug', slug)
          .eq('active', true)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          setProduct({
            id: data.slug,
            slug: data.slug,
            title: data.title,
            description: data.description,
            price: Number(data.price),
            promoPrice: data.promo_price ? Number(data.promo_price) : null,
            category: data.category,
            image: data.image_url,
            featured: data.featured,
            active: data.active,
          });
        } else {
          setProduct(null);
        }
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  return { product, isLoading, error };
}

export function getMaxPrice(products: Product[]): number {
  if (products.length === 0) return 3500;
  return Math.max(...products.map(p => p.price));
}
