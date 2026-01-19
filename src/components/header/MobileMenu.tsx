import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import type { NavItem } from "@/types";
import DesktopNav from "./DesktopNav";
import { socialLinks } from "@/config/contact";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  openDropdown: string | null;
  setOpenDropdown: (name: string | null) => void;
  onNavClick: (item: NavItem) => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  items,
  openDropdown,
  setOpenDropdown,
  onNavClick
}: MobileMenuProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';
  const otherLang = currentLang === 'fr' ? 'en' : 'fr';

  const handleLanguageSwitch = () => {
    let currentPath = location.pathname;
    if (currentPath.startsWith('/en')) {
      currentPath = currentPath.slice(3) || '/';
    } else if (currentPath.startsWith('/fr')) {
      currentPath = currentPath.slice(3) || '/';
    }
    const newPath = otherLang === 'fr' 
      ? currentPath 
      : `/en${currentPath === '/' ? '' : currentPath}`;
    i18n.changeLanguage(otherLang);
    navigate(newPath);
    onClose();
  };
  const handleNavClick = (item: NavItem) => {
    onNavClick(item);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-50 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`lg:hidden flex flex-col justify-start font-base fixed h-screen h-[100dvh] px-5 top-0 z-[60] bg-white w-72 xs:w-80 overflow-auto duration-700 header-nav scrollbar-hide ${isOpen ? 'left-0' : '-left-80'}`}>
        {/* Mobile Logo */}
        <div className="flex items-center relative z-9 py-6.25 lg:hidden">
          <Link to="/" className="table-cell align-middle" onClick={onClose}>
            <img src={logo} alt="Atlas For Events" className="object-contain duration-500 h-12" />
          </Link>
        </div>

        {/* Navigation Items */}
        <DesktopNav
          items={items}
          isScrolled={false}
          useDarkText={true}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onNavClick={handleNavClick}
        />

        {/* Mobile Quick Links */}
        <div className="lg:hidden block max-lg:p-5 border-t border-gray-200 mt-4">
          <div className="space-y-3">
            <Link to={currentLang === 'en' ? '/en/favoris' : '/favoris'} className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.favorites')}
            </Link>
            <Link to={currentLang === 'en' ? '/en/panier' : '/panier'} className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.myCart')}
            </Link>
            <Link to={currentLang === 'en' ? '/en/mes-commandes' : '/mes-commandes'} className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.myOrders')}
            </Link>
          </div>
        </div>

        {/* Mobile Language Switcher */}
        <div className="xs:hidden block p-5 border-t border-gray-200">
          <button
            onClick={handleLanguageSwitch}
            className="flex items-center gap-2 text-primary font-medium py-2 w-full"
          >
            <Globe className="h-5 w-5" />
            <span>{otherLang === 'fr' ? 'Français' : 'English'}</span>
          </button>
        </div>

        {/* Mobile Social Links */}
        <div className="lg:hidden block max-lg:p-5 text-center mt-auto pb-safe safe-bottom">
          <div className="flex justify-center gap-3 mb-4">
            <a
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.facebook}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.instagram}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
