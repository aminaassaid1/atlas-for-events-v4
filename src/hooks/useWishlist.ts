/**
 * Wishlist hook - Manages user's wishlist/favorites
 * Uses localStorage for persistence without requiring login
 * @module hooks/useWishlist
 */
import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const WISHLIST_STORAGE_KEY = "wishlist_items";

/**
 * Hook for managing wishlist functionality using localStorage
 * @returns Wishlist state and methods for wishlist operations
 */
export const useWishlist = () => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    // Load wishlist from localStorage
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (stored) {
      try {
        setWishlistIds(JSON.parse(stored));
      } catch {
        setWishlistIds([]);
      }
    }
    setLoading(false);
  }, []);

  // Persist to localStorage whenever wishlistIds changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    }
  }, [wishlistIds, loading]);

  const toggleWishlist = useCallback((productId: string) => {
    const isInWishlist = wishlistIds.includes(productId);

    if (isInWishlist) {
      setWishlistIds((prev) => prev.filter((id) => id !== productId));
      toast({
        title: t('toasts.removedFromFavorites'),
        description: t('toasts.removedFromFavoritesDesc'),
      });
    } else {
      setWishlistIds((prev) => [...prev, productId]);
      toast({
        title: t('toasts.addedToFavorites'),
        description: t('toasts.addedToFavoritesDesc'),
      });
    }
    return true;
  }, [wishlistIds, toast, t]);

  const isInWishlist = useCallback((productId: string) => {
    return wishlistIds.includes(productId);
  }, [wishlistIds]);

  return {
    wishlistIds,
    loading,
    toggleWishlist,
    isInWishlist,
    wishlistCount: wishlistIds.length,
  };
};
