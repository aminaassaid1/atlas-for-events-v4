import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Page Not Found - 404" : "Page Non Trouvée - 404"}
        description={isEnglish ? "The page you are looking for does not exist." : "La page que vous recherchez n'existe pas."}
        noIndex={true}
        locale={isEnglish ? "en_US" : "fr_FR"}
      />
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-8xl font-bold text-primary mb-4"
          >
            404
          </motion.div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('notFound.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to={getLocalizedPath("/")}>
                <ArrowLeft className="w-4 h-4" />
                {t('notFound.back')}
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link to={getLocalizedPath("/")}>
                <Home className="w-4 h-4" />
                {t('notFound.home')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
