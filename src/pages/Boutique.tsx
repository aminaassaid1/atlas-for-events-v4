/**
 * Boutique page - E-commerce storefront for metal sculptures
 * Displays products with filtering, sorting, and pagination capabilities
 */
import { motion, AnimatePresence } from "framer-motion";
import { resolveImagePath } from "@/lib/imageResolver";
import { Truck, Shield, Package, ArrowRight, Gem, Heart, Dog, Flower2, Grid3X3, Sparkles, Star, Tag, Eye, LogIn, LogOut, User, ShoppingCart, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO, OptimizedImage } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import ProductFilters from "@/components/ProductFilters";
import Pagination from "@/components/Pagination";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useProducts, getMaxPrice } from "@/hooks/useProducts";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

/** Number of products displayed per page */
const ITEMS_PER_PAGE = 6;
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};
const Boutique = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const { products, isLoading: productsLoading } = useProducts();
  const maxPrice = useMemo(() => getMaxPrice(products), [products]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showPromoOnly, setShowPromoOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    toggleWishlist,
    isInWishlist,
    wishlistCount
  } = useWishlist();
  const {
    addToCart
  } = useCart();
  
  // Update price range when products load
  useMemo(() => {
    if (products.length > 0 && priceRange[1] === 10000) {
      setPriceRange([0, maxPrice]);
    }
  }, [products, maxPrice]);
  
  const categories = useMemo(() => [{
    id: "all",
    name: t('boutique.all'),
    icon: Grid3X3
  }, {
    id: "animals",
    name: t('boutique.animals'),
    icon: Dog
  }, {
    id: "art",
    name: t('boutique.artDeco'),
    icon: Gem
  }, {
    id: "love",
    name: t('boutique.love'),
    icon: Heart
  }, {
    id: "nature",
    name: t('boutique.nature'),
    icon: Flower2
  }], [t]);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: t('boutique.logoutSuccess'),
      description: t('boutique.seeYouSoon')
    });
  };
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const productPrice = product.promoPrice || product.price;
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const matchesPromo = !showPromoOnly || product.promoPrice !== null;
      return matchesCategory && matchesPrice && matchesPromo;
    });
  }, [products, activeCategory, priceRange, showPromoOnly]);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);
  const handlePriceChange = useCallback((range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  }, []);
  const handlePromoChange = useCallback((show: boolean) => {
    setShowPromoOnly(show);
    setCurrentPage(1);
  }, []);
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    document.getElementById('products-grid')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);
  const getDiscountPercentage = (original: number, promo: number) => {
    return Math.round((1 - promo / original) * 100);
  };
  const features = useMemo(() => [{
    icon: Truck,
    title: t('boutique.internationalDelivery'),
    description: t('boutique.internationalDeliveryDesc'),
    color: "bg-blue-500/10 text-blue-600"
  }, {
    icon: Shield,
    title: t('boutique.qualityGuarantee'),
    description: t('boutique.qualityGuaranteeDesc'),
    color: "bg-green-500/10 text-green-600"
  }, {
    icon: Package,
    title: t('boutique.securePackaging'),
    description: t('boutique.securePackagingDesc'),
    color: "bg-amber-500/10 text-amber-600"
  }], [t]);
  const craftPoints = useMemo(() => [t('boutique.craftPoint1'), t('boutique.craftPoint2'), t('boutique.craftPoint3'), t('boutique.craftPoint4'), t('boutique.craftPoint5')], [t]);
  return <PageLayout>
      <SEO 
        title={isEnglish ? "Metal Art Sculptures Boutique" : "Boutique Sculptures Métal Artisanales"}
        description={isEnglish 
          ? "Discover our unique collection of handcrafted metal sculptures. Animal sculptures, art pieces, and decorative items. International delivery available."
          : "Découvrez notre collection unique de sculptures en métal artisanales. Sculptures animaux, pièces d'art et objets décoratifs. Livraison internationale disponible."
        }
        keywords={isEnglish 
          ? "metal sculptures, handcrafted art, animal sculptures, decorative art, iron sculptures, Moroccan crafts"
          : "sculptures métal, art artisanal, sculptures animaux, art décoratif, sculptures fer, artisanat marocain"
        }
        url="https://atlasforevents.com/boutique"
        locale={isEnglish ? "en_US" : "fr_FR"}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-background" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 mt-20 sm:mt-24 md:mt-32 lg:mt-[150px]">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <motion.span initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 bg-secondary/20 text-primary px-4 py-2 rounded-full font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t('boutique.badge')}
            </motion.span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('boutique.title')}{" "}
              <span className="text-primary relative">
                {t('boutique.titleHighlight')}
                <motion.div initial={{
                width: 0
              }} animate={{
                width: "100%"
              }} transition={{
                delay: 0.5,
                duration: 0.6
              }} className="absolute -bottom-2 left-0 h-1 bg-secondary rounded-full" />
              </span>
            </h1>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4
          }} className="text-muted-foreground text-lg leading-relaxed">
              {t('boutique.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -3
          }} className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-4">
              <Gem className="w-4 h-4" />
              {t('boutique.ourCollection')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t('boutique.collectionTitle')} <span className="text-primary">{t('boutique.collectionHighlight')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('boutique.collectionDesc')}
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-10 sticky top-16 z-30 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 rounded-xl">
            <ProductFilters categories={categories} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} priceRange={priceRange} maxPrice={maxPrice} onPriceChange={handlePriceChange} showPromoOnly={showPromoOnly} onPromoChange={handlePromoChange} />
          </div>

          {/* Results Count */}
          <motion.div key={`${activeCategory}-${currentPage}-${showPromoOnly}`} initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProducts.length}</span> {t('boutique.productsFound')}
              {activeCategory !== "all" && <span className="ml-2 text-sm">
                  <span className="text-primary font-medium">{categories.find(c => c.id === activeCategory)?.name}</span>
                </span>}
            </p>
            {totalPages > 1 && <p className="text-sm text-muted-foreground">
                Page {currentPage} / {totalPages}
              </p>}
          </motion.div>

          {/* Products Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div key={`${activeCategory}-${currentPage}-${showPromoOnly}`} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {paginatedProducts.map(product => <motion.div key={product.id} variants={cardVariants} layout className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.promoPrice && <Badge className="bg-accent text-accent-foreground font-bold shadow-lg">
                        <Tag className="w-3 h-3 mr-1" />
                        -{getDiscountPercentage(product.price, product.promoPrice)}%
                      </Badge>}
                    {product.featured && <Badge className="bg-secondary text-secondary-foreground font-semibold shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {t('boutique.featured')}
                      </Badge>}
                  </div>

                  {/* Wishlist Button */}
                  <motion.button onClick={() => toggleWishlist(product.id)} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${isInWishlist(product.id) ? "bg-primary text-primary-foreground" : "bg-white/90 text-muted-foreground hover:text-primary"}`} aria-label={isInWishlist(product.id) ? t('boutique.removeFromFavorites') : t('boutique.addToFavorites')}>
                    <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                  </motion.button>

                  {/* Image - Clickable link to product detail */}
                  <Link to={`/boutique/${product.id}`} className="block relative aspect-square overflow-hidden">
                    <OptimizedImage 
                      src={product.image} 
                      alt={`${product.title} - Sculpture métal artisanale`}
                      aspectRatio="square"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick view overlay */}
                    <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileHover={{
                  opacity: 1,
                  y: 0
                }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button variant="secondary" size="sm" className="shadow-xl">
                        <Eye className="w-4 h-4 mr-2" />
                        {t('boutique.quickView')}
                      </Button>
                    </motion.div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <Link to={`/boutique/${product.id}`} className="block">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </Link>
                    
                    {/* Price */}
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">{t('boutique.price')}</span>
                        <div className="flex items-baseline gap-2">
                          {product.promoPrice ? <>
                              <span className="text-2xl font-bold text-primary">{product.promoPrice}€</span>
                              <span className="text-sm text-muted-foreground line-through">{product.price}€</span>
                            </> : <span className="text-2xl font-bold text-primary">{product.price}€</span>}
                        </div>
                      </div>
                      <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        <Button size="sm" className="rounded-full px-5" onClick={() => addToCart(product.id)}>
                          <ShoppingCart className="mr-1 w-4 h-4" />
                          {t('boutique.addToCart')}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProducts.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-20">
              <p className="text-xl font-semibold text-foreground mb-2">{t('boutique.noProducts')}</p>
              <p className="text-muted-foreground mb-6">{t('boutique.adjustFilters')}</p>
              <Button onClick={() => {
            setActiveCategory("all");
            setPriceRange([0, maxPrice]);
            setShowPromoOnly(false);
          }}>
                {t('boutique.resetFilters')}
              </Button>
            </motion.div>}

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-4">
                <Gem className="w-4 h-4" />
                {t('boutique.craftsmanship')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Art & <span className="text-primary">{t('boutique.moroccanCraft')}</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('boutique.craftDescription')}
              </p>
              <ul className="space-y-3 mb-8">
                {craftPoints.map(text => <motion.li key={text} className="flex items-center gap-3 text-foreground" whileHover={{
                x: 5
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{text}</span>
                  </motion.li>)}
              </ul>
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button asChild size="lg">
                  <Link to="/contact">
                    {t('boutique.contactUs')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="grid grid-cols-2 gap-4">
              <motion.img src={resolveImagePath("/src/assets/images/offer/pic1.jpg")} alt={t('boutique.craftsmanship')} className="rounded-3xl aspect-[3/4] object-cover shadow-xl" whileHover={{
              scale: 1.02,
              rotate: -1
            }} transition={{
              type: "spring",
              stiffness: 300
            }} />
              <motion.img src={resolveImagePath("/src/assets/images/we-rec3-pic2.jpg")} alt="Sculpture" className="rounded-3xl aspect-[3/4] object-cover mt-8 shadow-xl" whileHover={{
              scale: 1.02,
              rotate: 1
            }} transition={{
              type: "spring",
              stiffness: 300
            }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center max-w-2xl mx-auto">
            <motion.div animate={{
            rotate: [0, 10, -10, 0]
          }} transition={{
            repeat: Infinity,
            duration: 4
          }} className="mb-6 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <Gem className="w-8 h-8 text-secondary" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              {t('boutique.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {t('boutique.ctaDesc')}
            </p>
            <motion.div whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button asChild variant="secondary" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
                <Link to="/contact">
                  {t('common.requestQuote')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </PageLayout>;
};
export default Boutique;