import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/footer-bg.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-primary"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-[#0a1628]/85" />
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Atlas For Events"
              className="h-12 mb-6"
            />
            <p className="text-white/70 mb-6 font-normal">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/profile.php?id=61566269972374" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/atlas.for.events/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to={getLocalizedPath("/")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/a-propos")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/activites")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.activities')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/boutique")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/contact")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('footer.ourServices')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to={getLocalizedPath("/services/activites")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('footer.adventures')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/activites")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('footer.guidedTours')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/activites")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('footer.culturalExp')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('footer.accommodationSpa')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services")} className="text-white/70 hover:text-secondary transition-colors">
                  {t('footer.transportTransfers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FFAA0D] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Marrakech, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FFAA0D]" />
                <a href="tel:+33698272483" className="text-white/70 hover:text-secondary transition-colors">
                  +33 6 98 27 24 83
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FFAA0D]" />
                <a href="mailto:atlasforevents@gmail.com" className="text-white/70 hover:text-secondary transition-colors">
                  atlasforevents@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Policy Links */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6 pb-safe">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Atlas For Events. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to={getLocalizedPath("/remboursement")} className="text-white/50 hover:text-secondary transition-colors">
                {t('footer.refundPolicy')}
              </Link>
              <Link to={getLocalizedPath("/confidentialite")} className="text-white/50 hover:text-secondary transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
