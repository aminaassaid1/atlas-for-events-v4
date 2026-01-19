import { motion } from "framer-motion";
import { Compass, Target, ArrowRight, MapPin, Users, Award, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Template images from assets
import cloudImg from "@/assets/images/cloud.png";
import inrBannerCloud from "@/assets/images/inr-banner-cloud.png";
import hotBalloonLeft from "@/assets/images/hotballon-Left.png";
import hotBalloonRight from "@/assets/images/hotballon-right.png";

import abtPic1 from "@/assets/images/abt-pic1.png";
import weRecPic3 from "@/assets/images/we-rec-camp.webp";
import weRecPic3_2 from "@/assets/images/we-rec-camel.webp";
import travelerImg from "@/assets/images/traveler.png";
import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";

// Destination images from Atlas For Events
import destMarrakech from "@/assets/images/destinations/marrakech-about.webp";
import destEssaouira from "@/assets/images/destinations/essaouira-about.webp";
import destFes from "@/assets/images/destinations/fes-about.webp";
import destAgadir from "@/assets/images/destinations/agadir-about.webp";
import destCasablanca from "@/assets/images/destinations/casablanca-about.webp";
import destTanger from "@/assets/images/destinations/tanger-about.webp";

// Service images - Best quality from project
import serviceGuide from "@/assets/images/activities/marrakech-medina.webp";
import serviceDivertissement from "@/assets/images/events/soiree-privee.webp";
import serviceTransport from "@/assets/images/transport/chauffeur.webp";
import serviceGastronomie from "@/assets/images/activities/diner-agafay-table.webp";
import serviceCuisine from "@/assets/images/activities/cours-cuisine.jpg";
import serviceSpa from "@/assets/images/spa/massage.webp";
import serviceRepos from "@/assets/images/activities/agafay-lounge.webp";
import serviceHebergement from "@/assets/images/hebergement/riad-dar-ikalimo.webp";

// Title separator
import titleSeparator from "@/assets/images/background/Title-Separator.png";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, setIsVisible };
};

