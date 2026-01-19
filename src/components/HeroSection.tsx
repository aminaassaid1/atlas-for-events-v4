import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "@/assets/heroVideo.mp4";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-80px)] sm:min-h-screen overflow-hidden relative bg-primary">
      {/* Video Background */}
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        poster="/placeholder.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover size-full z-0"
        onCanPlay={(e) => (e.currentTarget.style.opacity = '1')}
        style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Main Container with Rounded Overlay */}
      <div className="relative z-[2] min-h-[calc(100vh-80px)] sm:min-h-screen lg:m-8.75 lg:rounded-3xl bg-black/35 flex flex-col justify-center">
        <div className="px-5 md:px-10 lg:pl-17.5 lg:pr-10 max-w-255 py-20 md:py-0">
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-48 leading-tight text-aquamist font-display block"
          >
            {t('hero.subtitle')}
          </motion.span>

          {/* Main Title with Outline Effect */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="!font-display text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] !text-white relative inline-block animate-slide-left leading-none"
              title={t('hero.title')}
            >
              {t('hero.title')}
            </motion.h1>
            <h1
              className="!font-display text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] !text-transparent absolute left-0 top-0 z-1 [-webkit-text-stroke:1px_#fff] sm:[-webkit-text-stroke:2px_#fff] animate-slide-left pointer-events-none leading-none"
              title={t('hero.title')}
            >
              {t('hero.title')}
            </h1>
          </div>

          {/* Description & CTA Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 xl:mt-8 max-w-lg"
          >
            <p className="text-base md:text-lg leading-relaxed text-white/90 mb-6">
              {t('hero.description')}
            </p>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white absolute bottom-7.5 3xl:right-112.5 2xl:right-64.5 sm:right-10 right-5 flex items-center z-4"
        >
          <span className="pr-26.25 text-xs leading-4.5 tracking-[0.2em] uppercase relative inline-block after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-5 after:top-1/2 after:-translate-y-1/2 max-sm:hidden">
            {t('hero.followUs')}
          </span>
          <ul className="flex">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61566269972374"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/atlas.for.events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Decorative Rotating Circles - Desktop Only */}
        <div className="absolute inset-0 z-[3] overflow-hidden max-lg:hidden">
          <div className="absolute top-1/2 -translate-y-1/2 size-175 right-0">
            <div className="-right-4/5 absolute z-2 rotate-center animate-rotate-center">
              <span className="size-175 rounded-full border border-white/30 block relative after:size-3.5 after:bg-white after:rounded-full after:absolute after:right-8.75 after:top-1/4 after:z-10"></span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-225 right-0">
            <div className="right-[-70%] absolute z-2 animate-rotate-center">
              <span className="size-225 rounded-full border border-white/30 block relative after:size-3.5 after:bg-secondary after:rounded-full after:absolute after:right-18.75 after:bottom-1/5 after:z-10"></span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-275 right-0">
            <div className="-right-3/5 absolute z-2 animate-rotate-center">
              <span className="size-275 rounded-full border border-white/30 block relative after:size-3.5 after:bg-citrusyellow after:rounded-full after:absolute after:left-0.75 after:top-2/5 after:z-10"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
