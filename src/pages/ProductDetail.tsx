/**
 * ProductDetail page - Displays detailed information about a single product
 * Includes product specs, reviews, related products, and purchase actions
 */
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, ShoppingCart, Truck, Shield, Minus, Plus, Tag, Star, Award, Check, ChevronRight, Package, Ruler, Weight, Palette, Clock, MessageSquare, ThumbsUp, Share2, Zap, RefreshCw, Sparkles, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Mock reviews data - will be translated in component
const getLocalizedReviews = (t: (key: string) => string) => [
  {
    id: 1,
    author: "Marie L.",
    rating: 5,
    date: t('product.reviewData.review1Date'),
    title: t('product.reviewData.review1Title'),
    content: t('product.reviewData.review1Content'),
    verified: true,
    helpful: 24,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    author: "Jean-Pierre M.",
    rating: 5,
    date: t('product.reviewData.review2Date'),
    title: t('product.reviewData.review2Title'),
    content: t('product.reviewData.review2Content'),
    verified: true,
    helpful: 18,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    author: "Sophie D.",
    rating: 4,
    date: t('product.reviewData.review3Date'),
    title: t('product.reviewData.review3Title'),
    content: t('product.reviewData.review3Content'),
    verified: true,
    helpful: 12,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    author: "Antoine B.",
    rating: 5,
    date: t('product.reviewData.review4Date'),
    title: t('product.reviewData.review4Title'),
    content: t('product.reviewData.review4Content'),
    verified: true,
    helpful: 31,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Product specifications based on category - will be translated in component
const getProductSpecs = (category: string, t: (key: string) => string) => {
  const baseSpecs = [
    { icon: Palette, label: t('product.specs.finish'), value: t('product.specs.finishValue') },
    { icon: Clock, label: t('product.specs.manufacturing'), value: t('product.specs.manufacturingValue') },
    { icon: Sparkles, label: t('product.specs.style'), value: t('product.specs.styleValue') },
  ];
  
  const categorySpecs: Record<string, { icon: typeof Ruler; label: string; value: string }[]> = {
    animals: [
      { icon: Ruler, label: t('product.specs.dimensions'), value: t('product.specs.dimensionsValue') },
      { icon: Weight, label: t('product.specs.weight'), value: "5-25 kg" },
      ...baseSpecs
    ],
    art: [
      { icon: Ruler, label: t('product.specs.dimensions'), value: t('product.specs.dimensionsValue') },
      { icon: Weight, label: t('product.specs.weight'), value: "3-15 kg" },
      ...baseSpecs
    ],
    love: [
      { icon: Ruler, label: t('product.specs.dimensions'), value: "30-60 cm" },
      { icon: Weight, label: t('product.specs.weight'), value: "2-8 kg" },
      ...baseSpecs
    ],
    nature: [
      { icon: Ruler, label: t('product.specs.dimensions'), value: "40-100 cm" },
      { icon: Weight, label: t('product.specs.weight'), value: "4-12 kg" },
      ...baseSpecs
    ]
  };
  
  return categorySpecs[category] || baseSpecs;
};

// Extended product details - will be translated in component
const getExtendedDescription = (t: (key: string) => string) => ({
  story: t('product.extendedDesc.story'),
  materials: t('product.extendedDesc.materials'),
  care: t('product.extendedDesc.care')
});

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([]);
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const product = id ? getProductById(id) : undefined;
  const extendedDesc = getExtendedDescription(t);
  const specs = product ? getProductSpecs(product.category, t) : [];
  const mockReviews = getLocalizedReviews(t);
  
  // Calculate average rating
  const averageRating = mockReviews.reduce((acc, r) => acc + r.rating, 0) / mockReviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: mockReviews.filter(r => r.rating === star).length,
    percentage: (mockReviews.filter(r => r.rating === star).length / mockReviews.length) * 100
  }));
  
  const handleHelpful = (reviewId: number) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId]);
    }
  };
  if (!product) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{t('product.notFound')}</h1>
            <p className="text-muted-foreground font-base mb-8">{t('product.notFoundDesc')}</p>
            <Button asChild className="rounded-full px-8 gap-2">
              <Link to="/boutique">
                <ArrowLeft className="w-4 h-4" />
                {t('product.backToShop')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </PageLayout>
    );
  }
  const getDiscountPercentage = (original: number, promo: number) => {
    return Math.round((1 - promo / original) * 100);
  };
  const getCategoryLabel = (category: string) => {
    return t(`product.category.${category}`, category);
  };
  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const features = [{
    icon: Truck,
    label: t('product.worldwideDelivery')
  }, {
    icon: Shield,
    label: t('product.warranty')
  }, {
    icon: Award,
    label: t('product.handmade')
  }];
  
  return (
    <PageLayout>

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl mt-[65px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 font-base overflow-x-auto">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('product.home')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <Link to="/boutique" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {t('product.shop')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
            <span className="text-foreground font-medium truncate">{product.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Image */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="lg:sticky lg:top-28 self-start">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  {!imageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
                  <img src={product.image} alt={product.title} onLoad={() => setImageLoaded(true)} className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.promoPrice && <Badge className="bg-accent text-accent-foreground font-semibold text-sm px-3 py-1 rounded-full">
                      <Tag className="w-3.5 h-3.5 mr-1.5" />
                      -{getDiscountPercentage(product.price, product.promoPrice)}%
                    </Badge>}
                  {product.featured && <Badge className="bg-secondary text-secondary-foreground font-medium text-sm px-3 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                      {t('product.featured')}
                    </Badge>}
                </div>

                {/* Wishlist Button */}
                <button onClick={() => toggleWishlist(product.id)} className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all ${isInWishlist(product.id) ? "bg-primary text-primary-foreground" : "bg-white/90 text-muted-foreground hover:text-primary"}`}>
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                </button>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.1
          }}>
              {/* Category */}
              <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider font-medium px-3 py-1 rounded-full border-primary/30 text-primary">
                {getCategoryLabel(product.category)}
              </Badge>

              {/* Title */}
              <h1 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-muted-foreground font-base text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-muted/50 rounded-xl p-5 mb-8">
                <div className="flex flex-wrap items-end gap-3 mb-2">
                  {product.promoPrice ? <>
                      <span className="font-title text-4xl font-bold text-primary">{product.promoPrice}€</span>
                      <span className="text-xl text-muted-foreground line-through">{product.price}€</span>
                      <span className="text-sm text-accent font-medium ml-2">
                        {t('product.save')} {product.price - product.promoPrice}€
                      </span>
                    </> : <span className="font-title text-4xl font-bold text-primary">{product.price}€</span>}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary-foreground" />
                  {t('product.taxIncluded')}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground block mb-3 font-base">{t('product.quantity')}</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-muted rounded-xl">
                    <button className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold text-lg text-foreground">{quantity}</span>
                    <button className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={() => setQuantity(quantity + 1)}>
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {quantity > 1 && <span className="text-sm text-muted-foreground font-base">
                      {t('product.totalPrice')}: <span className="font-semibold text-foreground">{((product.promoPrice || product.price) * quantity).toLocaleString()}€</span>
                    </span>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button size="lg" className="flex-1 gap-2 h-14 text-base font-semibold rounded-xl" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5" />
                  {t('product.addToCart')}
                </Button>
                <Button variant="outline" size="lg" className={`gap-2 h-14 rounded-xl ${isInWishlist(product.id) ? "border-primary bg-primary/5 text-primary" : ""}`} onClick={() => toggleWishlist(product.id)}>
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-primary" : ""}`} />
                  <span className="sm:hidden lg:inline">{isInWishlist(product.id) ? t('product.favorite') : t('product.favorites')}</span>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {features.map(feature => (
                  <div key={feature.label} className="text-center p-4 bg-card rounded-xl border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground font-base">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-xl border border-secondary/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{t('product.limitedStock')}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{Math.floor(Math.random() * 20) + 5} {t('product.watching')}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('product.deliveryTitle')}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {t('product.freeDelivery')}</li>
                      <li>• {t('product.shippingTime')}</li>
                      <li>• {t('product.worldwideAvailable')}</li>
                      <li>• {t('product.trackingAvailable')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Tabs Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 bg-muted rounded-xl mb-8 max-w-xl">
              {[
                { id: "description", label: t('product.description'), icon: Sparkles },
                { id: "specs", label: t('product.specs'), icon: Ruler },
                { id: "reviews", label: `${t('product.reviews')} (${mockReviews.length})`, icon: MessageSquare }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === "description" && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-title text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {t('product.storyTitle')}
                      </h3>
                      <p className="text-muted-foreground font-base leading-relaxed">
                        {extendedDesc.story}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-title text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-primary" />
                        {t('product.materialsTitle')}
                      </h3>
                      <p className="text-muted-foreground font-base leading-relaxed">
                        {extendedDesc.materials}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-title text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-primary" />
                        {t('product.careTitle')}
                      </h3>
                      <p className="text-muted-foreground font-base leading-relaxed">
                        {extendedDesc.care}
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <h4 className="font-title font-bold text-foreground mb-3">{t('product.whyChoose')}</h4>
                      <ul className="space-y-2">
                        {[
                          t('product.whyPoint1'),
                          t('product.whyPoint2'),
                          t('product.whyPoint3'),
                          t('product.whyPoint4'),
                          t('product.whyPoint5')
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <spec.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-base">{spec.label}</p>
                          <p className="font-semibold text-foreground">{spec.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                    <h4 className="font-title font-bold text-foreground mb-4">{t('product.additionalInfo')}</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">{t('product.origin')}</span>
                        <span className="font-medium text-foreground">{t('product.morocco')}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">{t('product.type')}</span>
                        <span className="font-medium text-foreground">{t('product.artisanalSculpture')}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">{t('common.warranty')}</span>
                        <span className="font-medium text-foreground">{t('product.warranty2years')}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">{t('product.returns')}</span>
                        <span className="font-medium text-foreground">{t('product.returns30days')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Rating Summary */}
                  <div className="grid md:grid-cols-3 gap-8 mb-10 p-6 bg-card rounded-xl border border-border">
                    <div className="text-center md:border-r border-border">
                      <div className="text-5xl font-title font-bold text-foreground mb-2">{averageRating.toFixed(1)}</div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${star <= Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                          />
                        ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{t('product.basedOn')} {mockReviews.length} {t('product.reviewsCount')}</p>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        {ratingCounts.map(({ star, count, percentage }) => (
                          <div key={star} className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground w-12">{star} {t('product.stars')}</span>
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {mockReviews.map((review) => (
                      <div key={review.id} className="p-6 bg-card rounded-xl border border-border">
                        <div className="flex items-start gap-4">
                          <img 
                            src={review.avatar} 
                            alt={review.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">{review.author}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs gap-1">
                                  <Check className="w-3 h-3" />
                                  {t('product.verifiedPurchase')}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">• {review.date}</span>
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                            <p className="text-muted-foreground font-base leading-relaxed mb-4">{review.content}</p>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleHelpful(review.id)}
                                disabled={helpfulReviews.includes(review.id)}
                                className={`flex items-center gap-2 text-sm transition-colors ${
                                  helpfulReviews.includes(review.id)
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <ThumbsUp className={`w-4 h-4 ${helpfulReviews.includes(review.id) ? "fill-current" : ""}`} />
                                {t('product.helpful')} ({review.helpful + (helpfulReviews.includes(review.id) ? 1 : 0)})
                              </button>
                              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <Share2 className="w-4 h-4" />
                                {t('product.share')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Write Review CTA */}
                  <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
                    <h4 className="font-title text-lg font-bold text-foreground mb-2">{t('product.shareExperience')}</h4>
                    <p className="text-muted-foreground mb-4">{t('product.shareExperienceDesc')}</p>
                    <Button className="rounded-full gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {t('product.writeReview')}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Related Products */}
      {relatedProducts.length > 0 && <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-sm uppercase tracking-wider text-primary font-medium mb-2 block font-base">{t('product.discoverAlso')}</span>
                <h2 className="font-title text-2xl md:text-3xl font-bold text-foreground">{t('product.relatedProducts')}</h2>
              </div>
              <Button asChild variant="outline" className="rounded-full gap-2 hidden sm:flex">
                <Link to="/boutique">
                  {t('product.viewAll')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct, index) => <motion.div key={relatedProduct.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group">
                  <Link to={`/boutique/${relatedProduct.id}`} className="block">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-muted">
                      <img src={relatedProduct.image} alt={relatedProduct.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {relatedProduct.promoPrice && <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs rounded-full">
                          -{getDiscountPercentage(relatedProduct.price, relatedProduct.promoPrice)}%
                        </Badge>}
                    </div>
                    <h3 className="font-title font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {relatedProduct.promoPrice ? <>
                          <span className="font-title text-lg font-bold text-primary">{relatedProduct.promoPrice}€</span>
                          <span className="text-sm text-muted-foreground line-through">{relatedProduct.price}€</span>
                        </> : <span className="font-title text-lg font-bold text-primary">{relatedProduct.price}€</span>}
                    </div>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>}
    </PageLayout>
  );
};

export default ProductDetail;