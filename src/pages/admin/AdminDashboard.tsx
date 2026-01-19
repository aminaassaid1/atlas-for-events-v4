import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import StatsCard from '@/components/admin/StatsCard';
import { ShoppingCart, Package, Users, TrendingUp, Eye, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface DashboardStats {
  totalOrders: number;
  totalProducts: number;
  totalRevenue: number;
  pendingOrders: number;
  pageViews: number;
  recentOrders: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalProducts: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    pageViews: 0,
    recentOrders: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch orders count and revenue
        const { data: orders, error: ordersError } = await supabase
          .from('orders')
          .select('id, status, total_amount, created_at, customer_name');

        if (ordersError) throw ordersError;

        const totalOrders = orders?.length || 0;
        const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;
        const pendingOrders = orders?.filter(o => o.status === 'pending').length || 0;

        // Fetch products count
        const { count: productsCount, error: productsError } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true });

        if (productsError) throw productsError;

        // Fetch page views
        const { count: pageViewsCount, error: analyticsError } = await supabase
          .from('analytics_events')
          .select('*', { count: 'exact', head: true })
          .eq('event_type', 'page_view');

        if (analyticsError) throw analyticsError;

        // Get recent orders
        const recentOrders = orders
          ?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5) || [];

        setStats({
          totalOrders,
          totalProducts: productsCount || 0,
          totalRevenue,
          pendingOrders,
          pageViews: pageViewsCount || 0,
          recentOrders,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statusLabels: Record<string, { label: string; color: string }> = {
    pending: { label: 'En attente', color: 'bg-yellow-100 text-yellow-800' },
    confirmed: { label: 'Confirmée', color: 'bg-blue-100 text-blue-800' },
    processing: { label: 'En cours', color: 'bg-purple-100 text-purple-800' },
    shipped: { label: 'Expédiée', color: 'bg-indigo-100 text-indigo-800' },
    delivered: { label: 'Livrée', color: 'bg-green-100 text-green-800' },
    cancelled: { label: 'Annulée', color: 'bg-red-100 text-red-800' },
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
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tableau de bord</h1>
        <p className="text-muted-foreground">Vue d'ensemble de votre activité</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Commandes totales"
          value={stats.totalOrders}
          icon={ShoppingCart}
        />
        <StatsCard
          title="Produits"
          value={stats.totalProducts}
          icon={Package}
        />
        <StatsCard
          title="Revenus"
          value={`${stats.totalRevenue.toLocaleString('fr-FR')} MAD`}
          icon={TrendingUp}
        />
        <StatsCard
          title="En attente"
          value={stats.pendingOrders}
          change={stats.pendingOrders > 0 ? 'Nécessitent votre attention' : 'Aucune'}
          changeType={stats.pendingOrders > 0 ? 'negative' : 'positive'}
          icon={Clock}
        />
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Vues de pages</h2>
            <Eye className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold text-foreground">{stats.pageViews.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mt-1">Total des visites enregistrées</p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Taux de conversion</h2>
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold text-foreground">
            {stats.pageViews > 0 
              ? ((stats.totalOrders / stats.pageViews) * 100).toFixed(1) 
              : 0}%
          </p>
          <p className="text-sm text-muted-foreground mt-1">Visiteurs convertis en clients</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-xl border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Commandes récentes</h2>
        </div>
        
        {stats.recentOrders.length > 0 ? (
          <div className="divide-y divide-border">
            {stats.recentOrders.map((order) => (
              <div key={order.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{order.customer_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(order.created_at), 'dd MMM yyyy, HH:mm', { locale: fr })}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusLabels[order.status]?.color || 'bg-gray-100 text-gray-800'}`}>
                    {statusLabels[order.status]?.label || order.status}
                  </span>
                  <span className="font-semibold text-foreground">
                    {Number(order.total_amount).toLocaleString('fr-FR')} MAD
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            Aucune commande pour le moment
          </div>
        )}
      </div>
    </div>
  );
}
