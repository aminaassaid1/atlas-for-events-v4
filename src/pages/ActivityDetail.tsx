import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, MapPin, Clock, Star, Users, Globe,
  Check, X, ChevronLeft, Phone, MessageCircle, Share2,
  Heart, Camera, Compass, ThumbsUp, Zap, AlertCircle
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getActivityById, activities as allActivities } from "@/data/activities";
import { ActivityCard } from "@/components/cards";

const ActivityDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"program" | "practical" | "reviews">("program");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([]);

  const activity = id ? getActivityById(id) : undefined;

  if (!activity) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
              <Compass className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{t('activityDetail.notFound')}</h1>
            <p className="text-muted-foreground font-base mb-8">{t('activityDetail.notFoundDesc')}</p>
            <Button asChild className="rounded-full px-8 gap-2">
              <Link to="/services/activites">
                <ChevronLeft className="w-4 h-4" />
                {t('activityDetail.backToActivities')}
              </Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    const message = `${t('activityDetail.bookingMessage')} "${activity.name}" (${activity.duration}) - ${activity.price}€ ${t('activityDetail.perPerson')}.`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleHelpful = (reviewId: number) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId]);
    }
  };

  const relatedActivities = allActivities
    .filter(a => a.category === activity.category && a.id !== activity.id)
    .slice(0, 3);

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      adventure: t('activityDetail.categoryAdventure'),
      nature: t('activityDetail.categoryNature'),
      culture: t('activityDetail.categoryCulture'),
      food: t('activityDetail.categoryFood')
    };
    return labels[cat] || cat;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Gallery */}
      <section className="relative pt-28">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 font-base overflow-x-auto">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('activityDetail.breadcrumbHome')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <Link to="/services/activites" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('activityDetail.breadcrumbActivities')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <span className="text-foreground font-medium truncate">{activity.name}</span>
          </nav>

          {/* Image Gallery */}
          <div className="grid lg:grid-cols-2 gap-4 mb-8">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={activity.gallery[activeImage]}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-secondary text-secondary-foreground font-semibold px-3 py-1.5">
                  {getCategoryLabel(activity.category)}
                </Badge>
              </div>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isWishlisted ? "bg-primary text-primary-foreground" : "bg-white/90 text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {activity.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeImage === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {activity.gallery.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all ${
                    activeImage === idx ? "ring-4 ring-primary" : "hover:opacity-80"
                  }`}
                >
                  <img src={img} alt={`${activity.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  {idx === 3 && activity.gallery.length > 4 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        +{activity.gallery.length - 4}
                      </span>
                    </div>
                  )}
                </button>
              ))}
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
              {/* Title & Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(activity.rating) ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{activity.rating}</span>
                  <span className="text-muted-foreground">({activity.reviewCount} {t('activityDetail.reviews')})</span>
                </div>

                <h1 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {activity.name}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {activity.longDescription}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Clock, label: t('activityDetail.duration'), value: activity.duration },
                    { icon: Users, label: t('activityDetail.group'), value: activity.practicalInfo.groupSize },
                    { icon: Zap, label: t('activityDetail.difficulty'), value: activity.practicalInfo.difficulty },
                    { icon: Globe, label: t('activityDetail.languages'), value: activity.practicalInfo.language.split(",")[0] }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-title text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-secondary" />
                  {t('activityDetail.highlights')}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activity.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tabs Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Tab Navigation */}
                <div className="flex gap-1 p-1 bg-muted rounded-xl mb-8">
                  {[
                    { id: "program", label: t('activityDetail.program'), icon: Compass },
                    { id: "practical", label: t('activityDetail.practicalInfo'), icon: AlertCircle },
                    { id: "reviews", label: `${t('activityDetail.reviews')} (${activity.reviewCount})`, icon: MessageCircle }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "program" && (
                    <motion.div
                      key="program"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {activity.itinerary.map((step, idx) => (
                        <div key={idx} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-l-0 last:pb-0">
                          <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                            {step.time}
                          </div>
                          <div className="ml-4">
                            <h3 className="font-title text-lg font-bold text-foreground mb-1">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "practical" && (
                    <motion.div
                      key="practical"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      {/* Meeting Point */}
                      <div className="p-5 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-foreground">{t('activityDetail.meetingPoint')}</span>
                        </div>
                        <p className="text-muted-foreground">{activity.practicalInfo.meetingPoint}</p>
                      </div>

                      {/* What to Bring */}
                      <div>
                        <h4 className="font-title font-bold text-foreground mb-4">{t('activityDetail.whatToBring')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.practicalInfo.whatToBring.map((item, i) => (
                            <Badge key={i} variant="secondary">{item}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Included / Not Included */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-title font-bold text-foreground mb-4 flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            {t('activityDetail.included')}
                          </h4>
                          <ul className="space-y-2">
                            {activity.practicalInfo.included.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-title font-bold text-foreground mb-4 flex items-center gap-2">
                            <X className="w-5 h-5 text-red-500" />
                            {t('activityDetail.notIncluded')}
                          </h4>
                          <ul className="space-y-2">
                            {activity.practicalInfo.notIncluded.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* FAQs */}
                      <div>
                        <h4 className="font-title font-bold text-foreground mb-4">{t('activityDetail.faqs')}</h4>
                        <Accordion type="single" collapsible className="space-y-2">
                          {activity.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`faq-${idx}`} className="bg-muted/50 rounded-xl border-none px-4">
                              <AccordionTrigger className="text-left font-medium hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "reviews" && (
                    <motion.div
                      key="reviews"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {/* Rating Summary */}
                      <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-xl">
                        <div className="text-center">
                          <div className="text-4xl font-title font-bold text-foreground">{activity.rating}</div>
                          <div className="flex items-center gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(activity.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{activity.reviewCount} avis</p>
                        </div>
                        <Separator orientation="vertical" className="h-16" />
                        <div className="flex-1">
                          <p className="text-muted-foreground">
                            Nos participants adorent cette activité ! Découvrez leurs témoignages.
                          </p>
                        </div>
                      </div>

                      {/* Reviews List */}
                      {activity.reviews.map((review) => (
                        <div key={review.id} className="p-6 bg-card rounded-xl border border-border">
                          <div className="flex items-start gap-4">
                            <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-foreground">{review.author}</span>
                                <Badge variant="secondary" className="text-xs">Vérifié</Badge>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">• {review.date}</span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>
                              <button
                                onClick={() => handleHelpful(review.id)}
                                disabled={helpfulReviews.includes(review.id)}
                                className={`flex items-center gap-2 text-sm transition-colors ${
                                  helpfulReviews.includes(review.id) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <ThumbsUp className={`w-4 h-4 ${helpfulReviews.includes(review.id) ? "fill-current" : ""}`} />
                                Utile
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-28 bg-card rounded-2xl border border-border p-6 shadow-lg"
              >
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-title font-bold text-primary">{activity.price}€</span>
                    <span className="text-muted-foreground">/ pers.</span>
                  </div>
                </div>

                {/* Includes Preview */}
                <div className="space-y-2 mb-6">
                  {activity.includes.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Separator className="mb-6" />

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Durée</p>
                    <p className="font-semibold text-sm">{activity.duration}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Groupe</p>
                    <p className="font-semibold text-sm">{activity.practicalInfo.groupSize.split(" ")[0]}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full rounded-xl gap-2" onClick={handleBooking}>
                    <MessageCircle className="w-5 h-5" />
                    Réserver via WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" className="w-full rounded-xl gap-2">
                    <Phone className="w-5 h-5" />
                    Nous appeler
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-secondary" />
                      Annulation gratuite
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-sm uppercase tracking-wider text-primary font-medium mb-2 block">
                  Découvrez aussi
                </span>
                <h2 className="font-title text-2xl md:text-3xl font-bold text-foreground">
                  Activités similaires
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-full gap-2 hidden sm:flex">
                <Link to="/services/activites">
                  Voir tout
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedActivities.map((act, index) => (
                <ActivityCard
                  key={act.id}
                  item={act}
                  index={index}
                  variant="related"
                  linkType="activites"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ActivityDetail;
