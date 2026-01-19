import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect language from URL path
    const isEnglish = location.pathname.startsWith('/en');
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';
    const targetLang = isEnglish ? 'en' : 'fr';
    
    if (currentLang !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [location.pathname, i18n]);

  return <>{children}</>;
};

export default LanguageWrapper;
