import { motion } from "framer-motion";
import { Star, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ToursSection = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

  const tours = [
    {
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
      location: t('tours.tour1Location'),
      duration: t('tours.tour1Duration'),
      title: t('tours.tour1Title'),
      price: 45,
      rating: 4.9,
    },
    {
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
      location: t('tours.tour2Location'),
      duration: t('tours.tour2Duration'),
      title: t('tours.tour2Title'),
      price: 200,
      rating: 5.0,
    },
    {
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
      location: t('tours.tour3Location'),
      duration: t('tours.tour3Duration'),
      title: t('tours.tour3Title'),
      price: 85,
      rating: 5.0,
    },
    {
      image: "https://atlasforevents.com/wp-content/uploads/2024/08/Cours-de-cuisine-marocaine-authentique-dans-le-desert-dAgafay.jpg",
      location: t('tours.tour4Location'),
      duration: t('tours.tour4Duration'),
      title: t('tours.tour4Title'),
      price: 75,
      rating: 4.8,
    },
  ];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  const getVisibleTours = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, tours.length); i++) {
      visible.push(tours[(startIndex + i) % tours.length]);
    }
    return visible;
  };

  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('tours.badge')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            {t('tours.title')} <span className="text-secondary">{t('tours.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('tours.description')}
          </p>
        </motion.div>

        {/* Tours Slider */}
        <div className="relative px-2 sm:px-0">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all border border-border/50"
            aria-label={t('common.previous')}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all border border-border/50"
            aria-label={t('common.next')}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-8 sm:px-10 lg:px-12">
            {getVisibleTours().map((tour, index) => (
              <motion.div
                key={`${tour.location}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.location}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary text-sm font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-md">
                    <Calendar className="h-4 w-4" />
                    {tour.duration}
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur py-2.5 px-4 rounded-xl">
                    <h3 className="text-white text-lg font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      {tour.location}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-primary font-medium mb-4 line-clamp-2 min-h-[3rem]">
                    {tour.title}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-secondary text-2xl font-black">{tour.price}€</span>
                      <span className="text-sm text-muted-foreground block">{t('tours.perPerson')}</span>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex gap-0.5 text-secondary mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({tour.rating} {t('tours.reviews')})</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/activites" 
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-full font-semibold transition-all"
                  >
                    {t('tours.discover')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
