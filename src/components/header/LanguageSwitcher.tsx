import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled: boolean;
  useDarkText: boolean;
}

const LanguageSwitcher = ({ isScrolled, useDarkText }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';
  const otherLang = currentLang === 'fr' ? 'en' : 'fr';

  const getTextColorClass = () => {
    if (isScrolled) return "text-white hover:text-secondary";
    if (useDarkText) return "text-primary hover:text-secondary";
    return "text-white hover:text-secondary";
  };

  const handleLanguageSwitch = () => {
    // Get current path without language prefix
    let currentPath = location.pathname;
    
    // Remove existing language prefix if present
    if (currentPath.startsWith('/en')) {
      currentPath = currentPath.slice(3) || '/';
    } else if (currentPath.startsWith('/fr')) {
      currentPath = currentPath.slice(3) || '/';
    }
    
    // Build new path with new language
    const newPath = otherLang === 'fr' 
      ? currentPath  // French is default, no prefix
      : `/en${currentPath === '/' ? '' : currentPath}`;
    
    i18n.changeLanguage(otherLang);
    navigate(newPath);
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide ${getTextColorClass()}`}
      aria-label={`Switch to ${otherLang === 'fr' ? 'French' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span>{otherLang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
