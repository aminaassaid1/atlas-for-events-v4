import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Search, Edit, Trash2, Star } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  service_type: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  long_description: string | null;
  image_url: string | null;
  gallery: unknown[];
  price: number | null;
  original_price: number | null;
  duration: string | null;
  category: string | null;
  rating: number;
  review_count: number;
  includes: unknown[];
  highlights: unknown[];
  features: unknown[];
  location: string | null;
  featured: boolean;
  active: boolean;
  sort_order: number;
}

interface ServiceManagerProps {
  serviceType: 'event' | 'vacation' | 'activity' | 'accommodation' | 'spa' | 'transport';
  title: string;
  description: string;
  icon: LucideIcon;
  categoryOptions?: string[];
}

const emptyService = {
  service_type: 'activity',
  slug: '',
  title: '',
  subtitle: '',
  description: '',
  long_description: '',
  image_url: '',
  gallery: [] as string[],
  price: null as number | null,
  original_price: null as number | null,
  duration: '',
  category: '',
  rating: 5.0,
  review_count: 0,
  includes: [] as string[],
  highlights: [] as string[],
  features: [] as string[],
  location: '',
  featured: false,
  active: true,
  sort_order: 0,
};

export default function ServiceManager({ 
  serviceType, 
  title, 
  description, 
  icon: Icon,
  categoryOptions = []
}: ServiceManagerProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ ...emptyService, service_type: serviceType });
  
  const [includesText, setIncludesText] = useState('');
  const [highlightsText, setHighlightsText] = useState('');
  const [featuresText, setFeaturesText] = useState('');
  const [galleryText, setGalleryText] = useState('');

  useEffect(() => {
    fetchServices();
  }, [serviceType]);

  async function fetchServices() {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('service_type', serviceType)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const transformedData = (data || []).map(service => ({
        ...service,
        gallery: Array.isArray(service.gallery) ? service.gallery : [],
        includes: Array.isArray(service.includes) ? service.includes : [],
        highlights: Array.isArray(service.highlights) ? service.highlights : [],
        features: Array.isArray(service.features) ? service.features : [],
      })) as Service[];
      
      setServices(transformedData);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Erreur lors du chargement des services');
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        service_type: serviceType,
        slug: service.slug,
        title: service.title,
        subtitle: service.subtitle || '',
        description: service.description || '',
        long_description: service.long_description || '',
        image_url: service.image_url || '',
        gallery: (service.gallery || []) as string[],
        price: service.price,
        original_price: service.original_price,
        duration: service.duration || '',
        category: service.category || '',
        rating: service.rating,
        review_count: service.review_count,
        includes: (service.includes || []) as string[],
        highlights: (service.highlights || []) as string[],
        features: (service.features || []) as string[],
        location: service.location || '',
        featured: service.featured,
        active: service.active,
        sort_order: service.sort_order,
      });
      setIncludesText(((service.includes || []) as string[]).join('\n'));
      setHighlightsText(((service.highlights || []) as string[]).join('\n'));
      setFeaturesText(((service.features || []) as string[]).join('\n'));
      setGalleryText(((service.gallery || []) as string[]).join('\n'));
    } else {
      setEditingService(null);
      setFormData({ ...emptyService, service_type: serviceType });
      setIncludesText('');
      setHighlightsText('');
      setFeaturesText('');
      setGalleryText('');
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const serviceData = {
        ...formData,
        service_type: serviceType,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        includes: includesText.split('\n').filter(s => s.trim()),
        highlights: highlightsText.split('\n').filter(s => s.trim()),
        features: featuresText.split('\n').filter(s => s.trim()),
        gallery: galleryText.split('\n').filter(s => s.trim()),
        price: formData.price || null,
        original_price: formData.original_price || null,
      };

      if (editingService) {
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);

        if (error) throw error;
        toast.success('Service mis à jour');
      } else {
        const { error } = await supabase
          .from('services')
          .insert([serviceData]);

        if (error) throw error;
        toast.success('Service créé');
      }

      setIsDialogOpen(false);
      fetchServices();
    } catch (error: any) {
      console.error('Error saving service:', error);
      toast.error(error.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleDelete = async (serviceId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', serviceId);

      if (error) throw error;
      toast.success('Service supprimé');
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const toggleFeatured = async (service: Service) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ featured: !service.featured })
        .eq('id', service.id);

      if (error) throw error;
      
      setServices(prev => prev.map(s => 
        s.id === service.id ? { ...s, featured: !s.featured } : s
      ));
    } catch (error) {
      console.error('Error toggling featured:', error);
    }
  };

  const toggleActive = async (service: Service) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ active: !service.active })
        .eq('id', service.id);

      if (error) throw error;
      
      setServices(prev => prev.map(s => 
        s.id === service.id ? { ...s, active: !s.active } : s
      ));
      
      toast.success(service.active ? 'Service désactivé' : 'Service activé');
    } catch (error) {
      console.error('Error toggling active:', error);
    }
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (service.category?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingService ? 'Modifier' : 'Nouveau'} {title.toLowerCase().replace('gestion des ', '').slice(0, -1)}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <Label htmlFor="title">Titre *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                {categoryOptions.length > 0 ? (
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="category">Catégorie</Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="">Sélectionner...</option>
                      {categoryOptions.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="category">Catégorie</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Sous-titre</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="auto-généré si vide"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description courte</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="long_description">Description détaillée</Label>
                <Textarea
                  id="long_description"
                  value={formData.long_description}
                  onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Prix (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value ? parseFloat(e.target.value) : null })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="original_price">Prix barré (€)</Label>
                  <Input
                    id="original_price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.original_price || ''}
                    onChange={(e) => setFormData({ ...formData, original_price: e.target.value ? parseFloat(e.target.value) : null })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="ex: 2h, 1 jour"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Lieu</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="ex: Marrakech"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">Image principale (URL)</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gallery">Galerie (une URL par ligne)</Label>
                <Textarea
                  id="gallery"
                  value={galleryText}
                  onChange={(e) => setGalleryText(e.target.value)}
                  rows={2}
                  placeholder="https://image1.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="includes">Inclus (un par ligne)</Label>
                <Textarea
                  id="includes"
                  value={includesText}
                  onChange={(e) => setIncludesText(e.target.value)}
                  rows={2}
                  placeholder="Transport&#10;Guide"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="highlights">Points forts (un par ligne)</Label>
                <Textarea
                  id="highlights"
                  value={highlightsText}
                  onChange={(e) => setHighlightsText(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Caractéristiques (une par ligne)</Label>
                <Textarea
                  id="features"
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rating">Note (0-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sort_order">Ordre</Label>
                  <Input
                    id="sort_order"
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Vedette</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Actif</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">
                  {editingService ? 'Enregistrer' : 'Créer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm">
        <span className="text-muted-foreground">
          Total: <span className="font-medium text-foreground">{services.length}</span>
        </span>
        <span className="text-muted-foreground">
          Actifs: <span className="font-medium text-foreground">{services.filter(s => s.active).length}</span>
        </span>
        <span className="text-muted-foreground">
          Vedettes: <span className="font-medium text-foreground">{services.filter(s => s.featured).length}</span>
        </span>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={cn(
                'bg-card rounded-xl border border-border overflow-hidden',
                !service.active && 'opacity-60'
              )}
            >
              <div className="aspect-video relative">
                {service.image_url ? (
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Icon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                {service.category && (
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {service.category}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => toggleFeatured(service)}
                  className={cn(
                    'absolute top-2 right-2 p-2 rounded-full transition-colors',
                    service.featured
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-white/80 text-muted-foreground hover:bg-white'
                  )}
                >
                  <Star className={cn('w-4 h-4', service.featured && 'fill-current')} />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-foreground truncate">{service.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  {service.duration && <span>{service.duration}</span>}
                  {service.location && <span>• {service.location}</span>}
                </div>
                
                {service.price && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-foreground">
                      {service.price.toLocaleString('fr-FR')} €
                    </span>
                    {service.original_price && service.original_price > service.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {service.original_price.toLocaleString('fr-FR')} €
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleOpenDialog(service)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Modifier
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleActive(service)}
                  >
                    {service.active ? 'Off' : 'On'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(service.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border p-8 text-center text-muted-foreground">
          {searchQuery
            ? 'Aucun résultat trouvé'
            : 'Aucun élément pour le moment. Cliquez sur "Ajouter" pour commencer.'}
        </div>
      )}
    </div>
  );
}
