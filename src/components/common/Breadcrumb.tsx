import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  return (
    <nav className={`flex items-center gap-2 text-sm font-base overflow-x-auto ${className}`}>
      <Link 
        to={getLocalizedPath("/")} 
        className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
      >
        {t('nav.home')}
      </Link>
      
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
          {item.href ? (
            <Link 
              to={item.href} 
              className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
