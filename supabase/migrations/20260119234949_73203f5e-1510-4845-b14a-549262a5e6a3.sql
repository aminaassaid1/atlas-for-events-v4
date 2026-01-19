-- Create services table to manage all service types
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL CHECK (service_type IN ('event', 'vacation', 'activity', 'accommodation', 'spa', 'transport')),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  long_description TEXT,
  image_url TEXT,
  gallery JSONB DEFAULT '[]'::jsonb,
  price NUMERIC,
  original_price NUMERIC,
  duration TEXT,
  category TEXT,
  rating NUMERIC DEFAULT 5.0,
  review_count INTEGER DEFAULT 0,
  includes JSONB DEFAULT '[]'::jsonb,
  highlights JSONB DEFAULT '[]'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  location TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX idx_services_type ON public.services(service_type);
CREATE INDEX idx_services_active ON public.services(active);
CREATE INDEX idx_services_featured ON public.services(featured);

-- Enable Row Level Security
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view active services" 
  ON public.services 
  FOR SELECT 
  USING (active = true);

CREATE POLICY "Admins can manage all services" 
  ON public.services 
  FOR ALL 
  USING (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();