const About = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const happyCustomers = useCounter(3500);
  const yearsExperience = useCounter(10);

  const features = [
    {
      icon: Compass,
      title: t('about.trustedGuide'),
      description: t('about.trustedGuideDesc'),
    },
    {
      icon: Target,
      title: t('about.missionVision'),
      description: t('about.missionVisionDesc'),
    },
  ];

  const destinations = [
    { name: "Marrakech", image: destMarrakech },
    { name: "Essaouira", image: destEssaouira },
    { name: "Fès", image: destFes },
    { name: "Agadir", image: destAgadir },
    { name: "Casablanca", image: destCasablanca },
    { name: "Tanger", image: destTanger },
  ];

  const services = [
    { title: t('about.guideExpert'), image: serviceGuide, link: "/services/activites" },
    { title: t('about.entertainment'), image: serviceDivertissement, link: "/services/evenements" },
    { title: t('about.transportVip'), image: serviceTransport, link: "/services/transport" },
    { title: t('about.gastronomy'), image: serviceGastronomie, link: "/services/vacances" },
    { title: t('about.localCuisine'), image: serviceCuisine, link: "/services/vacances" },
    { title: t('about.spaMassage'), image: serviceSpa, link: "/services/spa" },
    { title: t('about.restRelax'), image: serviceRepos, link: "/services/vacances" },
    { title: t('about.accommodation'), image: serviceHebergement, link: "/services/hebergement" },
  ];

  const stats = [
    { icon: MapPin, value: "50+", label: t('about.destinations') },
    { icon: Users, value: "3500+", label: t('about.happyClients') },
    { icon: Award, value: "10+", label: t('about.yearsExperience') },
    { icon: Heart, value: "100%", label: t('about.satisfaction') },
  ];

  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "About Us - Events & Travel Experts" : "À Propos - Experts en Événementiel & Voyages"}
        description={isEnglish 
          ? "Discover Atlas For Events: your trusted partner for exceptional events and unforgettable trips in Morocco. 10+ years of experience, 3500+ satisfied clients."
          : "Découvrez Atlas For Events : votre partenaire de confiance pour des événements d'exception et des voyages inoubliables au Maroc. 10+ ans d'expérience, 3500+ clients satisfaits."
        }
        keywords={isEnglish 
          ? "about Atlas For Events, event agency Morocco, travel agency Marrakech, Morocco tourism experts"
          : "à propos Atlas For Events, agence événementielle Maroc, agence de voyage Marrakech, experts tourisme Maroc"
        }
        url="https://atlasforevents.com/a-propos"
        locale={isEnglish ? "en_US" : "fr_FR"}
      />
      {/* Hero Banner - Travlla Style with Sky Background */}
      <section className="relative min-h-[400px] lg:min-h-[640px] overflow-hidden bg-gradient-to-b from-[#e8f6f7] via-[#f0f9fa] to-white">
        {/* Cloud Animation Layer */}
        <div className="absolute h-50 w-full top-[200px] left-0 z-[1]">
          <div className="inline-block whitespace-nowrap animate-moveCloud">
            <img src={inrBannerCloud} alt="" className="h-[190px]" />
          </div>
        </div>

        {/* Hot Air Balloons */}
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[45px] bottom-[65px] z-[2]"
        >
          <img src={hotBalloonLeft} alt="" className="w-[84px] md:w-[84px] w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute md:-right-[60px] -right-10 top-[165px] z-[2]"
        >
          <img src={hotBalloonRight} alt="" className="md:w-[150px] w-20" />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[640px] pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-[28px] md:text-[52px] lg:text-[60px] text-primary relative"
          >
            {t('about.pageTitle')}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <Link 
              to={getLocalizedPath("/")} 
              className="text-base pr-[30px] relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-[26px] after:font-normal hover:text-secondary transition-colors"
            >
              {t('about.breadcrumbHome')}
            </Link>
            <span className="text-base font-semibold text-primary">{t('about.pageTitle')}</span>
          </motion.nav>
        </div>
      </section>

      {/* We Recommend Section - Travlla Template Layout */}
      <section className="xl:pt-[120px] pt-[50px] bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left - Images Composition (Travlla Style) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="relative mr-6">
                {/* Main Image with circular background */}
                <div className="2xl:max-w-[376px] max-w-[320px] relative z-[1] before:absolute sm:before:w-[390px] sm:before:h-[390px] before:w-[322px] before:h-[322px] before:left-0 before:top-[90px] before:bg-paleaqua/30 before:rounded-full before:-z-[1] max-md:-left-12 max-sm:left-0">
                  <img
                    src={abtPic1}
                    alt="Voyageur"
                    className="w-full"
                    loading="lazy"
                  />
                </div>

                {/* Large Circular Image - Bottom Right */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 2xl:w-[390px] 2xl:h-[390px] xl:w-[362px] xl:h-[362px] md:w-[302px] md:h-[302px] w-[282px] h-[282px] border-[20px] border-paleaqua rounded-full absolute xl:right-7 md:-right-6 -right-24 xl:bottom-[70px] bottom-[62px] z-[1] max-sm:hidden overflow-hidden"
                >
                  <img
                    src={weRecPic3}
                    alt="Aventure"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </motion.div>

                {/* Small Circular Image - Top Right */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-[200px] h-[200px] border-[10px] border-white rounded-full shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] absolute 2xl:left-[362px] xl:left-[314px] md:left-[298px] left-[258px] 2xl:top-[1px] xl:-top-[83px] md:-top-[15px] -top-[5px] z-[1] max-sm:hidden overflow-hidden"
                >
                  <img
                    src={weRecPic3_2}
                    alt="Guide"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold text-foreground mb-6 leading-tight">
                {t('about.weRecommend')} <span className="text-secondary">{t('about.weRecommendHighlight')}</span> {t('about.weRecommendEnd')}
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                {t('about.description')}
              </p>

              {/* Feature Cards */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-5 p-5 bg-white border border-border/50 rounded-3xl hover:shadow-[0px_30px_26px_rgba(41,137,145,0.15)] transition-all duration-500 group hover:bg-primary"
                  >
                    <div className="w-14 h-14 min-w-[56px] bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary group-hover:text-white mb-1 transition-colors">{feature.title}</h4>
                      <p className="text-muted-foreground group-hover:text-white/80 text-sm transition-colors">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA and Happy Customers */}
              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-[0px_15px_30px_rgba(180,244,97,0.4)]">
                  <Link to={getLocalizedPath("/services")}>
                    {t('about.discoverMore')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <motion.div 
                  className="flex items-center gap-4"
                  onViewportEnter={() => happyCustomers.setIsVisible(true)}
                >
                  <div className="flex -space-x-3">
                    {[testimonial1, testimonial2, testimonial3].map((src, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-3 border-white overflow-hidden shadow-lg">
                        <img src={src} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="block font-black text-[22px] text-secondary">{happyCustomers.count.toLocaleString()}+</span>
                    <span className="text-xs uppercase font-medium text-muted-foreground tracking-wider">{t('about.happyClients')}</span>
                  </div>
                </motion.div>
              </div>

              {/* Years Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onViewportEnter={() => yearsExperience.setIsVisible(true)}
                className="mt-12 inline-flex items-center gap-4"
              >
                <span 
                  className="text-[80px] md:text-[100px] font-black text-secondary leading-none"
                  style={{ textShadow: '4px 5px 0 hsl(var(--primary))' }}
                >
                  {yearsExperience.count}
                </span>
                <span className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {t('about.yearsExperience')}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="xl:py-[120px] py-[50px] bg-white relative overflow-hidden">
        {/* Decorative Balloons */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-3%] top-[30%] hidden lg:block"
        >
          <img src={hotBalloonLeft} alt="" className="w-20 opacity-50" />
        </motion.div>

        <div className="container mx-auto px-4">
          {/* Title with Separator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold text-foreground mb-2">
              <span className="text-secondary">{t('about.popularDestinationsHighlight')}</span> {t('about.popularDestinations')}
            </h2>
            <img src={titleSeparator} alt="" className="mx-auto -mt-4 mb-4" />
            <p className="text-muted-foreground text-lg">
              {t('about.destinationsDesc')}
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="rounded-3xl overflow-hidden aspect-[3/5] relative shadow-[0px_20px_40px_rgba(41,137,145,0.15)]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-white font-bold text-sm drop-shadow-lg">
                      {dest.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Amazing Services */}
      <section className="xl:py-[120px] py-[50px] bg-primary relative">
        <div className="container mx-auto px-4">
          {/* Title with Separator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold text-white mb-2">
              {t('about.ourServicesTitle')} <span className="text-secondary">{t('about.ourServicesHighlight')}</span>
            </h2>
            <img src={titleSeparator} alt="" className="mx-auto -mt-4 mb-4 brightness-200" />
            <p className="text-white/70 text-lg">
              {t('about.ourServicesDesc')}
            </p>
          </motion.div>

          {/* Services Grid - Travlla Style */}
          <div className="bg-paleaqua/20 rounded-[48px] p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {services.map((service, index) => (
                <Link to={getLocalizedPath(service.link)} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-3xl p-[15px] text-center shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="rounded-2xl overflow-hidden mb-4 aspect-square">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground/80 pb-2">
                      {service.title}
                    </h4>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using shared component */}
      <TestimonialsSection />

      {/* CTA / Newsletter Section - Travlla Style */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold leading-tight">
                <span className="text-white">{t('newsletter.title').split(' ')[0]}</span>{" "}
                <span className="text-primary">{t('newsletter.title').split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-primary/80 font-medium text-lg mt-2">
                {t('newsletter.description')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <div className="bg-paleaqua rounded-full p-1.5 flex items-center shadow-[0px_20px_40px_rgba(41,137,145,0.2)]">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 bg-white rounded-full px-6 py-4 text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center ml-1.5 hover:bg-primary/90 transition-colors shadow-lg">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
