import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight, ShoppingBag, Truck, Shield, CreditCard, Package, ChevronRight, Heart, Globe, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type DeliveryType = 'national' | 'international';

const INTERNATIONAL_SHIPPING_FEE = 50; // €50 for international shipping

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('national');
  const {
    cartItems,
    loading,
    updateQuantity,
    removeFromCart,
    getCartTotal
  } = useCart();

  const shippingFee = deliveryType === 'international' ? INTERNATIONAL_SHIPPING_FEE : 0;
  const subtotal = getCartTotal();
  const total = subtotal + shippingFee;

  if (loading) {
    return <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-muted-foreground font-base">{t('common.loading')}</p>
        </div>
      </PageLayout>;
  }

  if (cartItems.length === 0) {
    return <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="max-w-md mx-auto text-center mt-[65px]">
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
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </motion.div>
            <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{t('cart.empty')}</h1>
            <p className="text-muted-foreground mb-8 font-base">{t('cart.emptyDesc')}</p>
            <Button asChild size="lg" className="rounded-full px-8 gap-2">
              <Link to="/boutique">
                {t('cart.discoverShop')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </PageLayout>;
  }

  return <PageLayout>
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 font-base">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
            <span className="text-foreground font-medium">{t('cart.title')}</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              {t('cart.title')}
            </h1>
            <p className="text-muted-foreground font-base text-lg">
              {cartItems.length} {t('cart.items', { count: cartItems.length })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item, index) => <motion.article key={item.id} layout initial={{
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
              }} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="flex">
                      {/* Image */}
                      <Link to={`/boutique/${item.product_id}`} className="w-28 sm:w-36 flex-shrink-0">
                        <div className="aspect-square overflow-hidden">
                          <img src={item.product?.image} alt={item.product?.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="flex-1 p-5 sm:p-6 flex flex-col">
                        <div className="flex-1">
                          <Link to={`/boutique/${item.product_id}`} className="font-title font-semibold text-foreground hover:text-primary transition-colors line-clamp-1 block mb-1">
                            {item.product?.title}
                          </Link>
                          <p className="text-sm text-muted-foreground font-base line-clamp-1 mb-3">
                            {item.product?.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center bg-muted rounded-lg">
                              <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-semibold text-sm text-foreground">
                                {item.quantity}
                              </span>
                              <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button className="w-9 h-9 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition-colors" onClick={() => removeFromCart(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <span className="font-title text-lg font-bold text-primary">
                              {((item.product?.promoPrice || item.product?.price || 0) * item.quantity).toLocaleString()}€
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>)}
              </AnimatePresence>

              {/* Continue Shopping */}
              <div className="pt-6">
                <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                  <Link to="/boutique">
                    <Heart className="w-4 h-4" />
                    {t('cart.continueShopping')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="sticky top-28">
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="font-title text-lg font-bold text-foreground mb-6">
                    {t('cart.orderSummary')}
                  </h2>

                  {/* Delivery Type Selection */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">{t('cart.deliveryType')}</p>
                    <div className="space-y-2">
                      <label 
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          deliveryType === 'national' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="deliveryType" 
                          value="national"
                          checked={deliveryType === 'national'}
                          onChange={() => setDeliveryType('national')}
                          className="sr-only"
                        />
                        <MapPin className={`w-5 h-5 ${deliveryType === 'national' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <span className="font-medium text-foreground block">{t('cart.nationalDelivery')}</span>
                          <span className="text-xs text-muted-foreground">{t('cart.nationalDeliveryDesc')}</span>
                        </div>
                        <span className="font-semibold text-secondary-foreground">{t('cart.free')}</span>
                      </label>
                      
                      <label 
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          deliveryType === 'international' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="deliveryType" 
                          value="international"
                          checked={deliveryType === 'international'}
                          onChange={() => setDeliveryType('international')}
                          className="sr-only"
                        />
                        <Globe className={`w-5 h-5 ${deliveryType === 'international' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <span className="font-medium text-foreground block">{t('cart.internationalDelivery')}</span>
                          <span className="text-xs text-muted-foreground">{t('cart.internationalDeliveryDesc')}</span>
                        </div>
                        <span className="font-semibold text-foreground">{INTERNATIONAL_SHIPPING_FEE}€</span>
                      </label>
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-3 mb-6 font-base text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>{t('cart.subtotal')}</span>
                      <span className="text-foreground font-medium">{subtotal.toLocaleString()}€</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>{t('cart.shipping')}</span>
                      {shippingFee === 0 ? (
                        <span className="text-secondary-foreground font-medium">{t('cart.free')}</span>
                      ) : (
                        <span className="text-foreground font-medium">{shippingFee}€</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="h-px bg-border mb-6" />
                  
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-title font-semibold text-foreground">{t('cart.total')}</span>
                    <div className="text-right">
                      <span className="font-title text-2xl font-bold text-primary">{total.toLocaleString()}€</span>
                      <span className="text-xs text-muted-foreground block">{t('cart.taxIncluded')}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="lg" 
                    className="w-full gap-2 rounded-xl h-12 font-semibold" 
                    onClick={() => navigate("/checkout", { state: { deliveryType, shippingFee } })}
                  >
                    <CreditCard className="w-5 h-5" />
                    {t('cart.checkout')}
                  </Button>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3 font-base text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{t('cart.securePayment')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{t('cart.carefulPackaging')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{t('cart.worldwideDelivery')}</span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{t('cart.deliveryInfo')}</h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li className="flex items-center gap-2">
                        <Truck className="w-3.5 h-3.5 text-secondary-foreground" />
                        {deliveryType === 'national' ? t('cart.freeNationalDelivery') : t('cart.internationalFee')}
                      </li>
                      <li className="flex items-center gap-2">
                        <Package className="w-3.5 h-3.5 text-secondary-foreground" />
                        {t('cart.shippingTime')}
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>;
};
export default Cart;
