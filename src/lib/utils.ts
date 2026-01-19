/**
 * Utility functions for class name management
 * @module lib/utils
 */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS classes with proper precedence
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 * @param inputs - Class values to merge
 * @returns Merged class string
 * @example
 * cn("px-4 py-2", condition && "bg-primary", "px-6")
 * // Returns: "py-2 px-6 bg-primary" (if condition is true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
