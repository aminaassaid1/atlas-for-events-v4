/**
 * Hebergement page - Accommodation and lodging services
 * Displays villas, riads, apartments, and luxury camps
 * Fetches data dynamically from database
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Users, Shield, Utensils, Car, Sparkles, Star, MapPin, Bed, Bath, Wifi, Phone, Calendar, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useServices, Service } from "@/hooks/useServices";

interface ReservationFormProps {
  selectedProperty?: string;
  onClearProperty?: () => void;
  properties: Service[];
}

// Helper function to map property type to form value
const getPropertyTypeValue = (category: string | null): string => {
  const typeMap: Record<string, string> = {
    "Appartement": "appartement",
    "appartement": "appartement",
    "Villa": "villa",
    "villa": "villa",
    "Riad": "riad",
    "riad": "riad",
    "Camp de luxe": "camp",
    "camp": "camp",
    "luxury-camp": "camp"
  };
  return category ? typeMap[category] || "" : "";
};

const ReservationFormSection = ({ selectedProperty, onClearProperty, properties }: ReservationFormProps) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyName: selectedProperty || "",
    guests: "",
    message: ""
  });
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const dateLocale = i18n.language === 'fr' ? fr : enUS;

  // Update property name and type when selectedProperty changes
  useEffect(() => {
    if (selectedProperty) {
      const property = properties.find(p => p.title === selectedProperty);
      setFormData(prev => ({
        ...prev,
        propertyName: selectedProperty,
        propertyType: property ? getPropertyTypeValue(property.category) : prev.propertyType
      }));
    } else {
      setFormData(prev => ({ ...prev, propertyName: "", propertyType: "" }));
    }
  }, [selectedProperty, properties]);

  const handleClearProperty = () => {
    setFormData(prev => ({ ...prev, propertyName: "", propertyType: "" }));
    onClearProperty?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const checkInStr = checkIn ? format(checkIn, "dd/MM/yyyy") : "Non spécifié";
    const checkOutStr = checkOut ? format(checkOut, "dd/MM/yyyy") : "Non spécifié";
    const whatsappMessage = `Bonjour, je souhaite réserver un hébergement.\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nPropriété: ${formData.propertyName}\nType d'hébergement: ${formData.propertyType}\nNombre de personnes: ${formData.guests}\nDate d'arrivée: ${checkInStr}\nDate de départ: ${checkOutStr}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section id="reservation-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-lightturquoise rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">{t('accommodationPage.formTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Property Name - highlighted when pre-selected */}
              {formData.propertyName && (
                <div className="p-3 bg-secondary/20 rounded-xl border border-secondary flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">{t('accommodationPage.selectedProperty')} :</span>
                    <p className="font-bold text-primary">{formData.propertyName}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClearProperty}
                    className="text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    {t('accommodationPage.change')}
                  </Button>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('accommodationPage.yourName')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder={t('accommodationPage.yourEmail')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder={t('accommodationPage.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">{t('accommodationPage.selectType')}</option>
                  <option value="appartement">{t('accommodationPage.apartment')}</option>
                  <option value="villa">{t('accommodationPage.villa')}</option>
                  <option value="riad">{t('accommodationPage.riad')}</option>
                  <option value="camp">{t('accommodationPage.camp')}</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-left flex items-center gap-2",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="w-4 h-4" />
                      {checkIn ? format(checkIn, "dd/MM/yyyy") : t('accommodationPage.checkIn')}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      locale={dateLocale}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-left flex items-center gap-2",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="w-4 h-4" />
                      {checkOut ? format(checkOut, "dd/MM/yyyy") : t('accommodationPage.checkOut')}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      locale={dateLocale}
                      disabled={(date) => date < (checkIn || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <input
                type="number"
                placeholder={t('accommodationPage.numberOfGuests')}
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                placeholder={t('accommodationPage.specialRequests')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                {t('accommodationPage.sendRequest')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('accommodationPage.needHelp')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('accommodationPage.contactTitle')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('accommodationPage.contactDescription')}
            </p>

            <div className="space-y-4">
              <a
                href="tel:+33698272483"
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{t('accommodationPage.callUs')}</span>
                  <span className="block text-lg font-bold text-primary">+33 698-272483</span>
                </div>
              </a>

              <a
                href="https://wa.me/33698272483"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{t('accommodationPage.whatsapp')}</span>
                  <span className="block text-lg font-bold text-primary">{t('accommodationPage.chatWithUs')}</span>
                </div>
              </a>
            </div>

            {/* Features List */}
            <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
              <h4 className="font-bold text-primary mb-4">{t('accommodationPage.includedTitle')}</h4>
              <ul className="space-y-3">
                {[
                  t('accommodationPage.included1'),
                  t('accommodationPage.included2'),
                  t('accommodationPage.included3'),
                  t('accommodationPage.included4'),
                  t('accommodationPage.included5')
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hebergement = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProperty, setSelectedProperty] = useState("");

  // Fetch accommodations from database
  const { services: properties, isLoading, error } = useServices({ serviceType: 'accommodation' });

  // Transform database categories for filters
  const availableCategories = useMemo(() => {
    const cats = new Set(properties.map(p => p.category).filter(Boolean));
    return Array.from(cats);
  }, [properties]);

  const filters = [
    { key: "Tous", label: t('accommodationPage.filterAll') },
    { key: "Appartement", label: t('accommodationPage.filterApartment') },
    { key: "Villa", label: t('accommodationPage.filterVilla') },
    { key: "Camp de luxe", label: t('accommodationPage.filterCamp') },
    { key: "Riad", label: t('accommodationPage.filterRiad') }
  ];

  const amenities = [
    { icon: Utensils, name: t('accommodationPage.amenityChef'), description: t('accommodationPage.amenityChefDesc') },
    { icon: Car, name: t('accommodationPage.amenityParking'), description: t('accommodationPage.amenityParkingDesc') },
    { icon: Shield, name: t('accommodationPage.amenitySecurity'), description: t('accommodationPage.amenitySecurityDesc') },
    { icon: Sparkles, name: t('accommodationPage.amenityCleaning'), description: t('accommodationPage.amenityCleaningDesc') },
  ];

  const handleSelectProperty = (propertyName: string) => {
    setSelectedProperty(propertyName);
    setTimeout(() => {
      document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredProperties = useMemo(() => {
    if (activeFilter === "Tous") return properties;
    return properties.filter(p => p.category === activeFilter);
  }, [properties, activeFilter]);

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Luxury Accommodation in Marrakech - Villas, Riads & Camps" : "Hébergement de Luxe à Marrakech - Villas, Riads & Camps"}
        description={isEnglish 
          ? "Discover our selection of luxury accommodations in Marrakech: private villas, traditional riads, modern apartments and exclusive desert camps."
          : "Découvrez notre sélection d'hébergements de luxe à Marrakech : villas privées, riads traditionnels, appartements modernes et camps de luxe dans le désert."
        }
        keywords={isEnglish 
          ? "accommodation Marrakech, villa Morocco, riad Marrakech, desert camp Agafay, luxury rental Morocco"
          : "hébergement Marrakech, villa Maroc, riad Marrakech, camp désert Agafay, location luxe Maroc"
        }
        url="https://atlasforevents.com/services/hebergement"
        locale={isEnglish ? "en_US" : "fr_FR"}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://atlasforevents.com/wp-content/uploads/2024/06/Lobby-panorama.webp"
            alt={t('accommodationPage.heroTitle')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[67px]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="hover:text-secondary transition-colors">{t('accommodationPage.breadcrumbHome')}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-secondary transition-colors">{t('accommodationPage.breadcrumbServices')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{t('accommodationPage.breadcrumbAccommodation')}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t('accommodationPage.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            {t('accommodationPage.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all",
                  activeFilter === filter.key
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('accommodationPage.sectionBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('accommodationPage.sectionTitle')}
            </h2>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center min-h-[300px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">{t('common.errorLoading')}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image_url || '/placeholder.svg'}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-primary text-sm font-medium rounded-full">
                        {property.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      {property.features && property.features.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {property.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="bg-muted px-2 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-primary">{property.price}€</span>
                        <span className="text-muted-foreground text-sm">/{t('accommodationPage.perNight')}</span>
                      </div>
                      <Button
                        onClick={() => handleSelectProperty(property.title)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        {t('accommodationPage.book')}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('accommodationPage.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('accommodationPage.amenitiesBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('accommodationPage.amenitiesTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <amenity.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{amenity.name}</h3>
                <p className="text-muted-foreground text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <ReservationFormSection 
        selectedProperty={selectedProperty} 
        onClearProperty={() => setSelectedProperty("")}
        properties={properties}
      />
    </PageLayout>
  );
};

export default Hebergement;
