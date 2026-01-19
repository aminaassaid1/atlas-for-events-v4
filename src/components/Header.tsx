import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import { useCart } from "@/hooks/useCart";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navItems, darkHeroPages } from "@/config/navigation";
import { DesktopNav, MobileMenu, MobileMenuButton, HeaderActions } from "./header";
import type { NavItem } from "@/types";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolled = useScrollPosition(50);
  const { cartCount } = useCart();

  // Determine if current page has dark hero background
  const hasDarkHero = darkHeroPages.includes(location.pathname);
  const useDarkText = !hasDarkHero && !isScrolled;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleNavClick = (item: NavItem) => {
    if (item.scrollTo) {
      if (location.pathname === "/") {
        scrollToSection(item.scrollTo);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(item.scrollTo!), 100);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const getHeaderClasses = () => {
    const baseClasses = "site-header sticky-header absolute lg:left-8.75 lg:right-8.75 lg:top-8.75 left-0 right-0 top-0 duration-500 z-50 transition-all";
    
    if (isScrolled) {
      return `${baseClasses} !fixed animate-header-scroll-animation bg-[#0a1628] rounded-b-3xl !top-0`;
    }
    
    if (useDarkText) {
      return `${baseClasses} bg-white/80 backdrop-blur-md lg:rounded-3xl shadow-sm`;
    }
    
    return baseClasses;
  };

  const getCurrentLogo = () => {
    if (isScrolled) return logo;
    return useDarkText ? logoDark : logo;
  };

  return (
    <header className={getHeaderClasses()}>
      <div className="main-bar-wraper">
        <div className="w-full lg:min-h-30 min-h-20 lg:ps-8.75 px-4 lg:pe-13.75 duration-500 rounded-5xl flex items-center justify-between">
          <div className="flex relative w-full">
            {/* Logo */}
            <div className="flex items-center relative z-9 h-20 lg:w-44 w-30">
              <Link to="/" className="table-cell align-middle">
                <img
                  src={getCurrentLogo()}
                  alt="Atlas For Events"
                  className="object-contain duration-500 h-12"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            {/* Mobile Menu */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              items={navItems}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              onNavClick={handleNavClick}
            />

            {/* Desktop Navigation - Hidden on Mobile (shown in MobileMenu) */}
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:flex-1">
              <DesktopNav
                items={navItems}
                isScrolled={isScrolled}
                useDarkText={useDarkText}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onNavClick={handleNavClick}
              />
            </div>

            {/* Right Side Actions */}
            <HeaderActions
              cartCount={cartCount}
              isScrolled={isScrolled}
              useDarkText={useDarkText}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
