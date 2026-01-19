/**
 * Cart hook - Manages shopping cart state and operations
 * Uses localStorage for guest checkout (no authentication required)
 * @module hooks/useCart
 */
import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { getProductById, Product } from "@/data/products";

const CART_STORAGE_KEY = "atlas_cart";

/**
 * Cart item with product details
 */
export interface CartItem {
  /** Unique identifier for the cart item */
  id: string;
  /** Product ID reference */
  product_id: string;
  /** Quantity of the product */
  quantity: number;
  /** Associated product data */
  product?: Product;
}

/**
 * Generate a unique ID for cart items
 */
const generateId = () => `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

/**
 * Hook for managing shopping cart functionality
 * Uses localStorage for persistent guest cart
 * @returns Cart state and methods for cart operations
 */
export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsedItems = JSON.parse(stored) as Omit<CartItem, 'product'>[];
        // Rehydrate product data
        const itemsWithProducts = parsedItems.map(item => ({
          ...item,
          product: getProductById(item.product_id),
        }));
        setCartItems(itemsWithProducts);
      }
    } catch (error) {
      console.error("Error loading cart from storage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      try {
        // Store only essential data (without product details to save space)
        const dataToStore = cartItems.map(({ id, product_id, quantity }) => ({
          id,
          product_id,
          quantity,
        }));
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(dataToStore));
      } catch (error) {
        console.error("Error saving cart to storage:", error);
      }
    }
  }, [cartItems, loading]);

  const addToCart = useCallback((productId: string, quantity: number = 1) => {
    const existingItem = cartItems.find(item => item.product_id === productId);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      setCartItems(prev => prev.map(item =>
        item.id === existingItem.id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: generateId(),
        product_id: productId,
        quantity,
        product: getProductById(productId),
      };
      setCartItems(prev => [...prev, newItem]);
    }

    toast({
      title: "Ajouté au panier",
      description: "Le produit a été ajouté à votre panier.",
    });
    return true;
  }, [cartItems, toast]);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) {
      return removeFromCart(itemId);
    }

    setCartItems(prev => prev.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    ));
    return true;
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: "Retiré du panier",
      description: "Le produit a été retiré de votre panier.",
    });
    return true;
  }, [toast]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
    return true;
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const price = item.product?.promoPrice || item.product?.price || 0;
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    cartCount: getCartCount(),
  };
};
