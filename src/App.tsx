import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import LanguageWrapper from "@/components/LanguageWrapper";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Service detail pages
import EvenementsPage from "./pages/services/Evenements";
import VacancesPage from "./pages/services/Vacances";
import ActivitesPage from "./pages/services/Activites";
import HebergementPage from "./pages/services/Hebergement";
import SpaPage from "./pages/services/Spa";
import TransportPage from "./pages/services/Transport";
import LivraisonPage from "./pages/services/Livraison";
import DestinationDetail from "./pages/DestinationDetail";
import ActivityDetail from "./pages/ActivityDetail";
import EventDetail from "./pages/EventDetail";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminEventsService from "./pages/admin/AdminEventsService";
import AdminVacationsService from "./pages/admin/AdminVacationsService";
import AdminActivitiesService from "./pages/admin/AdminActivitiesService";
import AdminAccommodationService from "./pages/admin/AdminAccommodationService";
import AdminSpaService from "./pages/admin/AdminSpaService";
import AdminTransportService from "./pages/admin/AdminTransportService";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminContent from "./pages/admin/AdminContent";

const queryClient = new QueryClient();

// Define routes configuration to avoid duplication
const routesConfig = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <Services /> },
  { path: "/services/evenements", element: <EvenementsPage /> },
  { path: "/services/vacances", element: <VacancesPage /> },
  { path: "/services/activites", element: <ActivitesPage /> },
  { path: "/services/hebergement", element: <HebergementPage /> },
  { path: "/services/spa", element: <SpaPage /> },
  { path: "/services/transport", element: <TransportPage /> },
  { path: "/services/livraison", element: <LivraisonPage /> },
  { path: "/destinations", element: <Navigate to="/services/vacances" replace /> },
  { path: "/destinations/:id", element: <DestinationDetail /> },
  { path: "/activites/:id", element: <ActivityDetail /> },
  { path: "/evenements/:id", element: <EventDetail /> },
  { path: "/activites", element: <ActivitesPage /> },
  { path: "/boutique", element: <Boutique /> },
  { path: "/boutique/:id", element: <ProductDetail /> },
  { path: "/panier", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/favoris", element: <Wishlist /> },
  { path: "/mes-commandes", element: <Orders /> },
  { path: "/about", element: <Navigate to="/a-propos" replace /> },
  { path: "/a-propos", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/remboursement", element: <RefundPolicy /> },
  { path: "/confidentialite", element: <PrivacyPolicy /> },
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LanguageWrapper>
              <ScrollToTop />
              <Routes>
                {/* French routes (default) */}
                {routesConfig.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
                
                {/* English routes */}
                {routesConfig.map((route) => (
                  <Route key={`en${route.path}`} path={`/en${route.path === '/' ? '' : route.path}`} element={route.element} />
                ))}
                
                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="orders" element={<AdminOrders />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="services/events" element={<AdminEventsService />} />
                  <Route path="services/vacations" element={<AdminVacationsService />} />
                  <Route path="services/activities" element={<AdminActivitiesService />} />
                  <Route path="services/accommodation" element={<AdminAccommodationService />} />
                  <Route path="services/spa" element={<AdminSpaService />} />
                  <Route path="services/transport" element={<AdminTransportService />} />
                  <Route path="analytics" element={<AdminAnalytics />} />
                  <Route path="content" element={<AdminContent />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LanguageWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
