import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoDark from "@/assets/logo-dark.png";
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div 
            className="lg:hidden flex flex-col justify-start font-base fixed h-screen h-[100dvh] px-5 top-0 left-0 z-[60] bg-white w-72 xs:w-80 overflow-auto header-nav scrollbar-hide"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Mobile Logo */}
            <motion.div 
              className="flex items-center relative z-9 py-6.25 lg:hidden"
              custom={0}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/" className="table-cell align-middle" onClick={onClose}>
                <img src={logoDark} alt="Atlas For Events" className="object-contain duration-500 h-12" />
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <motion.div
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <DesktopNav
                items={items}
                isScrolled={false}
                useDarkText={true}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onNavClick={handleNavClick}
              />
            </motion.div>

            {/* Mobile Quick Links */}
            <motion.div 
              className="lg:hidden block max-lg:p-5 border-t border-gray-200 mt-4"
              custom={2}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-3">
                <Link to={currentLang === 'en' ? '/en/favoris' : '/favoris'} className="block text-primary font-medium py-2" onClick={onClose}>
                  {t('common.favorites', 'Mes favoris')}
                </Link>
                <Link to={currentLang === 'en' ? '/en/panier' : '/panier'} className="block text-primary font-medium py-2" onClick={onClose}>
                  {t('common.myCart', 'Mon panier')}
                </Link>
                <Link to={currentLang === 'en' ? '/en/mes-commandes' : '/mes-commandes'} className="block text-primary font-medium py-2" onClick={onClose}>
                  {t('common.myOrders', 'Mes commandes')}
                </Link>
              </div>
            </motion.div>

            {/* Mobile Language Switcher */}
            <motion.div 
              className="xs:hidden block p-5 border-t border-gray-200"
              custom={3}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                onClick={handleLanguageSwitch}
                className="flex items-center gap-2 text-primary font-medium py-2 w-full"
              >
                <Globe className="h-5 w-5" />
                <span>{otherLang === 'fr' ? 'Français' : 'English'}</span>
              </button>
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div 
              className="lg:hidden block max-lg:p-5 text-center mt-auto pb-safe safe-bottom"
              custom={4}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
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
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
