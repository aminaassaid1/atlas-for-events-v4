import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
      <div className={`lg:hidden flex flex-col justify-start font-base fixed h-screen px-5 top-0 z-[60] bg-white w-72 overflow-auto duration-700 header-nav custom-scroll ${isOpen ? 'left-0' : '-left-75'}`}>
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
            <Link to="/favoris" className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.favorites')}
            </Link>
            <Link to="/panier" className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.myCart')}
            </Link>
            <Link to="/mes-commandes" className="block text-primary font-medium py-2" onClick={onClose}>
              {t('common.myOrders')}
            </Link>
          </div>
        </div>

        {/* Mobile Social Links */}
        <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
          <ul>
            <li className="inline-block mx-0.5">
              <a
                className="size-10 !leading-10 border border-black/10 text-center text-primary"
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks.facebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="inline-block mx-0.5">
              <a
                className="size-10 !leading-10 border border-black/10 text-center text-primary"
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks.instagram}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
