// Common types used across the application

export interface NavItem {
  name: string;
  href: string;
  scrollTo?: string;
  subItems?: SubNavItem[];
}

export interface SubNavItem {
  name: string;
  href: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  whatsapp: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter?: string;
  linkedin?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PriceInfo {
  price: number;
  originalPrice?: number;
  currency?: string;
}

export interface ImageGallery {
  main: string;
  gallery: string[];
}
