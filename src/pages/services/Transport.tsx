/**
 * Transport page - Transportation services
 * Displays car rental, airport transfers, and excursion pricing
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Car, Plane, UserCheck, Shield, Clock, Check, Phone, MapPin, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import transportHeroImage from "@/assets/images/transport-hero.webp";

// Local transport images
import locationImg from "@/assets/images/transport/location.webp";
import chauffeurImg from "@/assets/images/transport/chauffeur.webp";
import airportPickupImg from "@/assets/images/transport/airport-pickup.webp";

const priceTable = [
  { service: "Arrivée aéroport", small: "350 DHS", large: "Sur devis" },
  { service: "Départ aéroport", small: "350 DHS", large: "Sur devis" },
  { service: "Excursion Agafay", small: "900 DHS", large: "Sur devis" },
  { service: "Excursion Barrage", small: "900 DHS", large: "Sur devis" },
  { service: "Excursion Imlil", small: "1000 DHS", large: "Sur devis" },
  { service: "Excursion Ouzoud", small: "1500 DHS", large: "Sur devis" },
  { service: "Excursion Ourika", small: "900 DHS", large: "Sur devis" },
  { service: "Excursion Ouarzazate", small: "1800 DHS", large: "Sur devis" },
  { service: "Excursion Essaouira", small: "1500 DHS", large: "Sur devis" },
  { service: "Transfert Casablanca", small: "3200 DHS", large: "Sur devis" },
  { service: "Soirée Marrakech", small: "500 DHS", large: "Sur devis" }
];

const Transport = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    passengers: "",
    message: ""
  });

  const services = [
    {
      icon: Car,
      title: t('transportPage.carRental'),
      description: t('transportPage.carRentalDesc'),
      image: locationImg
    },
    {
      icon: UserCheck,
      title: t('transportPage.personalDriver'),
      description: t('transportPage.personalDriverDesc'),
      image: chauffeurImg
    },
    {
      icon: Plane,
      title: t('transportPage.airportPickup'),
      description: t('transportPage.airportPickupDesc'),
      image: airportPickupImg
    }
  ];

  const features = [
    { icon: Car, title: t('transportPage.feature1'), description: t('transportPage.feature1Desc') },
    { icon: UserCheck, title: t('transportPage.feature2'), description: t('transportPage.feature2Desc') },
    { icon: Shield, title: t('transportPage.feature3'), description: t('transportPage.feature3Desc') },
    { icon: Clock, title: t('transportPage.feature4'), description: t('transportPage.feature4Desc') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je souhaite réserver un transport.\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nService: ${formData.serviceType}\nDate: ${formData.date}\nPassagers: ${formData.passengers}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "VIP Transport & Airport Transfers Marrakech" : "Transport VIP & Transferts Aéroport Marrakech"}
        description={isEnglish 
          ? "Premium transport services in Marrakech: airport transfers, private driver, car rental, excursions. Available 24/7 with professional drivers."
          : "Services de transport premium à Marrakech : transferts aéroport, chauffeur privé, location de voiture, excursions. Disponible 24h/24 avec chauffeurs professionnels."
        }
        keywords={isEnglish 
          ? "transport Marrakech, airport transfer Morocco, private driver Marrakech, car rental Morocco, VIP transport"
          : "transport Marrakech, transfert aéroport Maroc, chauffeur privé Marrakech, location voiture Maroc, transport VIP"
        }
        url="https://atlasforevents.com/services/transport"
        locale={isEnglish ? "en_US" : "fr_FR"}
      />

      {/* Hero Section with Video/Image Background */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={transportHeroImage} alt={t('transportPage.heroTitle')} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[69px]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="hover:text-secondary transition-colors">{t('transportPage.breadcrumbHome')}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-secondary transition-colors">{t('transportPage.breadcrumbServices')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{t('transportPage.breadcrumbTransport')}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t('transportPage.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            {t('transportPage.heroSubtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto mt-4 text-white/80"
          >
            {t('transportPage.heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('transportPage.sectionBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('transportPage.sectionTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-20 bg-paleaqua/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('transportPage.priceBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('transportPage.priceTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('transportPage.priceDescription')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Price Table */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-primary text-white px-6 py-4">
                <h3 className="text-xl font-bold">{t('transportPage.priceTableTitle')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold text-primary">{t('transportPage.serviceColumn')}</th>
                      <th className="text-center px-6 py-4 font-semibold text-primary">{t('transportPage.smallGroup')}</th>
                      <th className="text-center px-6 py-4 font-semibold text-primary">{t('transportPage.largeGroup')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                        <td className="px-6 py-4 font-medium text-foreground">{row.service}</td>
                        <td className="px-6 py-4 text-center text-secondary font-bold">{row.small}</td>
                        <td className="px-6 py-4 text-center text-muted-foreground">{t('transportPage.onQuote')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Group Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 text-white"
            >
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('transportPage.largeGroupTitle')}</h3>
              <p className="text-white/80 mb-6">
                {t('transportPage.largeGroupDescription')}
              </p>
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link to="/contact">{t('transportPage.requestQuote')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-lightturquoise rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{t('transportPage.formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('transportPage.yourName')}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t('transportPage.yourEmail')}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder={t('transportPage.phone')}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">{t('transportPage.selectService')}</option>
                    <option value="airport-arrival">{t('transportPage.airportArrival')}</option>
                    <option value="airport-departure">{t('transportPage.airportDeparture')}</option>
                    <option value="excursion">{t('transportPage.excursion')}</option>
                    <option value="private-driver">{t('transportPage.privateDriver')}</option>
                    <option value="car-rental">{t('transportPage.carRentalOption')}</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="number"
                    placeholder={t('transportPage.passengers')}
                    min="1"
                    value={formData.passengers}
                    onChange={e => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <textarea
                  placeholder={t('transportPage.message')}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                  {t('transportPage.sendRequest')}
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
                {t('transportPage.needHelp')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('transportPage.contactTitle')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('transportPage.contactDescription')}
              </p>

              <div className="space-y-4">
                <a href="tel:+33698272483" className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t('transportPage.callUs')}</span>
                    <span className="block text-lg font-bold text-primary">+33 6 98 27 24 83</span>
                  </div>
                </a>

                <a href="https://wa.me/33698272483" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t('transportPage.whatsapp')}</span>
                    <span className="block text-lg font-bold text-primary">{t('transportPage.chatWithUs')}</span>
                  </div>
                </a>
              </div>
            </motion.div>
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
              {t('transportPage.ctaTitle')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('transportPage.ctaDescription')}
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

export default Transport;
