import { motion } from "framer-motion";
import { ArrowLeft, Shield, Database, Share2, Cookie, UserCheck, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to={isEnglish ? "/en" : "/"} className="text-muted-foreground hover:text-primary transition-colors">
                {t('privacy.breadcrumbHome')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">{t('privacy.pageTitle')}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('privacy.pageTitle')}
            </h1>
            <p className="text-muted-foreground">
              {t('privacy.lastUpdated')}: Janvier 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            {/* Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('privacy.intro')}
            </p>

            {/* Collection Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.collectionTitle')}</h2>
              </div>
              <div className="pl-13 space-y-3">
                <p className="text-muted-foreground leading-relaxed">{t('privacy.collectionContent1')}</p>
                <p className="text-muted-foreground leading-relaxed">{t('privacy.collectionContent2')}</p>
              </div>
            </div>

            {/* Use Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.useTitle')}</h2>
              </div>
              <div className="pl-13">
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {t(`privacy.useItem${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Protection Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.protectionTitle')}</h2>
              </div>
              <div className="pl-13">
                <p className="text-muted-foreground leading-relaxed">{t('privacy.protectionContent')}</p>
              </div>
            </div>

            {/* Sharing Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.sharingTitle')}</h2>
              </div>
              <div className="pl-13">
                <p className="text-muted-foreground leading-relaxed">{t('privacy.sharingContent')}</p>
              </div>
            </div>

            {/* Cookies Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.cookiesTitle')}</h2>
              </div>
              <div className="pl-13">
                <p className="text-muted-foreground leading-relaxed">{t('privacy.cookiesContent')}</p>
              </div>
            </div>

            {/* Rights Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('privacy.rightsTitle')}</h2>
              </div>
              <div className="pl-13">
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {t(`privacy.rightsItem${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{t('privacy.contactTitle')}</h2>
              </div>
              <p className="text-muted-foreground">
                {t('privacy.contactContent')}{' '}
                <a href="mailto:atlasforevents@gmail.com" className="text-primary hover:underline">
                  atlasforevents@gmail.com
                </a>
              </p>
            </div>

            {/* Back Link */}
            <Link
              to={isEnglish ? "/en" : "/"}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')}
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
