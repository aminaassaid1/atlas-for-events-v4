import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Sparkles, Globe, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Template images
import inrBannerCloud from "@/assets/images/inr-banner-cloud.png";
import hotBalloonLeft from "@/assets/images/hotballon-Left.png";
import hotBalloonRight from "@/assets/images/hotballon-right.png";
import imageContact from "@/assets/images/Image-cont.png";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Validation schema using translations
  const getContactSchema = () => z.object({
    name: z.string().trim().min(1, t('contact.nameRequired')).max(100, t('contact.nameRequired')),
    email: z.string().trim().email(t('contact.emailInvalid')).max(255, t('contact.emailInvalid')),
    phone: z.string().trim().optional(),
    subject: z.string().trim().min(1, t('contact.subjectRequired')).max(200, t('contact.subjectRequired')),
    message: z.string().trim().min(1, t('contact.messageRequired')).max(1000, t('contact.messageRequired')),
  });

  const features = [
    { icon: Globe, text: t('contact.internationalService') },
    { icon: HeadphonesIcon, text: t('contact.support247') },
    { icon: Sparkles, text: t('contact.premiumExperience') },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactSchema = getContactSchema();
      const validatedData = contactSchema.parse(formData);
      
      const message = `Nouveau message de contact:%0A%0ANom: ${encodeURIComponent(validatedData.name)}%0AEmail: ${encodeURIComponent(validatedData.email)}%0ATéléphone: ${encodeURIComponent(validatedData.phone || 'Non fourni')}%0ASujet: ${encodeURIComponent(validatedData.subject)}%0A%0AMessage:%0A${encodeURIComponent(validatedData.message)}`;
      
      window.open(`https://wa.me/33698272483?text=${message}`, "_blank");
      
      setIsSuccess(true);
      toast({
        title: t('contact.messagePrepared'),
        description: t('contact.redirectToWhatsapp'),
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: t('common.error'),
          description: t('contact.errorOccurred'),
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Contact - Atlas For Events"
        description="Contactez Atlas For Events pour vos événements et voyages à Marrakech. Disponible 7j/7 par téléphone, email ou WhatsApp."
        keywords="contact Atlas For Events, événementiel Marrakech contact, réservation voyage Maroc"
        url="https://atlasforevents.com/contact"
      />

      {/* Hero Banner - Enhanced Travlla Style */}
      <section className="relative min-h-[450px] lg:min-h-[600px] overflow-hidden bg-gradient-to-b from-[#e0f4f5] via-[#eef9fa] to-white">
        {/* Moving Cloud Animation */}
        <div className="absolute h-[200px] w-full top-[180px] left-0 z-[1] overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-moveCloud">
            <img src={inrBannerCloud} alt="" className="h-[180px]" />
            <img src={inrBannerCloud} alt="" className="h-[180px] ml-20" />
          </div>
        </div>

        {/* Hot Air Balloons with enhanced animations */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[8%] bottom-[10%] z-[3]"
        >
          <motion.img
            src={hotBalloonLeft}
            alt=""
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[70px] md:w-[90px] drop-shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-[-2%] top-[15%] z-[2]"
        >
          <motion.img
            src={hotBalloonRight}
            alt=""
            animate={{ y: [10, -20, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[100px] md:w-[160px] drop-shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[450px] lg:min-h-[600px] text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-deepblue text-sm font-medium">
              <MessageCircle className="w-4 h-4" />
              {t('contact.listeningBadge')}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-[32px] md:text-[56px] lg:text-[68px] text-deepblue leading-tight"
          >
            {t('contact.pageTitle')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl mt-4 max-w-xl"
          >
            {t('contact.subtitle')}
          </motion.p>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center mt-6"
          >
            <Link 
              to="/" 
              className="text-base font-medium text-deepblue/70 hover:text-deepblue transition-colors"
            >
              {t('contact.breadcrumbHome')}
            </Link>
            <span className="mx-3 text-deepblue/40">•</span>
            <span className="text-base font-semibold text-gold">{t('contact.breadcrumbContact')}</span>
          </motion.nav>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="xl:py-[100px] py-[60px] px-4 md:px-6 bg-gradient-to-b from-white to-[#f8fcfc]">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mb-4">
              {t('contact.talkProject')} <span className="text-gold">{t('contact.talkProjectHighlight')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('contact.formDescription')}
            </p>
          </motion.div>

          {/* Two Column Grid: Form Left, Contact Info Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-deepblue mb-2">
                {t('contact.sendMessage')}
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                {t('contact.formSubtitle')}
              </p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-deepblue mb-2">{t('contact.messageSent')}</h4>
                    <p className="text-gray-600 text-sm">{t('contact.thankYou')}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-deepblue/80">{t('contact.fullName')} *</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={handleChange}
                          className={`h-12 rounded-xl border ${errors.name ? "border-red-400" : "border-border"} px-4 text-sm bg-muted/30 focus:bg-white focus:border-primary transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-deepblue/80">{t('contact.phone')}</label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+33 6 00 00 00 00"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 rounded-xl border border-border px-4 text-sm bg-muted/30 focus:bg-white focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-deepblue/80">{t('contact.email')} *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 rounded-xl border ${errors.email ? "border-red-400" : "border-border"} px-4 text-sm bg-muted/30 focus:bg-white focus:border-primary transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-deepblue/80">{t('contact.subject')} *</label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder={t('contact.subjectPlaceholder')}
                        value={formData.subject}
                        onChange={handleChange}
                        className={`h-12 rounded-xl border ${errors.subject ? "border-red-400" : "border-border"} px-4 text-sm bg-muted/30 focus:bg-white focus:border-primary transition-all`}
                      />
                      {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-deepblue/80">{t('contact.message')} *</label>
                      <Textarea
                        name="message"
                        placeholder={t('contact.messagePlaceholder')}
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`rounded-xl border ${errors.message ? "border-red-400" : "border-border"} px-4 py-3 text-sm bg-muted/30 focus:bg-white focus:border-primary resize-none transition-all`}
                      />
                      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-primary font-semibold text-sm transition-all"
                    >
                      {isSubmitting ? (
                        t('contact.sending')
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t('contact.sendButton')}
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Contact Cards */}
              <a
                href="https://goo.gl/maps/EbRmY6fQuevWhKaX9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-deepblue/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-deepblue/10 rounded-xl flex items-center justify-center group-hover:bg-deepblue group-hover:scale-105 transition-all">
                  <MapPin className="w-6 h-6 text-deepblue group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-deepblue text-lg">{t('contact.address')}</p>
                  <p className="text-gray-600">{t('contact.addressValue')}</p>
                </div>
              </a>

              <a
                href="tel:+33698272483"
                className="group flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-deepblue/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-deepblue/10 rounded-xl flex items-center justify-center group-hover:bg-deepblue group-hover:scale-105 transition-all">
                  <Phone className="w-6 h-6 text-deepblue group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-deepblue text-lg">{t('contact.phone')}</p>
                  <p className="text-gray-600">+33 698-272483</p>
                </div>
              </a>

              <a
                href="mailto:atlasforevents@gmail.com"
                className="group flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-deepblue/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-deepblue/10 rounded-xl flex items-center justify-center group-hover:bg-deepblue group-hover:scale-105 transition-all">
                  <Mail className="w-6 h-6 text-deepblue group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-deepblue text-lg">{t('contact.email')}</p>
                  <p className="text-gray-600">atlasforevents@gmail.com</p>
                </div>
              </a>

              {/* Hours */}
              <div className="p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-deepblue" />
                  <p className="font-semibold text-deepblue">{t('contact.hours')}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <p className="text-gray-600">{t('contact.availability')}</p>
                    <p className="text-deepblue font-medium">{t('contact.availabilityValue')}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">{t('contact.onlineChat')}</p>
                    <p className="text-deepblue font-medium">{t('contact.onlineChatHours')}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/33698272483"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl text-white font-semibold transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{t('contact.chatWhatsapp')}</span>
              </a>

              {/* Social Links */}
              <div className="p-6 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-4">{t('contact.followUs')}</p>
                <div className="flex gap-3">
                  <a
                    href="https://web.facebook.com/profile.php?id=61566269972374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-deepblue/10 rounded-xl flex items-center justify-center hover:bg-deepblue hover:text-white text-deepblue transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/atlas.for.events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-deepblue/10 rounded-xl flex items-center justify-center hover:bg-deepblue hover:text-white text-deepblue transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden shadow-lg"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95157767952!2d-8.078207!3d31.6347485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {t('contact.readyToCreate')}
              </h2>
              <p className="text-primary/70">
                {t('contact.freeConsultation')}
              </p>
            </div>
            <a
              href="https://wa.me/33698272483"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t('contact.chatNow')}
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Contact;
