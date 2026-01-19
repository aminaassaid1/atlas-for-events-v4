import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Palmtree, Bike, Home, Sparkles, Car } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cloudBg from "@/assets/images/background/Cloud-bg.png";
import hotBalloonLeftImg from "@/assets/images/hotballon-Left.png";
import hotBalloonRightImg from "@/assets/images/hotballon-right.png";
import chefchaouenActivity from "@/assets/images/activities/chefchaouen-activity.jpg";

const DestinationsSection = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const services = [
    {
      id: "excursions",
      icon: Bike,
      title: t('services.excursions'),
      description: t('services.excursionsDesc'),
      image: chefchaouenActivity,
      link: "/services/vacances",
    },
    {
      id: "evenements",
      icon: Calendar,
      title: t('services.events'),
      description: t('services.eventsDesc'),
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/al-elmes-ULHxWq8reao-unsplash-scaled.jpg",
      link: "/services/evenements",
    },
    {
      id: "activites",
      icon: Bike,
      title: t('services.activities'),
      description: t('services.activitiesDesc'),
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
      link: "/services/activites",
    },
    {
      id: "hebergement",
      icon: Home,
      title: t('services.accommodation'),
      description: t('services.accommodationDesc'),
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg",
      link: "/services/hebergement",
    },
    {
      id: "spa",
      icon: Sparkles,
      title: t('services.spa'),
      description: t('services.spaDesc'),
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/2150917946-1-scaled.jpg",
      link: "/services/spa",
    },
    {
      id: "transport",
      icon: Car,
      title: t('services.transport'),
      description: t('services.transportDesc'),
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/dino-reichmuth-A5rCN8626Ck-unsplash-scaled.jpg",
      link: "/services/transport",
    },
  ];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(services[(startIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section className="relative py-20 lg:py-32 bg-lightturquoise overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-contain bg-bottom bg-repeat-x opacity-20"
        style={{ backgroundImage: `url(${cloudBg})` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 font-display">
            {t('services.title')} <span className="text-secondary">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Slider */}
        <div className="relative px-2 sm:px-0">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-1 sm:left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-border/50"
            aria-label={t('common.previous')}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-1 sm:right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-border/50"
            aria-label={t('common.next')}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-8 sm:px-12 md:px-14">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${service.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={service.link}>
                  {/* Card */}
                  <div className="relative rounded-2xl overflow-hidden h-[380px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-md">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {service.description}
                      </p>
                      
                      {/* Discover Link */}
                      <div className="mt-3 flex items-center gap-2 text-secondary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {t('services.discover')}
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decorations - More Subtle */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-1/3 opacity-30 hidden lg:block"
      >
        <img src={hotBalloonLeftImg} alt="" className="w-32" loading="lazy" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 top-1/4 opacity-25 hidden lg:block"
      >
        <img src={hotBalloonRightImg} alt="" className="w-20" loading="lazy" />
      </motion.div>
    </section>
  );
};

export default DestinationsSection;
