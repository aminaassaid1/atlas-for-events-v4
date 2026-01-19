/**
 * Activites page - Activities and experiences in Marrakech
 * Displays adventure, culture, and nature activities with filtering
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Compass, Palette, Mountain, Leaf, UtensilsCrossed, Phone, MessageCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ProductFilters from "@/components/ProductFilters";
import Pagination from "@/components/Pagination";
import { ActivityCard } from "@/components/cards";

const ITEMS_PER_PAGE = 6;

// Real data from CSV export - each activity has a slug for URL routing
const activities = [{
  id: 1,
  slug: "quad-palmeraie",
  name: "Aventure en Quad",
  nameEn: "Quad Adventure",
  category: "adventure",
  price: 35,
  duration: "2-3h",
  image: "/src/assets/images/activities/quad-sunset.webp",
  rating: 4.9,
  includes: ["Quad Yamaha 250cc", "Équipement complet", "Guide professionnel", "Transport"],
  includesEn: ["Yamaha 250cc Quad", "Full equipment", "Professional guide", "Transport"]
}, {
  id: 2,
  slug: "montgolfiere",
  name: "Vol en Montgolfière au-dessus de Marrakech",
  nameEn: "Hot Air Balloon Flight over Marrakech",
  category: "adventure",
  price: 200,
  duration: "5h",
  image: "/src/assets/images/activities/montgolfiere-sunrise.webp",
  rating: 5.0,
  includes: ["Vol 1h", "Petit-déjeuner berbère", "Certificat souvenir", "Transport 4x4"],
  includesEn: ["1h flight", "Berber breakfast", "Souvenir certificate", "4x4 Transport"]
}, {
  id: 3,
  slug: "chameau-palmeraie",
  name: "Balade à Dos de Chameau - Palmeraie",
  nameEn: "Camel Ride - Palm Grove",
  category: "nature",
  price: 40,
  duration: "1-2h",
  image: "/src/assets/images/activities/chameau-palmeraie-group.webp",
  rating: 4.8,
  includes: ["Balade relaxante", "Thé marocain", "Assurance", "Transport"],
  includesEn: ["Relaxing ride", "Moroccan tea", "Insurance", "Transport"]
}, {
  id: 4,
  slug: "chameau-agafay",
  name: "Trekking à Dos de Chameau - Désert d'Agafay",
  nameEn: "Camel Trekking - Agafay Desert",
  category: "adventure",
  price: 50,
  duration: "3-4h",
  image: "/src/assets/images/activities/agafay-camel-ride.webp",
  rating: 4.9,
  includes: ["Balade à dos de chameau", "Immersion culturelle", "Repas traditionnel", "Transport"],
  includesEn: ["Camel ride", "Cultural immersion", "Traditional meal", "Transport"]
}, {
  id: 5,
  slug: "buggy-palmeraie",
  name: "Aventure en Buggy dans la Palmeraie",
  nameEn: "Buggy Adventure in the Palm Grove",
  category: "adventure",
  price: 70,
  duration: "2h",
  image: "/src/assets/images/activities/buggy-palmeraie.webp",
  rating: 4.9,
  includes: ["Buggy tout-terrain", "Pause thé village berbère", "Guide", "Transport"],
  includesEn: ["Off-road buggy", "Tea break in Berber village", "Guide", "Transport"]
}, {
  id: 6,
  slug: "cours-cuisine",
  name: "Cours de Cuisine Marocaine - Désert d'Agafay",
  nameEn: "Moroccan Cooking Class - Agafay Desert",
  category: "food",
  price: 60,
  duration: "4h",
  image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
  rating: 5.0,
  includes: ["Cours avec chef local", "Repas complet", "Recettes traditionnelles", "Transport"],
  includesEn: ["Class with local chef", "Full meal", "Traditional recipes", "Transport"]
}, {
  id: 7,
  slug: "diner-spectacle-chez-ali",
  name: "Dîner Spectacle Chez Ali",
  nameEn: "Dinner Show at Chez Ali",
  category: "culture",
  price: 45,
  duration: "4h",
  image: "/src/assets/images/activities/chez-ali-entrance.webp",
  rating: 4.6,
  includes: ["Dîner marocain", "Spectacle Fantasia", "Folklore berbère", "Transport"],
  includesEn: ["Moroccan dinner", "Fantasia show", "Berber folklore", "Transport"]
}, {
  id: 8,
  slug: "diner-agafay-coucher-soleil",
  name: "Coucher de Soleil et Dîner - Désert d'Agafay",
  nameEn: "Sunset and Dinner - Agafay Desert",
  category: "nature",
  price: 45,
  duration: "5h",
  image: "/src/assets/images/activities/diner-agafay-sunset.webp",
  rating: 4.8,
  includes: ["Promenade dromadaire", "Dîner sous les étoiles", "Coucher de soleil", "Transport"],
  includesEn: ["Camel ride", "Dinner under the stars", "Sunset", "Transport"]
}, {
  id: 9,
  slug: "cascades-ouzoud",
  name: "Cascades d'Ouzoud - Excursion Journée",
  nameEn: "Ouzoud Waterfalls - Day Trip",
  category: "nature",
  price: 40,
  duration: "10h",
  image: "/src/assets/images/activities/ouzoud-falls.webp",
  rating: 4.9,
  includes: ["Cascades 110m", "Baignade possible", "Rencontre macaques", "Transport"],
  includesEn: ["110m waterfalls", "Swimming possible", "Macaque encounter", "Transport"]
}, {
  id: 10,
  slug: "visite-marrakech",
  name: "Visite Culturelle de Marrakech",
  nameEn: "Cultural Tour of Marrakech",
  category: "culture",
  price: 40,
  duration: "7h",
  image: "/src/assets/images/activities/marrakech-jemaa-fna.webp",
  rating: 4.8,
  includes: ["Koutoubia", "Palais Bahia", "Tombeaux Saadiens", "Souks"],
  includesEn: ["Koutoubia", "Bahia Palace", "Saadian Tombs", "Souks"]
}, {
  id: 11,
  slug: "merzouga",
  name: "Aventure à Merzouga - Désert du Sahara",
  nameEn: "Merzouga Adventure - Sahara Desert",
  category: "adventure",
  price: 299,
  duration: "2 jours",
  image: "/src/assets/images/activities/merzouga-camp.webp",
  rating: 5.0,
  includes: ["Trekking chameau", "Camp de luxe", "Erg Chebbi", "Transport"],
  includesEn: ["Camel trekking", "Luxury camp", "Erg Chebbi", "Transport"]
}, {
  id: 12,
  slug: "ouarzazate-kasbahs",
  name: "Ouarzazate & Kasbahs",
  nameEn: "Ouarzazate & Kasbahs",
  category: "culture",
  price: 50,
  duration: "1 journée",
  image: "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
  rating: 4.7,
  includes: ["Kasbahs historiques", "Studio Atlas", "Guide local", "Transport"],
  includesEn: ["Historic Kasbahs", "Atlas Studios", "Local guide", "Transport"]
}, {
  id: 13,
  slug: "vallee-ourika",
  name: "Vallée de l'Ourika - Cascades & Nature",
  nameEn: "Ourika Valley - Waterfalls & Nature",
  category: "nature",
  price: 45,
  duration: "1 journée",
  image: "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
  rating: 4.8,
  includes: ["Cascades", "Randonnée", "Déjeuner berbère", "Transport"],
  includesEn: ["Waterfalls", "Hiking", "Berber lunch", "Transport"]
}, {
  id: 14,
  slug: "essaouira",
  name: "Essaouira - Médina & Plages",
  nameEn: "Essaouira - Medina & Beaches",
  category: "nature",
  price: 45,
  duration: "1 journée",
  image: "/src/assets/images/activities/essaouira-coast.webp",
  rating: 4.9,
  includes: ["Médina UNESCO", "Port historique", "Temps libre", "Transport"],
  includesEn: ["UNESCO Medina", "Historic port", "Free time", "Transport"]
}, {
  id: 15,
  slug: "asilah",
  name: "Asilah - Ville Côtière",
  nameEn: "Asilah - Coastal Town",
  category: "culture",
  price: 55,
  duration: "1 journée",
  image: "/src/assets/images/activities/asilah-mural.webp",
  rating: 4.6,
  includes: ["Murs blanchis", "Fresques colorées", "Plages", "Transport"],
  includesEn: ["Whitewashed walls", "Colorful murals", "Beaches", "Transport"]
}, {
  id: 16,
  slug: "chefchaouen",
  name: "Chefchaouen - La Perle Bleue",
  nameEn: "Chefchaouen - The Blue Pearl",
  category: "culture",
  price: 55,
  duration: "1 journée",
  image: "https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg",
  rating: 4.9,
  includes: ["Ville bleue", "Tours photo", "Guide local", "Transport"],
  includesEn: ["Blue city", "Photo tours", "Local guide", "Transport"]
}, {
  id: 17,
  slug: "imlil-trekking",
  name: "Trekking à Imlil - Montagnes de l'Atlas",
  nameEn: "Imlil Trekking - Atlas Mountains",
  category: "adventure",
  price: 45,
  duration: "1 journée",
  image: "/src/assets/images/activities/imlil-village.webp",
  rating: 4.8,
  includes: ["Randonnée", "Villages berbères", "Déjeuner", "Transport"],
  includesEn: ["Hiking", "Berber villages", "Lunch", "Transport"]
}, {
  id: 18,
  slug: "cooperative-argan",
  name: "Coopérative d'Argan - Expérience Authentique",
  nameEn: "Argan Cooperative - Authentic Experience",
  category: "food",
  price: 60,
  duration: "2-3h",
  image: "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
  rating: 4.7,
  includes: ["Visite coopérative", "Démonstration", "Dégustation", "Transport"],
  includesEn: ["Cooperative visit", "Demonstration", "Tasting", "Transport"]
}];

const MAX_PRICE = 300;

const Activites = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const categories = [{
    id: "all",
    name: t('activitiesPage.categoryAll'),
    icon: Compass
  }, {
    id: "adventure",
    name: t('activitiesPage.categoryAdventure'),
    icon: Mountain
  }, {
    id: "culture",
    name: t('activitiesPage.categoryCulture'),
    icon: Palette
  }, {
    id: "nature",
    name: t('activitiesPage.categoryNature'),
    icon: Leaf
  }, {
    id: "food",
    name: t('activitiesPage.categoryFood'),
    icon: UtensilsCrossed
  }];

  const stats = [{
    value: "18+",
    label: t('activitiesPage.statsActivities')
  }, {
    value: "1000+",
    label: t('activitiesPage.statsParticipants')
  }, {
    value: "5★",
    label: t('activitiesPage.statsRating')
  }, {
    value: "24/7",
    label: t('activitiesPage.statsSupport')
  }];

  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, MAX_PRICE]);
  const [showPromoOnly, setShowPromoOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      const matchesCategory = activeCategory === "all" || activity.category === activeCategory;
      const matchesPrice = activity.price >= priceRange[0] && activity.price <= priceRange[1];
      const matchesPromo = !showPromoOnly;
      return matchesCategory && matchesPrice && matchesPromo;
    });
  }, [activeCategory, priceRange, showPromoOnly]);

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
  const paginatedActivities = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredActivities.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredActivities, currentPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };
  const handlePromoChange = (show: boolean) => {
    setShowPromoOnly(show);
    setCurrentPage(1);
  };

  return <PageLayout>
    {/* Hero Section */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg" alt={t('activitiesPage.heroTitle')} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[71px]">
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-sm mb-6">
          <Link to="/" className="hover:text-secondary transition-colors">{t('activitiesPage.breadcrumbHome')}</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-secondary transition-colors">{t('activitiesPage.breadcrumbServices')}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-secondary">{t('activitiesPage.breadcrumbActivities')}</span>
        </motion.nav>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-4">
          {t('activitiesPage.heroTitle')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
          {t('activitiesPage.heroSubtitle')}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto mt-4 text-white/80">
          {t('activitiesPage.heroDescription')}
        </motion.p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Activities Section */}
    <section className="py-20 bg-lightturquoise">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('activitiesPage.sectionBadge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('activitiesPage.sectionTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('activitiesPage.sectionDescription')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          <ProductFilters categories={categories} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} priceRange={priceRange} maxPrice={MAX_PRICE} onPriceChange={handlePriceChange} showPromoOnly={showPromoOnly} onPromoChange={handlePromoChange} />
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            {filteredActivities.length} {filteredActivities.length > 1 ? t('activitiesPage.activitiesFoundPlural') : t('activitiesPage.activitiesFound')}
            {totalPages > 1 && ` • ${t('activitiesPage.page')} ${currentPage} ${t('activitiesPage.of')} ${totalPages}`}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedActivities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              item={activity}
              index={index}
              variant="full"
              linkType="activites"
              showPromo={false}
              fromLabel={t('activitiesPage.from')}
              viewDetailsLabel={t('activitiesPage.viewDetails')}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('activitiesPage.ctaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('activitiesPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              <MessageCircle className="w-5 h-5" />
              {t('activitiesPage.contactUs')}
            </Link>
            <a href="tel:+33698272483" className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors">
              <Phone className="w-5 h-5" />
              {t('activitiesPage.callUs')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>;
};

export default Activites;
