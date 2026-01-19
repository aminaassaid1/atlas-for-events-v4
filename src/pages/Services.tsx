import { motion } from "framer-motion";
import { Calendar, Palmtree, Bike, Home, Sparkles, Car, Package, Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const services = [
    {
      id: "vacances",
      icon: Bike,
      title: t('servicesPage.excursions'),
      subtitle: t('servicesPage.excursionsSubtitle'),
      description: t('servicesPage.excursionsDesc'),
      longDescription: t('servicesPage.excursionsLongDesc'),
      features: [
        t('servicesPage.excursionFeature1'),
        t('servicesPage.excursionFeature2'),
        t('servicesPage.excursionFeature3'),
        t('servicesPage.excursionFeature4'),
        t('servicesPage.excursionFeature5'),
        t('servicesPage.excursionFeature6'),
      ],
      image: "/src/assets/images/activities/chefchaouen-activity.jpg",
      color: "bg-primary"
    },
    {
      id: "evenements",
      icon: Calendar,
      title: t('servicesPage.events'),
      subtitle: t('servicesPage.eventsSubtitle'),
      description: t('servicesPage.eventsDesc'),
      longDescription: t('servicesPage.eventsLongDesc'),
      features: [
        t('servicesPage.eventFeature1'),
        t('servicesPage.eventFeature2'),
        t('servicesPage.eventFeature3'),
        t('servicesPage.eventFeature4'),
        t('servicesPage.eventFeature5'),
        t('servicesPage.eventFeature6'),
      ],
      image: "https://atlasforevents.com/wp-content/uploads/2024/06/bride-groom-having-their-wedding-beach-scaled-1.jpg",
      color: "bg-atlas-gold"
    },
    {
      id: "activites",
      icon: Bike,
      title: t('servicesPage.activities'),
      subtitle: t('servicesPage.activitiesSubtitle'),
      description: t('servicesPage.activitiesDesc'),
      longDescription: t('servicesPage.activitiesLongDesc'),
      features: [
        t('servicesPage.activityFeature1'),
        t('servicesPage.activityFeature2'),
        t('servicesPage.activityFeature3'),
        t('servicesPage.activityFeature4'),
        t('servicesPage.activityFeature5'),
        t('servicesPage.activityFeature6'),
      ],
      image: "/src/assets/images/activities/buggy-palmeraie.webp",
      color: "bg-primary"
    },
    {
      id: "hebergement",
      icon: Home,
      title: t('servicesPage.accommodation'),
      subtitle: t('servicesPage.accommodationSubtitle'),
      description: t('servicesPage.accommodationDesc'),
      longDescription: t('servicesPage.accommodationLongDesc'),
      features: [
        t('servicesPage.accommodationFeature1'),
        t('servicesPage.accommodationFeature2'),
        t('servicesPage.accommodationFeature3'),
        t('servicesPage.accommodationFeature4'),
        t('servicesPage.accommodationFeature5'),
        t('servicesPage.accommodationFeature6'),
      ],
      image: "/src/assets/images/hebergement/bedouin-agafay.jpg",
      color: "bg-atlas-gold"
    },
    {
      id: "spa",
      icon: Sparkles,
      title: t('servicesPage.spa'),
      subtitle: t('servicesPage.spaSubtitle'),
      description: t('servicesPage.spaDesc'),
      longDescription: t('servicesPage.spaLongDesc'),
      features: [
        t('servicesPage.spaFeature1'),
        t('servicesPage.spaFeature2'),
        t('servicesPage.spaFeature3'),
        t('servicesPage.spaFeature4'),
        t('servicesPage.spaFeature5'),
        t('servicesPage.spaFeature6'),
      ],
      image: "/src/assets/images/services/spa-massage.jpg",
      color: "bg-primary"
    },
    {
      id: "transport",
      icon: Car,
      title: t('servicesPage.transport'),
      subtitle: t('servicesPage.transportSubtitle'),
      description: t('servicesPage.transportDesc'),
      longDescription: t('servicesPage.transportLongDesc'),
      features: [
        t('servicesPage.transportFeature1'),
        t('servicesPage.transportFeature2'),
        t('servicesPage.transportFeature3'),
        t('servicesPage.transportFeature4'),
        t('servicesPage.transportFeature5'),
        t('servicesPage.transportFeature6'),
      ],
      image: "/src/assets/images/transport-hero.webp",
      color: "bg-atlas-gold"
    },
    {
      id: "livraison",
      icon: Package,
      title: t('servicesPage.delivery'),
      subtitle: t('servicesPage.deliverySubtitle'),
      description: t('servicesPage.deliveryDesc'),
      longDescription: t('servicesPage.deliveryLongDesc'),
      features: [
        t('servicesPage.deliveryFeature1'),
        t('servicesPage.deliveryFeature2'),
        t('servicesPage.deliveryFeature3'),
        t('servicesPage.deliveryFeature4'),
        t('servicesPage.deliveryFeature5'),
        t('servicesPage.deliveryFeature6'),
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      color: "bg-primary"
    }
  ];

  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Our Services - Events, Travel & Wellness" : "Nos Services - Événements, Voyages & Bien-être"}
        description={isEnglish 
          ? "Discover all Atlas For Events services: excursions, event planning, activities, accommodation, spa, transport and delivery in Marrakech."
          : "Découvrez tous les services Atlas For Events : excursions, organisation d'événements, activités, hébergement, spa, transport et livraison à Marrakech."
        }
        keywords={isEnglish 
          ? "services Marrakech, events Morocco, travel services, spa wellness, VIP transport, luxury accommodation"
          : "services Marrakech, événements Maroc, services voyage, spa bien-être, transport VIP, hébergement luxe"
        }
        url="https://atlasforevents.com/services"
        locale={isEnglish ? "en_US" : "fr_FR"}
      />
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-b from-primary/10 to-background mt-0 pt-[204px]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-atlas-gold font-medium mb-4 block">{t('servicesPage.badge')}</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('servicesPage.title')} <span className="text-primary">{t('servicesPage.titleHighlight')}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('servicesPage.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Floating Icon */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? "-left-6" : "-right-6"} ${service.color} p-6 rounded-2xl shadow-xl`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-atlas-gold font-medium mb-2 block">{service.subtitle}</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="group">
                    <Link to={getLocalizedPath(`/services/${service.id}`)}>
                      {t('servicesPage.learnMore')}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild className="group">
                    <Link to={getLocalizedPath("/contact")}>
                      {t('servicesPage.requestQuote')}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('common.readyForExperience')}
            </h2>
            <p className="text-white/80 mb-8">
              {t('common.contactUsToday')}
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to={getLocalizedPath("/contact")}>
                {t('nav.contact')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
