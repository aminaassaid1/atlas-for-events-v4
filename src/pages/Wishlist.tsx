import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowRight, Tag, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { getProductsByIds } from "@/data/products";

const Wishlist = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;
  
  const {
    wishlistIds,
    loading,
    user,
    toggleWishlist
  } = useWishlist();
  const {
    addToCart
  } = useCart();
  const wishlistProducts = getProductsByIds(wishlistIds);
  const EmptyState = ({
    icon: Icon,
    title,
    description,
    action
  }: {
    icon: any;
    title: string;
    description: string;
    action: React.ReactNode;
  }) => <PageLayout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="max-w-md mx-auto text-center pt-0 mt-[68px]">
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200
        }} className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <Icon className="w-10 h-10 text-muted-foreground" />
          </motion.div>
          <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{title}</h1>
          <p className="text-muted-foreground mb-8 font-base">{description}</p>
          {action}
        </motion.div>
      </div>
    </PageLayout>;
  if (!user) {
    return <EmptyState icon={Heart} title={t('wishlist.yourFavorites')} description={t('wishlist.loginToSave')} action={<Button asChild size="lg" className="rounded-full px-8 gap-2">
            <Link to={getLocalizedPath("/contact")}>
              {t('orders.login')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>} />;
  }
  if (loading) {
    return <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-muted-foreground font-base">{t('wishlist.loading')}</p>
        </div>
      </PageLayout>;
  }
  if (wishlistProducts.length === 0) {
    return <EmptyState icon={Heart} title={t('wishlist.noFavorites')} description={t('wishlist.noFavoritesDesc')} action={<Button asChild size="lg" className="rounded-full px-8 gap-2">
            <Link to={getLocalizedPath("/boutique")}>
              {t('wishlist.exploreShop')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>} />;
  }
  const handleAddToCart = async (productId: string) => {
    await addToCart(productId, 1);
  };
  const getDiscountPercentage = (original: number, promo: number) => {
    return Math.round((1 - promo / original) * 100);
  };
  return <PageLayout>
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 font-base">
            <Link to={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
            <span className="text-foreground font-medium">{t('common.favorites')}</span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground fill-current" />
                </div>
                <h1 className="font-title text-3xl md:text-4xl font-bold text-foreground">
                  {t('wishlist.title')}
                </h1>
              </div>
              <p className="text-muted-foreground font-base">
                {wishlistProducts.length} {wishlistProducts.length > 1 ? t('wishlist.piecesSaved') : t('wishlist.pieceSaved')}
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full gap-2 w-fit">
              <Link to={getLocalizedPath("/boutique")}>
                {t('wishlist.viewCollection')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {wishlistProducts.map((product, index) => <motion.article key={product.id} layout initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              scale: 0.95
            }} transition={{
              delay: index * 0.05
            }} className="group">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Link to={getLocalizedPath(`/boutique/${product.id}`)}>
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </Link>
                      
                      {/* Discount Badge */}
                      {product.promoPrice && <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          <Tag className="w-3 h-3 mr-1" />
                          -{getDiscountPercentage(product.price, product.promoPrice)}%
                        </Badge>}
                      
                      {/* Wishlist Button */}
                      <button onClick={() => toggleWishlist(product.id)} className="absolute top-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      
                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Button className="w-full gap-2 rounded-xl h-10 text-sm" onClick={() => handleAddToCart(product.id)}>
                          <ShoppingCart className="w-4 h-4" />
                          {t('wishlist.addToCart')}
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <Link to={getLocalizedPath(`/boutique/${product.id}`)}>
                        <h3 className="font-title font-semibold text-foreground mb-1 line-clamp-1 hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                      </Link>
                      
                      <p className="text-muted-foreground text-sm font-base mb-4 line-clamp-2 min-h-[40px]">
                        {product.description}
                      </p>
                      
                      {/* Price & Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          {product.promoPrice ? <>
                              <span className="font-title text-xl font-bold text-primary">{product.promoPrice}€</span>
                              <span className="text-sm text-muted-foreground line-through">{product.price}€</span>
                            </> : <span className="font-title text-xl font-bold text-primary">{product.price}€</span>}
                        </div>
                        
                        <button onClick={() => toggleWishlist(product.id)} className="w-9 h-9 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>)}
            </AnimatePresence>
          </div>
        </div>
      </main>

    </PageLayout>;
};
export default Wishlist;