-- Create wishlists table to store user's favorite products
CREATE TABLE public.wishlists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Users can view their own wishlist items
CREATE POLICY "Users can view their own wishlist" 
ON public.wishlists 
FOR SELECT 
USING (auth.uid() = user_id);

-- Users can add items to their own wishlist
CREATE POLICY "Users can add to their own wishlist" 
ON public.wishlists 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can remove items from their own wishlist
CREATE POLICY "Users can remove from their own wishlist" 
ON public.wishlists 
FOR DELETE 
USING (auth.uid() = user_id);