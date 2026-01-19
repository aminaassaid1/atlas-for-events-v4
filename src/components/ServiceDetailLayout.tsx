import { motion } from "framer-motion";
import { ChevronRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import airplaneTakeoff from "@/assets/images/airplane-takeoff.png";

interface ServiceType {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Amenity {
  category: string;
  items: { name: string; description: string }[];
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  keyFeatures: { title: string; description: string }[];
  serviceTypes: ServiceType[];
  faqs: FAQ[];
  amenities: Amenity[];
  relatedServices: RelatedService[];
  tags: string[];
}

const ServiceDetailLayout = ({
  title,
  subtitle,
  description,
  longDescription,
  heroImage,
  galleryImages,
  features,
  keyFeatures,
  serviceTypes,
  faqs,
  amenities,
  relatedServices,
  tags,
}: ServiceDetailProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-atlas-light-blue via-white to-atlas-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-atlas-gold/30 blur-3xl" />
        </div>
        
        {/* Animated clouds */}
        <div className="absolute top-1/3 left-0 w-full h-32 z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="whitespace-nowrap inline-block"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg className="inline-block h-24 opacity-20" viewBox="0 0 200 60">
              <ellipse cx="60" cy="40" rx="50" ry="20" fill="white" />
              <ellipse cx="90" cy="35" rx="40" ry="18" fill="white" />
              <ellipse cx="40" cy="42" rx="30" ry="15" fill="white" />
            </svg>
            <svg className="inline-block h-24 opacity-20 ml-20" viewBox="0 0 200 60">
              <ellipse cx="60" cy="40" rx="50" ry="20" fill="white" />
              <ellipse cx="90" cy="35" rx="40" ry="18" fill="white" />
              <ellipse cx="40" cy="42" rx="30" ry="15" fill="white" />
            </svg>
          </motion.div>
        </div>

        {/* Airplane */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            src={airplaneTakeoff}
            alt="Airplane"
            className="w-48 md:w-64 lg:w-80 opacity-90"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Hot air balloons */}
        <motion.div
          className="absolute right-8 bottom-10 z-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-16 bg-gradient-to-b from-atlas-gold to-primary rounded-t-full relative">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-primary/80 rounded-b" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-32 lg:py-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <nav className="flex items-center justify-center gap-2 text-muted-foreground">
              <Link to={getLocalizedPath("/")} className="hover:text-primary transition-colors">{t('nav.home')}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={getLocalizedPath("/services")} className="hover:text-primary transition-colors">{t('nav.services')}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">{title}</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Image Slider */}
              <div className="relative mb-8 rounded-3xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <motion.img
                    key={currentSlide}
                    src={galleryImages[currentSlide]}
                    alt={`${title} - Image ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Slider Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Main Info */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {subtitle}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {longDescription}
                </p>

                {/* Features Checklist */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  {t('serviceDetail.whatWeOffer')}
                </h3>
                <ul className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-atlas-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Service Types Table */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  {t('serviceDetail.typesOf')} {title}
                </h3>
                <div className="border-4 border-muted rounded-3xl overflow-hidden mb-10">
                  {serviceTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`flex flex-col sm:flex-row ${
                        index !== serviceTypes.length - 1 ? "border-b border-muted" : ""
                      }`}
                    >
                      <div className="sm:w-48 py-4 px-6 font-medium text-foreground bg-muted/30">
                        {type.name}
                      </div>
                      <div className="flex-1 py-4 px-6 text-muted-foreground border-l border-muted">
                        {type.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  {t('serviceDetail.keyFeatures')}
                </h3>
                <ul className="space-y-4 mb-10">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-atlas-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{feature.title}: </span>
                        <span className="text-muted-foreground">{feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* FAQ Accordion */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  {t('serviceDetail.faq')}
                </h3>
                <div className="border-4 border-muted rounded-3xl overflow-hidden mb-10">
                  <Accordion type="single" collapsible className="bg-white">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-b border-muted last:border-0">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/20">
                          <span className="text-lg font-medium text-foreground">
                            {String(index + 1).padStart(2, '0')} - {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Amenities */}
                {amenities.map((amenity, index) => (
                  <div key={index} className="mb-8">
                    <div className="bg-muted/30 rounded-3xl overflow-hidden">
                      <div className="px-6 py-4 border-b border-muted">
                        <h4 className="text-xl font-semibold text-foreground">
                          {amenity.category}
                        </h4>
                      </div>
                      {amenity.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`flex flex-col sm:flex-row ${
                            itemIndex !== amenity.items.length - 1 ? "border-b border-muted" : ""
                          }`}
                        >
                          <div className="sm:w-48 py-4 px-6 font-medium text-foreground">
                            {item.name}
                          </div>
                          <div className="flex-1 py-4 px-6 text-muted-foreground sm:border-l border-muted">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {/* Related Services */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 pl-4 border-l-4 border-atlas-gold bg-gradient-to-r from-atlas-gold/20 to-transparent py-2 px-4">
                  {t('serviceDetail.relatedServices')}
                </h4>
                <div className="bg-white border border-muted rounded-3xl p-6">
                  <ul className="space-y-3">
                    {relatedServices.map((service, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <Link
                          to={service.href}
                          className="text-lg font-medium text-foreground hover:text-atlas-gold transition-colors"
                        >
                          {service.title}
                        </Link>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 pl-4 border-l-4 border-atlas-gold bg-gradient-to-r from-atlas-gold/20 to-transparent py-2 px-4">
                  {t('serviceDetail.popularTags')}
                </h4>
                <div className="bg-white border border-muted rounded-3xl p-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-muted/50 text-foreground text-sm font-medium rounded-full hover:bg-atlas-gold hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary rounded-3xl p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  {t('serviceDetail.needHelp')}
                </h4>
                <p className="text-white/80 mb-6 text-sm">
                  {t('serviceDetail.needHelpDesc')}
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Link to={getLocalizedPath("/contact")}>{t('nav.contact')}</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailLayout;
