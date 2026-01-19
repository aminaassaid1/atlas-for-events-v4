import { motion } from "framer-motion";
import { ReactNode } from "react";

// Template images
import inrBannerCloud from "@/assets/images/inr-banner-cloud.png";
import hotBalloonLeft from "@/assets/images/hotballon-Left.png";
import hotBalloonRight from "@/assets/images/hotballon-right.png";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  children?: ReactNode;
  showBalloons?: boolean;
  showClouds?: boolean;
  minHeight?: string;
}

const PageHero = ({
  title,
  subtitle,
  badge,
  children,
  showBalloons = true,
  showClouds = true,
  minHeight = "min-h-[450px] lg:min-h-[600px]"
}: PageHeroProps) => {
  return (
    <section className={`relative ${minHeight} overflow-hidden bg-gradient-to-b from-[#e0f4f5] via-[#eef9fa] to-white`}>
      {/* Moving Cloud Animation */}
      {showClouds && (
        <div className="absolute h-[200px] w-full top-[180px] left-0 z-[1] overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-moveCloud">
            <img src={inrBannerCloud} alt="" className="h-[180px]" />
            <img src={inrBannerCloud} alt="" className="h-[180px] ml-20" />
          </div>
        </div>
      )}

      {/* Hot Air Balloons */}
      {showBalloons && (
        <>
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
        </>
      )}

      {/* Content */}
      <div className={`relative z-20 flex flex-col items-center justify-center ${minHeight} text-center px-4`}>
        {badge && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            {badge}
          </motion.div>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-[32px] md:text-[56px] lg:text-[68px] text-primary leading-tight"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4"
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
};

export default PageHero;
