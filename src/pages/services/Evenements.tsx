/**
 * Evenements page - Event planning and organization services
 * Showcases wedding, celebration, and party services
 */
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, X, Heart, Cake, PartyPopper, Users, Music, Sparkles, Phone, Mail, MessageCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const gipsyVideos = ["https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.58_2b37c77a.mp4", "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.58_7e33d036.mp4", "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_2a90b0ce.mp4", "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_7d58a4d0.mp4", "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_a0f7d79e.mp4"];

const Evenements = () => {
  const { t } = useTranslation();
  const [lightboxVideo, setLightboxVideo] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });

  const eventTypes = [{
    id: "mariages",
    title: t('eventsPage.eventWeddings'),
    description: t('eventsPage.eventWeddingsDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/bride-groom-having-their-wedding-beach-scaled-1.jpg",
    icon: Heart
  }, {
    id: "fiancailles",
    title: t('eventsPage.eventEngagements'),
    description: t('eventsPage.eventEngagementsDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/view-table-arrangement-by-wedding-planner-scaled-1.jpg",
    icon: Sparkles
  }, {
    id: "anniversaires",
    title: t('eventsPage.eventBirthdays'),
    description: t('eventsPage.eventBirthdaysDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/party-portraits-young-adults-having-fun-scaled-1.jpg",
    icon: Cake
  }, {
    id: "evjf-evjg",
    title: t('eventsPage.eventBachelor'),
    description: t('eventsPage.eventBachelorDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/7xm508608.jpg",
    icon: PartyPopper
  }, {
    id: "soirees-privees",
    title: t('eventsPage.eventPrivate'),
    description: t('eventsPage.eventPrivateDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/7xm564269.jpg",
    icon: Users
  }, {
    id: "gipsy-sueno",
    title: t('eventsPage.eventGipsy'),
    description: t('eventsPage.eventGipsyDesc'),
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/71137665_2230934303699493_6792019247049474048_n.jpg",
    icon: Music
  }];

  const stats = [{
    value: "200+",
    label: t('eventsPage.statsEvents')
  }, {
    value: "98%",
    label: t('eventsPage.statsSatisfaction')
  }, {
    value: "15+",
    label: t('eventsPage.statsYears')
  }, {
    value: "50+",
    label: t('eventsPage.statsPartners')
  }];

  const services = [
    t('eventsPage.service1'),
    t('eventsPage.service2'),
    t('eventsPage.service3'),
    t('eventsPage.service4'),
    t('eventsPage.service5'),
    t('eventsPage.service6'),
    t('eventsPage.service7'),
    t('eventsPage.service8')
  ];

  const openLightbox = (index: number) => {
    setLightboxVideo(index);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = useCallback(() => {
    setLightboxVideo(null);
    document.body.style.overflow = 'auto';
  }, []);
  const nextVideo = useCallback(() => {
    setLightboxVideo(prev => prev !== null ? (prev + 1) % gipsyVideos.length : 0);
  }, []);
  const prevVideo = useCallback(() => {
    setLightboxVideo(prev => prev !== null ? (prev - 1 + gipsyVideos.length) % gipsyVideos.length : 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxVideo === null) return;
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevVideo();
          break;
        case 'ArrowRight':
          nextVideo();
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxVideo, closeLightbox, nextVideo, prevVideo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Demande Événement:%0A%0ANom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AType: ${formData.eventType}%0ADate: ${formData.date}%0AInvités: ${formData.guests}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/33698272483?text=${message}`, "_blank");
  };

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % eventTypes.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + eventTypes.length) % eventTypes.length);

  return <PageLayout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://atlasforevents.com/wp-content/uploads/2024/06/bride-groom-having-their-wedding-beach-scaled-1.jpg" alt={t('eventsPage.heroTitle')} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[70px]">
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-sm mb-6">
          <Link to="/" className="hover:text-secondary transition-colors">{t('eventsPage.breadcrumbHome')}</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-secondary transition-colors">{t('eventsPage.breadcrumbServices')}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-secondary">{t('eventsPage.breadcrumbEvents')}</span>
        </motion.nav>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-4">
          {t('eventsPage.heroTitle')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
          {t('eventsPage.heroSubtitle')}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto mt-4 text-white/80">
          {t('eventsPage.heroDescription')}
        </motion.p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Event Types Carousel */}
    <section className="py-20 bg-lightturquoise">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('eventsPage.sectionBadge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('eventsPage.sectionTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('eventsPage.sectionDescription')}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div className="flex" animate={{ x: `-${currentSlide * 100}%` }} transition={{ duration: 0.5, ease: "easeInOut" }}>
              {eventTypes.map((event, index) => <div key={index} className="w-full flex-shrink-0">
                <Link to={`/evenements/${event.id}`} className="block">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                          <event.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-3xl font-bold">{event.title}</h3>
                      </div>
                      <p className="text-white/90 text-lg max-w-xl mb-4">{event.description}</p>
                      <span className="inline-flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                        {t('eventsPage.discover')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>)}
            </motion.div>
          </div>

          {/* Navigation */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {eventTypes.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-primary/30"}`} />)}
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('eventsPage.servicesTitle')}
          </h2>
          <p className="text-muted-foreground">
            {t('eventsPage.servicesDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => <motion.div key={service} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-muted/50 rounded-xl p-5 text-center hover:bg-muted transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="font-medium text-foreground text-sm">{service}</p>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('eventsPage.contactBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('eventsPage.contactTitle')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('eventsPage.contactDescription')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('eventsPage.phone')}</p>
                  <p className="text-lg font-semibold text-foreground">+33 698-272483</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('eventsPage.email')}</p>
                  <p className="text-lg font-semibold text-foreground">contact@atlasforevents.com</p>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <Users className="w-5 h-5 text-muted-foreground" />
                </div>)}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-muted-foreground">200+ {t('eventsPage.satisfiedClients')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6">{t('eventsPage.formTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('eventsPage.name')}</Label>
                  <Input id="name" placeholder={t('eventsPage.name')} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('eventsPage.phone')}</Label>
                  <Input id="phone" placeholder="+33..." value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('eventsPage.email')}</Label>
                <Input id="email" type="email" placeholder="votre@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventType">{t('eventsPage.eventType')}</Label>
                  <select id="eventType" value={formData.eventType} onChange={e => setFormData({ ...formData, eventType: e.target.value })} className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm">
                    <option value="">{t('eventsPage.selectEventType')}</option>
                    {eventTypes.map(type => <option key={type.id} value={type.id}>{type.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">{t('eventsPage.date')}</Label>
                  <Input id="date" type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">{t('eventsPage.guests')}</Label>
                <Input id="guests" type="number" placeholder="50" value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t('eventsPage.message')}</Label>
                <Textarea id="message" placeholder={t('eventsPage.messagePlaceholder')} rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="rounded-xl resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('eventsPage.sendRequest')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Gipsy Sueño Section */}
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              {t('eventsPage.gipsyBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('eventsPage.gipsyTitle')}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {t('eventsPage.gipsyDescription')}
            </p>
            <Button onClick={() => openLightbox(0)} className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
              <Play className="w-5 h-5 mr-2" />
              {t('eventsPage.watchVideos')}
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {gipsyVideos.slice(0, 4).map((video, index) => (
              <button key={index} onClick={() => openLightbox(index)} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <video src={video} className="w-full h-full object-cover" muted />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Video Lightbox */}
    <AnimatePresence>
      {lightboxVideo !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={prevVideo} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextVideo} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden">
            <video src={gipsyVideos[lightboxVideo]} controls autoPlay className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* CTA Section */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('eventsPage.ctaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('eventsPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              <MessageCircle className="w-5 h-5" />
              {t('activitiesPage.contactUs')}
            </Link>
            <a href="tel:+33698272483" className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors">
              <Phone className="w-5 h-5" />
              {t('activitiesPage.callUs')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>;
};

export default Evenements;
