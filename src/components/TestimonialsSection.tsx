import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import testimonial1 from "@/assets/images/activities/quad-agafay-dust.webp";
import testimonial2 from "@/assets/images/activities/merzouga-dunes.webp";
import testimonial3 from "@/assets/images/activities/ouzoud-falls.webp";
import testimonial4 from "@/assets/images/activities/montgolfiere-sunrise.webp";
import testimonial5 from "@/assets/images/activities/chameau-palmeraie-ride.webp";
import testimonial6 from "@/assets/images/activities/merzouga-camp.webp";
import airplaneTakeoff from "@/assets/images/airplane-takeoff.png";
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    t
  } = useTranslation();
  const testimonials = [{
    name: "Sophie M.",
    role: t('testimonials.role1'),
    image: testimonial1,
    rating: 5,
    text: t('testimonials.text1')
  }, {
    name: "Pierre D.",
    role: t('testimonials.role2'),
    image: testimonial2,
    rating: 5,
    text: t('testimonials.text2')
  }, {
    name: "Marie L.",
    role: t('testimonials.role3'),
    image: testimonial3,
    rating: 5,
    text: t('testimonials.text3')
  }, {
    name: "Jean-Pierre B.",
    role: t('testimonials.role4'),
    image: testimonial4,
    rating: 5,
    text: t('testimonials.text4')
  }, {
    name: "Camille R.",
    role: t('testimonials.role5'),
    image: testimonial5,
    rating: 5,
    text: t('testimonials.text5')
  }, {
    name: "Laurent F.",
    role: t('testimonials.role6'),
    image: testimonial6,
    rating: 5,
    text: t('testimonials.text6')
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-16 lg:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center max-w-2xl mx-auto mb-6 lg:mb-10">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-3">
            {t('testimonials.title')} <span className="text-secondary">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-base">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Large TESTIMONIAL Text with Airplane */}
        <div className="relative mb-0 lg:mb-4 overflow-hidden">
          <div className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-[0.05em] sm:tracking-[0.08em] lg:tracking-[0.12em] uppercase leading-none" style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary)) 15%, rgba(212, 175, 55, 0.3) 60%, white 85%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
            {t('testimonials.bigText')}
          </div>
          {/* Airplane - positioned at top center of text */}
          <motion.img src={airplaneTakeoff} alt="Airplane" className="absolute left-1/2 -translate-x-1/2 -top-1 sm:-top-2 md:-top-4 lg:-top-6 xl:-top-8 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[30%] max-w-md z-10" animate={{
          y: [0, -6, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </div>

        {/* Main Testimonial Content */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-8">
            {/* Left: Large Image with Decorative Circles */}
            <div className="relative flex-shrink-0 z-10">
              {/* Outer yellow circle - larger, more transparent */}
              <div className="absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-atlas-gold/10 -z-10 hidden md:block" />
              {/* Inner primary circle */}
              <div className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-primary -z-10 hidden md:block" />

              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.95
              }} transition={{
                duration: 0.4
              }} className="relative z-10">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[490px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons - positioned below image on mobile, over circles on desktop */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-right-16 lg:-right-28 md:left-auto md:translate-x-0 flex md:flex-col gap-2 sm:gap-3 z-20">
                <button onClick={prevTestimonial} className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full bg-white text-primary border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>
                <button onClick={nextTestimonial} className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full bg-white text-primary border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>

            {/* Vertical Thumbnail Slider - positioned absolutely on xl screens */}
            <div className="xl:absolute xl:left-[520px] xl:top-1/2 xl:-translate-y-1/2 flex xl:flex-col gap-2 lg:gap-3 order-3 md:order-2 mt-10 md:mt-0 justify-center">
              {testimonials.map((testimonial, index) => <motion.button key={index} onClick={() => setCurrentIndex(index)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`relative transition-all duration-300 rounded-xl overflow-hidden ${index === currentIndex ? 'ring-3 ring-atlas-gold ring-offset-2 scale-105' : 'opacity-50 hover:opacity-100'}`}>
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover object-center" />
                </motion.button>)}
            </div>

            {/* Right: Content */}
            <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl order-2 md:order-3 xl:ml-auto px-2 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} transition={{
                duration: 0.4
              }}>
                  {/* Header with Name and Quote Icon */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4 lg:mb-6 max-sm:flex-col max-sm:text-center max-sm:gap-2">
                    <div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-primary mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <span className="text-atlas-gold font-semibold text-base sm:text-lg lg:text-xl inline-block">
                        {testimonials[currentIndex].role}
                      </span>
                    </div>
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-primary max-sm:mx-auto flex-shrink-0" style={{
                    transform: 'scaleX(-1)'
                  }} />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-primary/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-3 sm:mb-4 lg:mb-6 font-serif">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Star Rating - aligned right */}
                  <div className="flex gap-0.5 sm:gap-1 md:justify-end justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-atlas-gold fill-current" />)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hot Air Balloon - Right side */}
      <motion.div className="absolute -right-8 lg:-right-14 top-[35%] w-20 lg:w-28 hidden md:block" animate={{
      y: [0, -20, 0]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        
      </motion.div>
    </section>;
};
export default TestimonialsSection;