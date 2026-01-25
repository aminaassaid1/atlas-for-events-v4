import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, MapPin, Compass, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  const quickLinks = [
    {
      icon: Compass,
      label: isEnglish ? "Activities" : "Activités",
      path: "/services/activites",
      description: isEnglish ? "Explore adventures" : "Découvrir les aventures",
    },
    {
      icon: MapPin,
      label: isEnglish ? "Destinations" : "Destinations",
      path: "/about",
      description: isEnglish ? "Visit Morocco" : "Visiter le Maroc",
    },
    {
      icon: Mail,
      label: isEnglish ? "Contact" : "Contact",
      path: "/contact",
      description: isEnglish ? "Get in touch" : "Nous contacter",
    },
  ];

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Page Not Found - 404" : "Page Non Trouvée - 404"}
        description={isEnglish ? "The page you are looking for does not exist." : "La page que vous recherchez n'existe pas."}
        noIndex={true}
        locale={isEnglish ? "en_US" : "fr_FR"}
      />
      
      <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-lightturquoise via-paleaqua/30 to-background" />
        
        {/* Floating decorative shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-50" />
        </motion.div>

        <div className="relative z-10 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Animated compass/map illustration */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-80 h-80 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden"
                >
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border-4 border-white/20 rounded-full"
                  />
                  
                  <div className="text-center z-10">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="text-9xl font-bold text-white drop-shadow-lg"
                    >
                      404
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-2 mt-4"
                    >
                      <Compass className="w-6 h-6 text-secondary" />
                      <span className="text-white/80 text-lg font-medium">
                        {isEnglish ? "Lost in Morocco?" : "Perdu au Maroc ?"}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Search className="w-8 h-8 text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center"
                >
                  <MapPin className="w-7 h-7 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Mobile 404 display */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="lg:hidden text-8xl font-bold text-primary mb-6"
              >
                404
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-secondary/20 text-primary font-semibold text-sm uppercase tracking-wider rounded-full mb-6"
              >
                {isEnglish ? "Page Not Found" : "Page Non Trouvée"}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              >
                {isEnglish 
                  ? "Oops! This page wandered off..." 
                  : "Oups ! Cette page s'est égarée..."
                }
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              >
                {isEnglish 
                  ? "Don't worry, even the best explorers get lost sometimes. Let's help you find your way back to amazing Moroccan experiences." 
                  : "Ne vous inquiétez pas, même les meilleurs explorateurs se perdent parfois. Laissez-nous vous guider vers de nouvelles aventures marocaines."
                }
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to={getLocalizedPath("/")}>
                    <Home className="w-5 h-5" />
                    {isEnglish ? "Back to Home" : "Retour à l'accueil"}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all"
                  onClick={() => window.history.back()}
                >
                  <button type="button" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-5 h-5" />
                    {isEnglish ? "Go Back" : "Retour"}
                  </button>
                </Button>
              </motion.div>

              {/* Quick links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {isEnglish ? "Or explore these popular pages:" : "Ou explorez ces pages populaires :"}
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Link
                        to={getLocalizedPath(link.path)}
                        className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <link.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-left">
                          <span className="block font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
