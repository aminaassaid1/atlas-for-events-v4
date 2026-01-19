/**
 * Wishlist hook - Manages user's wishlist/favorites
 * Handles adding and removing products from the wishlist
 * @module hooks/useWishlist
 */
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

/**
 * Wishlist item from database
 */
interface WishlistItem {
  product_id: string;
}

/**
 * Hook for managing wishlist functionality
 * @returns Wishlist state and methods for wishlist operations
 */
export const useWishlist = () => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        
        // Fetch wishlist when user logs in
        if (session?.user) {
          setTimeout(() => {
            fetchWishlist(session.user.id);
          }, 0);
        } else {
          setWishlistIds([]);
          setLoading(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchWishlist(session.user.id);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchWishlist = async (userId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("wishlists" as any)
        .select("product_id")
        .eq("user_id", userId);

      if (error) throw error;
      setWishlistIds(((data as unknown as WishlistItem[]) || []).map((item) => item.product_id));
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleWishlist = useCallback(async (productId: string) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Connectez-vous pour ajouter des produits à vos favoris.",
        variant: "destructive",
      });
      return false;
    }

    const isInWishlist = wishlistIds.includes(productId);

    try {
      if (isInWishlist) {
        // Remove from wishlist
        const { error } = await supabase
          .from("wishlists" as any)
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", productId);

        if (error) throw error;

        setWishlistIds((prev) => prev.filter((id) => id !== productId));
        toast({
          title: "Retiré des favoris",
          description: "Le produit a été retiré de vos favoris.",
        });
      } else {
        // Add to wishlist
        const { error } = await supabase
          .from("wishlists" as any)
          .insert([{ user_id: user.id, product_id: productId }] as any);

        if (error) throw error;

        setWishlistIds((prev) => [...prev, productId]);
        toast({
          title: "Ajouté aux favoris",
          description: "Le produit a été ajouté à vos favoris.",
        });
      }
      return true;
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      return false;
    }
  }, [user, wishlistIds, toast]);

  const isInWishlist = useCallback((productId: string) => {
    return wishlistIds.includes(productId);
  }, [wishlistIds]);

  return {
    wishlistIds,
    loading,
    user,
    toggleWishlist,
    isInWishlist,
    wishlistCount: wishlistIds.length,
  };
};
