import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Star, Check, Camera, Phone, MessageCircle, Share2, Heart, Sparkles, Users, Music, Cake, PartyPopper, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getEventTypeById, eventTypes as allEventTypes } from "@/data/events";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Cake,
  PartyPopper,
  Users,
  Music
};

const EventDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"services" | "packages" | "testimonials">("services");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([]);
  
  const eventType = id ? getEventTypeById(id) : undefined;
  
  if (!eventType) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{t('eventDetail.notFound')}</h1>
            <p className="text-muted-foreground font-base mb-8">{t('eventDetail.notFoundDesc')}</p>
            <Button asChild className="rounded-full px-8 gap-2">
              <Link to="/services/evenements">
                <ChevronLeft className="w-4 h-4" />
                {t('eventDetail.backToEvents')}
              </Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const IconComponent = iconMap[eventType.icon] || Sparkles;
  
  const handleContact = () => {
    const message = `${t('eventDetail.contactMessage')} "${eventType.title}".`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(message)}`, "_blank");
  };
  
  const handleHelpful = (reviewId: number) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId]);
    }
  };
  
  const relatedEvents = allEventTypes.filter(e => e.id !== eventType.id).slice(0, 3);
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Gallery */}
      <section className="relative pt-20">
        <div className="container mx-auto px-4 py-6 mt-[65px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 font-base overflow-x-auto">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('eventDetail.breadcrumbHome')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <Link to="/services/evenements" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('eventDetail.breadcrumbEvents')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <span className="text-foreground font-medium truncate">{eventType.title}</span>
          </nav>

          {/* Image Gallery */}
          <div className="grid lg:grid-cols-2 gap-4 mb-8">
            {/* Main Image */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img key={activeImage} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} src={eventType.gallery[activeImage]} alt={eventType.title} className="w-full h-full object-cover" />
              </AnimatePresence>
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button onClick={() => setIsWishlisted(!isWishlisted)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWishlisted ? "bg-primary text-primary-foreground" : "bg-white/90 text-muted-foreground hover:text-primary"}`}>
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {eventType.gallery.map((_, idx) => <button key={idx} onClick={() => setActiveImage(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${activeImage === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`} />)}
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="grid grid-cols-2 gap-4">
              {eventType.gallery.slice(0, 4).map((img, idx) => <button key={idx} onClick={() => setActiveImage(idx)} className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all ${activeImage === idx ? "ring-4 ring-primary" : "hover:opacity-80"}`}>
                  <img src={img} alt={`${eventType.title} ${idx + 1}`} className="w-full h-full object-cover" />
                  {idx === 3 && eventType.gallery.length > 4 && <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        +{eventType.gallery.length - 4}
                      </span>
                    </div>}
                </button>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Title & Description */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }}>
                <h1 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {eventType.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {eventType.longDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }}>
                <h2 className="font-title text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-secondary" />
                  {t('eventDetail.whatWeOffer')}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {eventType.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>)}
                </div>
              </motion.div>

              {/* Tabs Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }}>
                {/* Tab Navigation */}
                <div className="flex gap-1 p-1 bg-muted rounded-xl mb-8">
                  {[{
                  id: "services",
                  label: t('eventDetail.services'),
                  icon: Sparkles
                }, {
                  id: "packages",
                  label: t('eventDetail.packages'),
                  icon: Star
                }, {
                  id: "testimonials",
                  label: t('eventDetail.testimonials'),
                  icon: MessageCircle
                }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as typeof activeTab)} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                      <tab.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>)}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "services" && <motion.div key="services" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} className="grid sm:grid-cols-2 gap-4">
                      {eventType.services.map((service, idx) => <div key={idx} className="p-5 bg-muted/50 rounded-xl">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <Sparkles className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-title font-bold text-foreground mb-2">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>)}
                    </motion.div>}

                  {activeTab === "packages" && <motion.div key="packages" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} className="grid md:grid-cols-3 gap-6">
                      {eventType.packages.map((pkg, idx) => <div key={idx} className={`p-6 rounded-2xl border-2 ${pkg.popular ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                          {pkg.popular && <Badge className="bg-primary text-primary-foreground mb-4">{t('eventDetail.popular')}</Badge>}
                          <h3 className="font-title text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                          <p className="text-primary font-semibold mb-2">{pkg.price}</p>
                          <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, i) => <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>)}
                          </ul>
                        </div>)}
                    </motion.div>}

                  {activeTab === "testimonials" && <motion.div key="testimonials" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} className="space-y-6">
                      {eventType.testimonials.map(testimonial => <div key={testimonial.id} className="p-6 bg-card rounded-xl border border-border">
                          <div className="flex items-start gap-4">
                            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-foreground">{testimonial.author}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{testimonial.eventType}</p>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />)}
                                </div>
                                <span className="text-sm text-muted-foreground">• {testimonial.date}</span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.content}</p>
                              <button onClick={() => handleHelpful(testimonial.id)} disabled={helpfulReviews.includes(testimonial.id)} className={`flex items-center gap-2 text-sm transition-colors ${helpfulReviews.includes(testimonial.id) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                                <ThumbsUp className={`w-4 h-4 ${helpfulReviews.includes(testimonial.id) ? "fill-current" : ""}`} />
                                {t('eventDetail.inspiring')}
                              </button>
                            </div>
                          </div>
                        </div>)}

                      {/* FAQs */}
                      <div className="mt-8">
                        <h4 className="font-title font-bold text-foreground mb-4">{t('eventDetail.faqs')}</h4>
                        <Accordion type="single" collapsible className="space-y-2">
                          {eventType.faqs.map((faq, idx) => <AccordionItem key={idx} value={`faq-${idx}`} className="bg-muted/50 rounded-xl border-none px-4">
                              <AccordionTrigger className="text-left font-medium hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>)}
                        </Accordion>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Sidebar - Contact Card */}
            <div className="lg:col-span-1">
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="sticky top-28 bg-card rounded-2xl border border-border p-6 shadow-lg">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-title font-bold text-foreground">{eventType.title}</h3>
                    <p className="text-sm text-muted-foreground">{t('eventDetail.onQuote')}</p>
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Quick Services */}
                <div className="space-y-2 mb-6">
                  {eventType.services.slice(0, 4).map((service, i) => <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{service.name}</span>
                    </div>)}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full rounded-xl gap-2" onClick={handleContact}>
                    <MessageCircle className="w-5 h-5" />
                    {t('eventDetail.requestQuote')}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full rounded-xl gap-2" asChild>
                    <a href="tel:+33698272483">
                      <Phone className="w-5 h-5" />
                      +33 698-272483
                    </a>
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-sm text-muted-foreground">200+ événements réussis</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-sm uppercase tracking-wider text-primary font-medium mb-2 block">
                Découvrez aussi
              </span>
              <h2 className="font-title text-2xl md:text-3xl font-bold text-foreground">
                Autres types d'événements
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full gap-2 hidden sm:flex">
              <Link to="/services/evenements">
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedEvents.map((event, index) => {
            const EventIcon = iconMap[event.icon] || Sparkles;
            return <motion.div key={event.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="group">
                  <Link to={`/evenements/${event.id}`} className="block">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <EventIcon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="font-title text-lg font-bold text-white">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                  </Link>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default EventDetail;