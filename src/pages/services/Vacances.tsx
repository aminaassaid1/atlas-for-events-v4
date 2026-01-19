/**
 * Vacances page - Travel and vacation packages
 * Displays destination tours and booking options
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Clock, Star, Car, Plane, UserCheck, ArrowRight, Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Real data from CSV export
const destinations = [
  {
    id: "cooperative-argan",
    name: "Visite Coopérative d'Argan",
    duration: "Demi-journée",
    price: 40,
    originalPrice: 60,
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
    description: "Découvrez MARJANA, une immersion dans la production d'Argan au Maroc",
    category: "Culture",
    rating: 4.9,
    includes: ["Visite guidée", "Démonstrations", "Dégustation", "Transport"]
  },
  {
    id: "trekking-agafay",
    name: "Aventure dans l'Agafay",
    duration: "3-4 heures",
    price: 50,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/randoagafay.jpg",
    description: "Trekking à dos de chameau et délices culturels dans le désert d'Agafay",
    category: "Désert",
    rating: 4.8,
    includes: ["Balade à dos de chameau", "Immersion culturelle", "Repas traditionnel", "Transport"]
  },
  {
    id: "palmeraie-chameau",
    name: "Balade Chameau Palmeraie",
    duration: "1-2 heures",
    price: 25,
    originalPrice: 40,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/d2daa107ff6b37140d01fafba2a01625.jpg-1.webp",
    description: "Expérience envoûtante à dos de chameau dans la Palmeraie de Marrakech",
    category: "Nature",
    rating: 4.9,
    includes: ["Balade chameau", "Thé marocain", "Transferts", "Assurance"]
  },
  {
    id: "quad-marrakech",
    name: "Aventure en Quad",
    duration: "2-3 heures",
    price: 35,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
    description: "Excursion en quad palpitante à travers la Palmeraie de Marrakech",
    category: "Aventure",
    rating: 4.7,
    includes: ["Quad Yamaha 250cc", "Équipement complet", "Thé marocain", "Transport"]
  },
  {
    id: "montgolfiere",
    name: "Vol en Montgolfière",
    duration: "5 heures",
    price: 180,
    originalPrice: 200,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
    description: "Survolez les villages berbères et l'Atlas en montgolfière",
    category: "Premium",
    rating: 5.0,
    includes: ["Vol 1h", "Petit-déjeuner", "Certificat", "Transport 4x4"]
  },
  {
    id: "cours-cuisine",
    name: "Cours de Cuisine Marocaine",
    duration: "4 heures",
    price: 45,
    originalPrice: 60,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
    description: "Cours de cuisine authentique dans le désert d'Agafay",
    category: "Gastronomie",
    rating: 4.9,
    includes: ["Cours avec chef", "Repas complet", "Recettes", "Transport"]
  },
  {
    id: "buggy-palmeraie",
    name: "Aventure en Buggy",
    duration: "2 heures",
    price: 70,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
    description: "Aventure palpitante en buggy dans la Palmeraie de Marrakech",
    category: "Aventure",
    rating: 4.8,
    includes: ["Buggy", "Pause thé berbère", "Guide", "Transport"]
  },
  {
    id: "diner-chez-ali",
    name: "Dîner Spectacle Chez Ali",
    duration: "4 heures",
    price: 45,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/9cabd722-e487-4d05-be00-109180fcf9d9.avif",
    description: "Soirée magique avec dîner marocain et spectacle Fantasia",
    category: "Spectacle",
    rating: 4.7,
    includes: ["Dîner marocain", "Spectacle folklore", "Fantasia", "Transport"]
  },
  {
    id: "sunset-agafay",
    name: "Coucher de Soleil Agafay",
    duration: "5 heures",
    price: 45,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/78b38e7f-e50d-402f-a9fa-b13e30075673.jpeg",
    description: "Coucher de soleil et dîner magique dans le désert d'Agafay avec dromadaires",
    category: "Désert",
    rating: 4.9,
    includes: ["Promenade dromadaire", "Coucher de soleil", "Dîner étoilé", "Transport"]
  },
  {
    id: "cascades-ouzoud",
    name: "Cascades d'Ouzoud",
    duration: "10 heures",
    price: 40,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Ouzoud-Waterfalls-636x426.jpg.webp",
    description: "Excursion aux plus hautes cascades du Maroc (110m)",
    category: "Nature",
    rating: 4.8,
    includes: ["Cascades", "Baignade", "Macaques", "Transport"]
  },
  {
    id: "visite-marrakech",
    name: "Visite Privée Marrakech",
    duration: "7 heures",
    price: 40,
    image: "https://atlasforevents.com/wp-content/uploads/revslider/destinations-card-slider1/miltiadis-fragkidis-ILxHs003uMc-unsplash-scaled.jpg",
    description: "Découvrez les trésors de Marrakech : Koutoubia, Bahia, Souks",
    category: "Culture",
    rating: 5.0,
    includes: ["Guide privé", "Entrées sites", "Mellah", "Souks"]
  }
];

const Vacances = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: "",
    message: ""
  });

  // Pagination logic
  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const paginatedDestinations = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return destinations.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const stats = [
    { value: "6+", label: t('vacationsPage.statsDestinations') },
    { value: "10+", label: t('vacationsPage.statsPartners') },
    { value: "500+", label: t('vacationsPage.statsTravelers') },
    { value: "5★", label: t('vacationsPage.statsRating') }
  ];

  const transportServices = [
    { icon: Car, title: t('vacationsPage.transport1'), description: t('vacationsPage.transport1Desc') },
    { icon: Plane, title: t('vacationsPage.transport2'), description: t('vacationsPage.transport2Desc') },
    { icon: UserCheck, title: t('vacationsPage.transport3'), description: t('vacationsPage.transport3Desc') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Demande Vacances:%0A%0ANom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0ADestination: ${formData.destination}%0ADate: ${formData.date}%0AVoyageurs: ${formData.travelers}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/33698272483?text=${message}`, "_blank");
  };

  const handleBooking = (destination: typeof destinations[0]) => {
    const message = `Bonjour, je souhaite réserver le voyage "${destination.name}" à ${destination.price}€.`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <PageLayout>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg" alt={t('vacationsPage.heroTitle')} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[85px]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="hover:text-secondary transition-colors">{t('vacationsPage.breadcrumbHome')}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-secondary transition-colors">{t('vacationsPage.breadcrumbServices')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{t('vacationsPage.breadcrumbVacations')}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t('vacationsPage.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            {t('vacationsPage.heroSubtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto mt-4 text-white/80"
          >
            {t('vacationsPage.heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('vacationsPage.sectionBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('vacationsPage.sectionTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('vacationsPage.sectionDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {destination.duration}
                    </span>
                    <span className="bg-secondary/90 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-bold">
                      {destination.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {destination.rating}
                    </span>
                  </div>
                  {destination.originalPrice && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {t('vacationsPage.promo')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      {destination.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {destination.includes.slice(0, 3).map(item => (
                      <span key={item} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">{t('vacationsPage.from')}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{destination.price}€</span>
                        {destination.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{destination.originalPrice}€</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" className="rounded-full" asChild>
                      <Link to={`/destinations/${destination.id}`}>
                        {t('vacationsPage.viewDetails')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mt-12"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className="rounded-full w-10 h-10"
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                {t('vacationsPage.bookingBadge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('vacationsPage.bookingTitle')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('vacationsPage.bookingDescription')}
              </p>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img src="https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg" alt={t('vacationsPage.heroTitle')} className="w-full aspect-[4/3] object-cover" />
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('vacationsPage.callUs')}</p>
                  <p className="text-lg font-semibold text-foreground">+33 698-272483</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">{t('vacationsPage.formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('vacationsPage.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('vacationsPage.name')}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('vacationsPage.phone')}</Label>
                    <Input
                      id="phone"
                      placeholder="+33..."
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('vacationsPage.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">{t('vacationsPage.destination')}</Label>
                    <select
                      id="destination"
                      value={formData.destination}
                      onChange={e => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm"
                    >
                      <option value="">{t('vacationsPage.selectDestination')}</option>
                      {destinations.map(d => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">{t('vacationsPage.date')}</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelers">{t('vacationsPage.travelers')}</Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={formData.travelers}
                    onChange={e => setFormData({ ...formData, travelers: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('vacationsPage.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('vacationsPage.messagePlaceholder')}
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('vacationsPage.sendViaWhatsapp')}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('vacationsPage.transportBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('vacationsPage.transportTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('vacationsPage.transportDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
              {t('vacationsPage.ctaTitle')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('vacationsPage.ctaDescription')}
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

export default Vacances;
