import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { NavItem } from "@/types";

interface DesktopNavProps {
  items: NavItem[];
  isScrolled: boolean;
  useDarkText: boolean;
  openDropdown: string | null;
  setOpenDropdown: (name: string | null) => void;
  onNavClick: (item: NavItem) => void;
}

const DesktopNav = ({
  items,
  isScrolled,
  useDarkText,
  openDropdown,
  setOpenDropdown,
  onNavClick
}: DesktopNavProps) => {
  const { t } = useTranslation();

  const getTextColorClass = () => {
    if (isScrolled) return "lg:text-white text-primary hover:text-secondary";
    if (useDarkText) return "lg:text-primary text-primary hover:text-secondary";
    return "lg:text-white text-primary hover:text-secondary";
  };

  const getTranslatedName = (item: NavItem): string => {
    const navTranslations: Record<string, string> = {
      'Accueil': t('nav.home'),
      'À Propos': t('nav.about'),
      'Services': t('nav.services'),
      'Tous les services': t('nav.allServices'),
      'Événements': t('nav.events'),
      'Vacances': t('nav.vacations'),
      'Activités': t('nav.activities'),
      'Hébergement': t('nav.accommodation'),
      'Spa': t('nav.spa'),
      'Transport': t('nav.transport'),
      'Boutique': t('nav.shop'),
      'Tous les produits': t('nav.allProducts'),
      'Livraison Internationale': t('nav.delivery'),
      'Contact': t('nav.contact'),
    };
    return navTranslations[item.name] || item.name;
  };

  return (
    <ul className="lg:flex flex-wrap navbar-nav">
      {items.map((item) => {
        const translatedName = getTranslatedName(item);
        
        // Item with dropdown
        if (item.subItems && item.subItems.length > 0) {
          return (
            <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
              <button
                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block flex items-center justify-between w-full text-lg font-medium transition-colors duration-300 ${getTextColorClass()}`}
              >
                <span className="inline-block">{translatedName}</span>
                <ChevronDown className={`lg:hidden h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <ul className={`lg:absolute bg-white lg:rounded-xxl block lg:left-0 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 ${openDropdown === item.name ? 'max-lg:block' : 'max-lg:hidden'} lg:opacity-0 lg:invisible lg:translate-y-10`}>
                {item.subItems.map((subItem) => (
                  <li key={subItem.name} className="relative border-b border-black/5">
                    <Link
                      to={subItem.href}
                      className="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25"
                    >
                      <span>{getTranslatedName(subItem)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        // Item with scroll behavior
        if (item.scrollTo) {
          return (
            <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative">
              <button
                onClick={() => onNavClick(item)}
                className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium transition-colors duration-300 ${getTextColorClass()}`}
              >
                <span className="inline-block">{translatedName}</span>
              </button>
            </li>
          );
        }

        // Regular link
        return (
          <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative">
            <Link
              to={item.href}
              className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium transition-colors duration-300 ${getTextColorClass()}`}
            >
              <span className="inline-block">{translatedName}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
