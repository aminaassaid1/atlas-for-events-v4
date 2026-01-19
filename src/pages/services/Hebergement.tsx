/**
 * Hebergement page - Accommodation and lodging services
 * Displays villas, riads, apartments, and luxury camps
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Users, Shield, Utensils, Car, Sparkles, Star, MapPin, Bed, Bath, Wifi, Phone, Calendar, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const properties = [
  {
    id: 1,
    name: "Appartement Victor Hugo",
    type: "Appartement",
    location: "5 min de Carré Eden",
    price: 80,
    image: "/src/assets/images/hebergement/appart-victor-hugo.jpg",
    features: ["Grande terrasse", "Piscine privée", "Vue panoramique"],
    beds: 3,
    baths: 2,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Villa Orientalys",
    type: "Villa",
    location: "Marrakech",
    price: 120,
    image: "/src/assets/images/hebergement/villa-orientalys.webp",
    features: ["Piscine privée", "Chef privé", "Jardin luxuriant"],
    beds: 5,
    baths: 4,
    rating: 5.0,
  },
  {
    id: 3,
    name: "BE Agafay - The Hideaway",
    type: "Camp de luxe",
    location: "Désert d'Agafay",
    price: 150,
    image: "/src/assets/images/hebergement/be-agafay-hideaway.webp",
    features: ["Vues panoramiques", "Gastronomie", "Expériences exclusives"],
    beds: 2,
    baths: 1,
    rating: 5.0,
  },
  {
    id: 4,
    name: "Agafay Luxury Camp",
    type: "Camp de luxe",
    location: "Désert d'Agafay",
    price: 200,
    image: "/src/assets/images/hebergement/agafay-luxury-camp.webp",
    features: ["Tente de luxe", "Vues imprenables", "Expériences exclusives"],
    beds: 2,
    baths: 1,
    rating: 5.0,
  },
  {
    id: 5,
    name: "Le Bédouin Agafay",
    type: "Camp de luxe",
    location: "Désert d'Agafay",
    price: 50,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg",
    features: ["Luxe authentique", "Transport privé", "Dîner inclus"],
    beds: 2,
    baths: 1,
    rating: 4.8,
  },
  {
    id: 6,
    name: "Riad Dar Ikalimo",
    type: "Riad",
    location: "Médina de Marrakech",
    price: 110,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/449029567_879500140885989_1644015659908909457_n-1-636x426.jpg",
    features: ["Vues panoramiques", "Activités nature", "Petit-déjeuner inclus"],
    beds: 4,
    baths: 3,
    rating: 4.9,
  },
];

interface ReservationFormProps {
  selectedProperty?: string;
  onClearProperty?: () => void;
}

// Helper function to map property type to form value
const getPropertyTypeValue = (propertyType: string): string => {
  const typeMap: Record<string, string> = {
    "Appartement": "appartement",
    "Villa": "villa",
    "Riad": "riad",
    "Camp de luxe": "camp"
  };
  return typeMap[propertyType] || "";
};

const ReservationFormSection = ({ selectedProperty, onClearProperty }: ReservationFormProps) => {
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
      const property = properties.find(p => p.name === selectedProperty);
      setFormData(prev => ({
        ...prev,
        propertyName: selectedProperty,
        propertyType: property ? getPropertyTypeValue(property.type) : prev.propertyType
      }));
    } else {
      setFormData(prev => ({ ...prev, propertyName: "", propertyType: "" }));
    }
  }, [selectedProperty]);

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
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProperty, setSelectedProperty] = useState("");

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
    { icon: Users, name: t('accommodationPage.amenityStaff'), description: t('accommodationPage.amenityStaffDesc') },
    { icon: Wifi, name: t('accommodationPage.amenityAssistance'), description: t('accommodationPage.amenityAssistanceDesc') },
  ];

  const filteredProperties = activeFilter === "Tous" 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg"
            alt={t('accommodationPage.heroTitle')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6 text-white/80"
          >
            <Link to="/" className="hover:text-secondary transition-colors">{t('accommodationPage.breadcrumbHome')}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-secondary transition-colors">{t('accommodationPage.breadcrumbServices')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{t('accommodationPage.breadcrumbAccommodation')}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('accommodationPage.heroTitle')}
            </h1>
            <p className="text-xl text-white/90 mb-2">
              {t('accommodationPage.heroSubtitle')}
            </p>
            <p className="text-lg text-white/80">
              {t('accommodationPage.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <ReservationFormSection 
        selectedProperty={selectedProperty} 
        onClearProperty={() => setSelectedProperty("")} 
      />

      {/* Amenities Section */}
      <section className="py-16 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {t('accommodationPage.amenitiesTitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{amenity.name}</h3>
                <p className="text-muted-foreground text-xs">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Catalog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('accommodationPage.catalogTitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('accommodationPage.catalogDescription')}
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-foreground text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {property.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{property.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.beds} {t('accommodationPage.beds')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.baths} {t('accommodationPage.baths')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{property.price}€</span>
                      <span className="text-muted-foreground text-sm">{t('accommodationPage.perNight')}</span>
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedProperty(property.name);
                        document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="rounded-full"
                    >
                      {t('accommodationPage.book')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('accommodationPage.ctaTitle')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('accommodationPage.ctaDescription')}
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
              <Link to="/contact">{t('common.requestQuote')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Hebergement;
