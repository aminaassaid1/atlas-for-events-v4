import { motion } from "framer-motion";
import { ArrowLeft, Package, Calendar, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";

const RefundPolicy = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Refund Policy" : "Politique de Remboursement"}
        description={isEnglish 
          ? "Refund policy of Atlas For Events. Cancellation conditions for services and products."
          : "Politique de remboursement d'Atlas For Events. Conditions d'annulation pour les services et produits."
        }
        url="https://atlasforevents.com/remboursement"
        noIndex={false}
        locale={isEnglish ? "en_US" : "fr_FR"}
      />
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
                {t('refund.breadcrumbHome')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">{t('refund.pageTitle')}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('refund.pageTitle')}
            </h1>
            <p className="text-muted-foreground">
              {t('refund.lastUpdated')}: Janvier 2025
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
              {t('refund.intro')}
            </p>

            {/* Services Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('refund.servicesTitle')}</h2>
              </div>
              <div className="pl-13 space-y-3">
                <p className="text-muted-foreground leading-relaxed">{t('refund.servicesContent1')}</p>
                <p className="text-muted-foreground leading-relaxed">{t('refund.servicesContent2')}</p>
              </div>
            </div>

            {/* Products Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('refund.productsTitle')}</h2>
              </div>
              <div className="pl-13 space-y-3">
                <p className="text-muted-foreground leading-relaxed">{t('refund.productsContent1')}</p>
                <p className="text-muted-foreground leading-relaxed">{t('refund.productsContent2')}</p>
              </div>
            </div>

            {/* Process Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('refund.processTitle')}</h2>
              </div>
              <div className="pl-13 space-y-3">
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t(`refund.processStep${step}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exceptions Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('refund.exceptionsTitle')}</h2>
              </div>
              <div className="pl-13">
                <p className="text-muted-foreground leading-relaxed">{t('refund.exceptionsContent')}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-3">{t('refund.contactTitle')}</h2>
              <p className="text-muted-foreground">
                {t('refund.contactContent')}{' '}
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

export default RefundPolicy;
