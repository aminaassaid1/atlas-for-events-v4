import { motion, AnimatePresence } from "framer-motion";
import { Music, Sparkles, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import gipsy1 from "@/assets/images/gipsy/gipsy-1.webp";
import gipsy2 from "@/assets/images/gipsy/gipsy-2.webp";
import gipsy3 from "@/assets/images/gipsy/gipsy-3.webp";
import gipsy4 from "@/assets/images/gipsy/gipsy-4.webp";
import gipsy5 from "@/assets/images/gipsy/gipsy-5.webp";

const GipsySuenoSection = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<string | null>("experience");

  const accordionItems = [
    {
      id: "experience",
      icon: Music,
      title: t('gipsy.accordion1Title'),
      content: t('gipsy.accordion1Content'),
    },
    {
      id: "performances",
      icon: Sparkles,
      title: t('gipsy.accordion2Title'),
      content: t('gipsy.accordion2Content'),
    },
    {
      id: "adapte",
      icon: Heart,
      title: t('gipsy.accordion3Title'),
      content: t('gipsy.accordion3Content'),
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl"
                >
                  <img
                    src={gipsy4}
                    alt="Gipsy Sueño performance en plein air"
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
                  />
                </motion.div>
              </div>

              {/* Two smaller images */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
              >
                <img
                  src={gipsy1}
                  alt="Gipsy Sueño groupe"
                  className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
              >
                <img
                  src={gipsy2}
                  alt="Gipsy Sueño en bar"
                  className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover"
                />
              </motion.div>

              {/* Two more smaller images */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
              >
                <img
                  src={gipsy3}
                  alt="Gipsy Sueño performance privée"
                  className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
              >
                <img
                  src={gipsy5}
                  alt="Gipsy Sueño portrait"
                  className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              {t('gipsy.title')}{" "}
              <span className="text-primary">{t('gipsy.titleHighlight')}</span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-muted/30 transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <span className="text-left font-semibold text-foreground text-sm sm:text-base">
                        {item.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground pb-4 sm:pb-5 px-4 sm:px-6 pl-12 sm:pl-[4.5rem] text-sm sm:text-base">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {t('gipsy.bookNow')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GipsySuenoSection;
