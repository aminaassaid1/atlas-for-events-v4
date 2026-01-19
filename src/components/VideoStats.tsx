import { motion } from "framer-motion";
import { Award, Users, Trophy, Clock, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import videoBgMp4 from "@/assets/videos/video-stats-bg.mp4";

const useStats = () => {
  const { t } = useTranslation();
  return [
    { icon: Award, label: t('stats.activitiesOffered'), value: 20, suffix: "+" },
    { icon: Users, label: t('stats.happyClients'), value: 1500, suffix: "+" },
    { icon: Trophy, label: t('stats.toursCompleted'), value: 500, suffix: "+" },
    { icon: Clock, label: t('stats.yearsExperience'), value: 10, suffix: "+" },
  ];
};

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="font-black text-lg sm:text-xl md:text-2xl lg:text-4xl text-white">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const VideoStats = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  const stats = useStats();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-paleaqua/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Video Background */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary">
            {/* Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoBgMp4}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-primary/60" />

            {/* Play/Pause Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="relative"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <span className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                <span className="absolute -inset-3 bg-white/10 rounded-full animate-pulse" />
                <div className="relative bg-white rounded-full p-5 lg:p-6 shadow-2xl">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 lg:h-10 lg:w-10 text-primary fill-primary" />
                  ) : (
                    <Play className="h-8 w-8 lg:h-10 lg:w-10 text-primary fill-primary" />
                  )}
                </div>
              </motion.button>
            </div>

            {/* Hero Banner */}
            <div className="absolute top-10 right-10 hidden lg:block">
              <div className="text-white text-3xl font-display">
                {t('stats.trust')} <span className="text-secondary text-6xl block font-bold">{t('stats.confidence')}</span>
                <span className="block text-lg text-white/80">{t('stats.reward')}</span>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 lg:gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-secondary" />
                    </div>
                    <div>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                      <p className="text-white/70 text-[10px] sm:text-xs lg:text-sm leading-tight">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoStats;
