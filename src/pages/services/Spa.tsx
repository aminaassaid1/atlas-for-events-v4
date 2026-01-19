/**
 * Spa page - Spa and wellness services
 * Displays treatments, hammam, and booking options
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles, Heart, Leaf, Clock, Check, Star } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Local spa images
import hammamImg from "@/assets/images/spa/hammam.webp";
import hydrafacialImg from "@/assets/images/spa/hydrafacial.webp";
import massageImg from "@/assets/images/spa/massage.webp";
import liftingImg from "@/assets/images/spa/lifting.webp";

const galleryImages = [hammamImg, massageImg, hydrafacialImg, liftingImg];

const Spa = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
    allergies: "",
    transport: "",
  });

  const benefits = [
    {
      icon: Heart,
      title: t('spaPage.benefit1'),
      description: t('spaPage.benefit1Desc'),
    },
    {
      icon: Leaf,
      title: t('spaPage.benefit2'),
      description: t('spaPage.benefit2Desc'),
    },
    {
      icon: Sparkles,
      title: t('spaPage.benefit3'),
      description: t('spaPage.benefit3Desc'),
    },
  ];

  const treatments = [
    {
      name: t('spaPage.treatment1'),
      description: t('spaPage.treatment1Desc'),
      duration: "1h30",
      image: hammamImg,
    },
    {
      name: t('spaPage.treatment2'),
      description: t('spaPage.treatment2Desc'),
      duration: "45min",
      image: hydrafacialImg,
    },
    {
      name: t('spaPage.treatment3'),
      description: t('spaPage.treatment3Desc'),
      duration: "1h",
      image: massageImg,
    },
    {
      name: t('spaPage.treatment4'),
      description: t('spaPage.treatment4Desc'),
      duration: "1h",
      image: liftingImg,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je souhaite réserver un soin spa.\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nSoin: ${formData.treatment}\nAllergies: ${formData.allergies || "Aucune"}\nTransport: ${formData.transport}`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <PageLayout>

      {/* Hero Section - Visual Heavy */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            key={currentImage}
            src={galleryImages[currentImage]}
            alt={t('spaPage.heroTitle')}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>

        {/* Floating gallery thumbnails */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20">
          {galleryImages.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index ? "border-secondary scale-110" : "border-white/50"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6 text-white/80"
          >
            <Link to="/" className="hover:text-secondary transition-colors">{t('spaPage.breadcrumbHome')}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-secondary transition-colors">{t('spaPage.breadcrumbServices')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{t('spaPage.breadcrumbSpa')}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('spaPage.heroTitle')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('spaPage.heroSubtitle')}
            </p>
            <Button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 text-lg"
            >
              {t('spaPage.bookNow')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('spaPage.benefitsBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('spaPage.benefitsTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('spaPage.treatmentsBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('spaPage.treatmentsTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{treatment.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{treatment.name}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {treatment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-paleaqua/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                {t('spaPage.bookingBadge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('spaPage.bookingTitle')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('spaPage.bookingDescription')}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  t('spaPage.bookingFeature1'),
                  t('spaPage.bookingFeature2'),
                  t('spaPage.bookingFeature3'),
                  t('spaPage.bookingFeature4')
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary">5.0</span>
                    <span className="text-sm text-muted-foreground">{t('spaPage.averageRating')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{t('spaPage.formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('spaPage.yourName')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t('spaPage.yourEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder={t('spaPage.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder={t('spaPage.preferredDate')}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="time"
                    placeholder={t('spaPage.preferredTime')}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">{t('spaPage.selectTreatment')}</option>
                  <option value="hammam">{t('spaPage.treatmentHammam')}</option>
                  <option value="hydrafacial">{t('spaPage.treatmentHydrafacial')}</option>
                  <option value="massage">{t('spaPage.treatmentMassage')}</option>
                  <option value="lifting">{t('spaPage.treatmentLifting')}</option>
                  <option value="ritual">{t('spaPage.treatmentRitual')}</option>
                </select>
                <textarea
                  placeholder={t('spaPage.allergiesPreferences')}
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('spaPage.transportQuestion')}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="yes"
                        checked={formData.transport === "yes"}
                        onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                        className="w-4 h-4 text-primary"
                      />
                      <span>{t('spaPage.yes')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="no"
                        checked={formData.transport === "no"}
                        onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                        className="w-4 h-4 text-primary"
                      />
                      <span>{t('spaPage.no')}</span>
                    </label>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                  {t('spaPage.sendRequest')}
                </Button>
              </form>
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
              {t('spaPage.ctaTitle')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('spaPage.ctaDescription')}
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

export default Spa;
