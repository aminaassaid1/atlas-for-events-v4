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
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  author_name: string;
  author_location: string | null;
  author_image: string | null;
  content: string;
  rating: number;
  featured: boolean;
  active: boolean;
}

const emptyTestimonial = {
  author_name: '',
  author_location: '',
  author_image: '',
  content: '',
  rating: 5,
  featured: false,
  active: true,
};

export default function AdminContent() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState(emptyTestimonial);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Erreur lors du chargement des témoignages');
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenDialog = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        author_name: testimonial.author_name,
        author_location: testimonial.author_location || '',
        author_image: testimonial.author_image || '',
        content: testimonial.content,
        rating: testimonial.rating,
        featured: testimonial.featured,
        active: testimonial.active,
      });
    } else {
      setEditingTestimonial(null);
      setFormData(emptyTestimonial);
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const testimonialData = {
        ...formData,
        author_location: formData.author_location || null,
        author_image: formData.author_image || null,
      };

      if (editingTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', editingTestimonial.id);

        if (error) throw error;
        toast.success('Témoignage mis à jour');
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([testimonialData]);

        if (error) throw error;
        toast.success('Témoignage créé');
      }

      setIsDialogOpen(false);
      fetchTestimonials();
    } catch (error: any) {
      console.error('Error saving testimonial:', error);
      toast.error(error.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleDelete = async (testimonialId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', testimonialId);

      if (error) throw error;
      toast.success('Témoignage supprimé');
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const toggleActive = async (testimonial: Testimonial) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ active: !testimonial.active })
        .eq('id', testimonial.id);

      if (error) throw error;
      
      setTestimonials(prev => prev.map(t => 
        t.id === testimonial.id ? { ...t, active: !t.active } : t
      ));
      
      toast.success(testimonial.active ? 'Témoignage masqué' : 'Témoignage affiché');
    } catch (error) {
      console.error('Error toggling active:', error);
    }
  };

  const toggleFeatured = async (testimonial: Testimonial) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ featured: !testimonial.featured })
        .eq('id', testimonial.id);

      if (error) throw error;
      
      setTestimonials(prev => prev.map(t => 
        t.id === testimonial.id ? { ...t, featured: !t.featured } : t
      ));
    } catch (error) {
      console.error('Error toggling featured:', error);
    }
  };

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
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contenu</h1>
          <p className="text-muted-foreground">Gérez les témoignages et le contenu du site</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un témoignage
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTestimonial ? 'Modifier le témoignage' : 'Nouveau témoignage'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="author_name">Nom de l'auteur *</Label>
                <Input
                  id="author_name"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author_location">Lieu</Label>
                <Input
                  id="author_location"
                  value={formData.author_location}
                  onChange={(e) => setFormData({ ...formData, author_location: e.target.value })}
                  placeholder="Paris, France"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author_image">URL de la photo</Label>
                <Input
                  id="author_image"
                  type="url"
                  value={formData.author_image}
                  onChange={(e) => setFormData({ ...formData, author_image: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Témoignage *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rating">Note (1-5)</Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: value })}
                      className={cn(
                        'p-1 transition-colors',
                        value <= formData.rating ? 'text-secondary' : 'text-muted-foreground'
                      )}
                    >
                      <Star className={cn('w-6 h-6', value <= formData.rating && 'fill-current')} />
                    </button>
                  ))}
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
                  <span className="text-sm">Témoignage vedette</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Visible</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">
                  {editingTestimonial ? 'Enregistrer' : 'Créer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Testimonials Grid */}
      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={cn(
                'bg-card rounded-xl border border-border p-6',
                !testimonial.active && 'opacity-60'
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {testimonial.author_image ? (
                    <img
                      src={testimonial.author_image}
                      alt={testimonial.author_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {testimonial.author_name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author_name}</p>
                    {testimonial.author_location && (
                      <p className="text-sm text-muted-foreground">{testimonial.author_location}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => toggleFeatured(testimonial)}
                  className={cn(
                    'p-1 transition-colors',
                    testimonial.featured ? 'text-secondary' : 'text-muted-foreground hover:text-secondary'
                  )}
                >
                  <Star className={cn('w-5 h-5', testimonial.featured && 'fill-current')} />
                </button>
              </div>

              <div className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      'w-4 h-4',
                      star <= testimonial.rating
                        ? 'text-secondary fill-current'
                        : 'text-muted-foreground'
                    )}
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleOpenDialog(testimonial)}
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Modifier
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => toggleActive(testimonial)}
                >
                  {testimonial.active ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDelete(testimonial.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border p-8 text-center text-muted-foreground">
          Aucun témoignage pour le moment
        </div>
      )}
    </div>
  );
}
