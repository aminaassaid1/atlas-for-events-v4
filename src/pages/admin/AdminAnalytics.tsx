import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import StatsCard from '@/components/admin/StatsCard';
import { Eye, MousePointer, Globe, Clock } from 'lucide-react';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

interface AnalyticsEvent {
  id: string;
  event_type: string;
  page_path: string | null;
  user_agent: string | null;
  referrer: string | null;
  created_at: string;
}

export default function AdminAnalytics() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  async function fetchAnalytics() {
    try {
      const sevenDaysAgo = subDays(new Date(), 7);
      
      const { data, error } = await supabase
        .from('analytics_events')
        .select('*')
        .gte('created_at', sevenDaysAgo.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Calculate stats
  const totalPageViews = events.filter(e => e.event_type === 'page_view').length;
  const uniqueSessions = new Set(events.map(e => e.user_agent)).size;
  
  // Page views by day
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dayStart = startOfDay(date);
    const dayEnd = endOfDay(date);
    
    const count = events.filter(e => {
      const eventDate = new Date(e.created_at);
      return eventDate >= dayStart && eventDate <= dayEnd && e.event_type === 'page_view';
    }).length;
    
    return {
      date: format(date, 'dd/MM', { locale: fr }),
      views: count,
    };
  });

  // Top pages
  const pageCounts = events
    .filter(e => e.page_path)
    .reduce((acc, e) => {
      const path = e.page_path || '/';
      acc[path] = (acc[path] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, count }));

  // Top referrers
  const referrerCounts = events
    .filter(e => e.referrer && e.referrer !== '')
    .reduce((acc, e) => {
      const referrer = e.referrer || 'Direct';
      acc[referrer] = (acc[referrer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const topReferrers = Object.entries(referrerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([referrer, count]) => ({ referrer, count }));

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
        <h1 className="text-2xl font-bold text-foreground">Analytiques</h1>
        <p className="text-muted-foreground">Statistiques des 7 derniers jours</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Pages vues"
          value={totalPageViews}
          icon={Eye}
        />
        <StatsCard
          title="Sessions uniques"
          value={uniqueSessions}
          icon={MousePointer}
        />
        <StatsCard
          title="Pages visitées"
          value={Object.keys(pageCounts).length}
          icon={Globe}
        />
        <StatsCard
          title="Période"
          value="7 jours"
          icon={Clock}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Page Views Chart */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Vues par jour</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={last7Days}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Pages Chart */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Pages populaires</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPages} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  dataKey="path"
                  type="category"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={10}
                  width={100}
                  tickFormatter={(value) => value.length > 15 ? value.substring(0, 15) + '...' : value}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages Table */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Pages les plus visitées</h3>
          </div>
          <div className="divide-y divide-border">
            {topPages.length > 0 ? (
              topPages.map((page, index) => (
                <div key={page.path} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground truncate max-w-[200px]">
                      {page.path}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {page.count} vues
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Aucune donnée disponible
              </div>
            )}
          </div>
        </div>

        {/* Top Referrers Table */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Sources de trafic</h3>
          </div>
          <div className="divide-y divide-border">
            {topReferrers.length > 0 ? (
              topReferrers.map((ref, index) => (
                <div key={ref.referrer} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary-foreground text-xs flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground truncate max-w-[200px]">
                      {ref.referrer}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {ref.count} visites
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Aucune donnée de référent
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
