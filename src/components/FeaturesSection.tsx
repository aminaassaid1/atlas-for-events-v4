import { motion } from "framer-motion";
import { Clock, Award, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import customer4 from "@/assets/images/hpy-cus/pic4.jpg";
import customer5 from "@/assets/images/hpy-cus/pic5.jpg";
import customer6 from "@/assets/images/hpy-cus/pic6.jpg";
import planeImg from "@/assets/images/plane1.png";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: t('features.support247'),
      description: t('features.supportDesc')
    },
    {
      icon: Award,
      title: t('features.experts'),
      description: t('features.expertsDesc')
    },
    {
      icon: Target,
      title: t('features.custom'),
      description: t('features.customDesc')
    },
    {
      icon: Users,
      title: t('features.clients'),
      description: t('features.clientsDesc')
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-paleaqua/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
              {t('features.badge')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {t('features.title')}{" "}
              <span className="text-secondary">{t('features.titleHighlight')}</span>{" "}
              {t('features.titleEnd')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t('features.description')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.slice(1, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-white/60 backdrop-blur rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA & Stats */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                {t('features.discoverMore')}
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src={customer4} alt={t('features.happyClientAlt')} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                  <img src={customer5} alt={t('features.happyClientAlt')} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                  <img src={customer6} alt={t('features.happyClientAlt')} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                </div>
                <div>
                  <span className="block text-2xl font-black text-primary">1.5k+</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{t('features.happyClients')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* 24/7 Badge */}
            <div className="absolute -left-4 lg:-left-8 top-8 z-10 bg-white p-2 rounded-2xl shadow-xl">
              <div className="bg-primary p-5 rounded-xl text-center">
                <span className="text-3xl font-black text-secondary block">24/7</span>
                <span className="text-white text-sm font-medium">{t('features.support')}</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Events"
                className="w-full h-auto"
                loading="lazy"
                src="/lovable-uploads/a755758f-c224-48ee-a309-d38bd9474057.webp"
              />
            </div>

            {/* Floating Plane */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 hidden lg:block"
            >
              <img src={planeImg} alt="" className="w-40 opacity-80" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
