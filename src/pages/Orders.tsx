import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Clock, CheckCircle, Truck, XCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface OrderItem {
  id: string;
  product_id: string;
  product_title: string;
  product_image: string;
  quantity: number;
  unit_price: number;
}

interface Order {
  id: string;
  status: string;
  total_amount: number;
  shipping_address: any;
  created_at: string;
  order_items?: OrderItem[];
}

const Orders = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  const statusConfig: Record<string, { label: string; icon: any; color: string }> = {
    pending: { label: t('orders.statusPending'), icon: Clock, color: "bg-yellow-500/10 text-yellow-600" },
    confirmed: { label: t('orders.statusConfirmed'), icon: CheckCircle, color: "bg-blue-500/10 text-blue-600" },
    processing: { label: t('orders.statusProcessing'), icon: Package, color: "bg-purple-500/10 text-purple-600" },
    shipped: { label: t('orders.statusShipped'), icon: Truck, color: "bg-primary/10 text-primary" },
    delivered: { label: t('orders.statusDelivered'), icon: CheckCircle, color: "bg-green-500/10 text-green-600" },
    cancelled: { label: t('orders.statusCancelled'), icon: XCircle, color: "bg-destructive/10 text-destructive" },
  };

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchOrders(session.user.id);
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const fetchOrders = async (userId: string) => {
    try {
      // Fetch orders
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (ordersError) throw ordersError;

      // Fetch order items for each order
      const ordersWithItems = await Promise.all(
        ((ordersData as unknown as Order[]) || []).map(async (order) => {
          const { data: items } = await supabase
            .from("order_items")
            .select("*")
            .eq("order_id", order.id);
          return { ...order, order_items: (items as unknown as OrderItem[]) || [] };
        })
      );

      setOrders(ordersWithItems);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast({
        title: t('orders.error'),
        description: t('orders.loadError'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">{t('orders.loginToView')}</h1>
            <Button asChild size="lg">
              <Link to={getLocalizedPath("/contact")}>{t('orders.login')}</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (orders.length === 0) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">{t('orders.noOrders')}</h1>
            <p className="text-muted-foreground mb-6">
              {t('orders.noOrdersDesc')}
            </p>
            <Button asChild size="lg">
              <Link to={getLocalizedPath("/boutique")}>
                {t('checkout.viewShop')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('orders.title')}</h1>
            <p className="text-muted-foreground">
              {orders.length} {orders.length > 1 ? t('orders.orders') : t('orders.order')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {orders.map((order, index) => {
              const status = statusConfig[order.status] || statusConfig.pending;
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-sm"
                >
                  {/* Order Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t('orders.orderPrefix')}{order.id.slice(0, 8).toUpperCase()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString(isEnglish ? "en-US" : "fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={`${status.color} gap-1`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </Badge>
                      <span className="text-xl font-bold text-primary">
                        {Number(order.total_amount).toLocaleString()}€
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="grid gap-4">
                    {order.order_items?.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.product_image}
                          alt={item.product_title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product_title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Qté: {item.quantity} × {Number(item.unit_price).toLocaleString()}€
                          </p>
                        </div>
                        <span className="font-semibold">
                          {(item.quantity * Number(item.unit_price)).toLocaleString()}€
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  {order.shipping_address && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-1">{t('orders.deliveryTo')}</p>
                      <p className="text-sm">
                        {order.shipping_address.firstName} {order.shipping_address.lastName}
                        <br />
                        {order.shipping_address.address}
                        <br />
                        {order.shipping_address.postalCode} {order.shipping_address.city}, {order.shipping_address.country}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Orders;
