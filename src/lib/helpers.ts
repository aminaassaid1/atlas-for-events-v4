/**
 * Helper utility functions for common operations
 * @module lib/helpers
 */

/**
 * Calculate discount percentage between original and current price
 * @param price - Current/sale price
 * @param originalPrice - Original price before discount
 * @returns Discount percentage (0 if no discount)
 * @example
 * calculateDiscountPercentage(80, 100) // Returns: 20
 */
export const calculateDiscountPercentage = (price: number, originalPrice?: number): number => {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round((1 - price / originalPrice) * 100);
};

/**
 * Format price with currency symbol
 */
export const formatPrice = (price: number, currency: string = "€"): string => {
  return `${price}${currency}`;
};

/**
 * Format a date string to French locale
 */
export const formatDateFr = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

/**
 * Generate WhatsApp link with pre-filled message
 */
export const generateWhatsAppLink = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

/**
 * Truncate text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

/**
 * Generate slug from text
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

/**
 * Check if a value is empty (null, undefined, empty string, or empty array)
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};
