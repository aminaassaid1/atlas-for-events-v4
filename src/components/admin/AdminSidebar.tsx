import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  FileText,
  LogOut,
  X,
  Calendar,
  Mountain,
  Compass,
  Home,
  Sparkles,
  Car,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import logo from '@/assets/logo.png';

const navItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { path: '/admin/orders', icon: ShoppingCart, label: 'Commandes' },
  { path: '/admin/products', icon: Package, label: 'Produits' },
];

const serviceItems = [
  { path: '/admin/services/events', icon: Calendar, label: 'Événements' },
  { path: '/admin/services/vacations', icon: Mountain, label: 'Vacances' },
  { path: '/admin/services/activities', icon: Compass, label: 'Activités' },
  { path: '/admin/services/accommodation', icon: Home, label: 'Hébergement' },
  { path: '/admin/services/spa', icon: Sparkles, label: 'Spa' },
  { path: '/admin/services/transport', icon: Car, label: 'Transport' },
];

const otherItems = [
  { path: '/admin/analytics', icon: BarChart3, label: 'Analytiques' },
  { path: '/admin/content', icon: FileText, label: 'Contenu' },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success('Déconnexion réussie');
    navigate('/admin/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-64 bg-[#0a1628] text-white transform transition-transform duration-300 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <img src={logo} alt="Atlas For Events" className="h-10" />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  )
                }
                onClick={onClose}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* Services Section */}
            <div className="pt-4 pb-2">
              <span className="px-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Services
              </span>
            </div>
            {serviceItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  )
                }
                onClick={onClose}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* Other Items */}
            <div className="pt-4 pb-2">
              <span className="px-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Autres
              </span>
            </div>
            {otherItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  )
                }
                onClick={onClose}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Sign out */}
          <div className="p-4 border-t border-white/10">
            <Button
              variant="ghost"
              className="w-full justify-start text-white/70 hover:bg-white/10 hover:text-white"
              onClick={handleSignOut}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Déconnexion
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
