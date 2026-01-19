import { motion } from "framer-motion";
import { MapPin, CreditCard, Plane } from "lucide-react";
import { useTranslation } from "react-i18next";
import hotBalloonRightImg from "@/assets/images/hotballon-right.png";
import cloudImg from "@/assets/images/cloud-1.png";
import support24Img from "@/assets/images/24-Image.png";

const StepsSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: t('steps.step1Title'),
      description: t('steps.step1Desc')
    },
    {
      number: "02",
      icon: CreditCard,
      title: t('steps.step2Title'),
      description: t('steps.step2Desc')
    },
    {
      number: "03",
      icon: Plane,
      title: t('steps.step3Title'),
      description: t('steps.step3Desc')
    }
  ];

  const whyChooseItems = [
    t('steps.whyItem1'),
    t('steps.whyItem2'),
    t('steps.whyItem3'),
    t('steps.whyItem4')
  ];

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle Decorative Blurs */}
      <div className="absolute w-96 h-80 -left-48 top-1/2 bg-secondary/10 blur-[100px]" />
      <div className="absolute w-96 h-80 -right-48 top-1/2 bg-primary/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mb-12"
            >
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                {t('steps.badge')}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                <span className="text-secondary">{t('steps.title')}</span>{" "}
                {t('steps.titleEnd')}
              </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Offer Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full sm:w-64 lg:w-56 flex-shrink-0 mx-auto lg:mx-0"
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    alt={t('steps.specialOffer')}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                    src="/lovable-uploads/bbcc1f72-195f-4c4f-9c4d-215aca43b703.png"
                  />
                </div>
                <div className="bg-secondary rounded-xl p-4 sm:p-5 -mt-6 ml-3 relative z-10 shadow-lg max-w-[200px]">
                  <span className="text-primary font-semibold text-base sm:text-lg block mb-1">
                    {t('steps.specialOffer')}
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-primary text-4xl sm:text-5xl font-black">48</span>
                    <div className="text-primary/80 text-base sm:text-lg font-bold ml-1">
                      %<span className="block text-xs sm:text-sm">{t('steps.discount')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Steps */}
              <div className="flex-1 space-y-4 sm:space-y-5">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-border p-3 sm:p-4 pl-14 sm:pl-16 shadow-md hover:shadow-lg rounded-xl sm:rounded-2xl relative ml-8 sm:ml-10 transition-all duration-300"
                  >
                    {/* Step Number */}
                    <div className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 w-16 sm:w-20 h-12 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-lg">
                      {step.number}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h4 className="text-primary text-base sm:text-lg font-semibold mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
                      </div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 self-end sm:self-auto">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                          <step.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorations */}
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                src={hotBalloonRightImg}
                alt=""
                className="absolute -top-8 right-16 w-24 z-10 opacity-80"
                loading="lazy"
              />
              <motion.img
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                src={cloudImg}
                alt=""
                className="absolute top-32 -left-8 w-28 opacity-60"
                loading="lazy"
              />

              {/* Main Image */}
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-secondary/20 rounded-full -z-10" />
                <img
                  alt={t('steps.travelerAlt')}
                  className="relative z-10 mx-auto max-w-sm"
                  loading="lazy"
                  src="/lovable-uploads/dd02e8ce-5162-4dcf-9e88-85b44c7c40f2.webp"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 bg-primary rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
        >
          <div className="max-w-lg text-center lg:text-left">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
              {t('steps.whyChooseUs')}
            </h3>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 lg:mb-6">
              {whyChooseItems.map((item) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3 text-white/90">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center text-primary text-xs sm:text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
            >
              {t('features.discoverMore')}
            </a>
          </div>

          <div className="text-center">
            <img src={support24Img} alt="Support 24/7" className="w-20 sm:w-24 lg:w-28 mx-auto mb-2 lg:mb-3 opacity-90" loading="lazy" />
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black uppercase mb-1">
              {t('steps.callUs')}
            </h3>
            <a href="tel:+33698272483" className="text-secondary text-lg sm:text-xl lg:text-2xl font-bold hover:underline">
              +33 698-272483
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
