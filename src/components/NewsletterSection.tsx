import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="bg-primary py-14 lg:py-16 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                {t('newsletter.title')}
              </h3>
              <p className="text-white/70">
                {t('newsletter.description')}
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex-1 max-w-md w-full"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className="w-full px-6 py-4 pr-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-primary p-3 rounded-full transition-colors shadow-lg"
                  aria-label={t('newsletter.subscribe')}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
