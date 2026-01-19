/**
 * Checkout page - Guest checkout with email, shipping, and payment
 * No authentication required
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { 
  ShoppingBag, CheckCircle, Lock, Truck, MapPin, User, Mail, Phone, 
  FileText, ChevronRight, Shield, Package, ArrowRight, CreditCard, Calendar, Globe
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

type DeliveryType = 'national' | 'international';

// Validation schema factory - needs t function for translations
const createCheckoutSchema = (t: (key: string) => string) => z.object({
  firstName: z.string().trim().min(1, t('checkout.validation.firstNameRequired')).max(50, t('checkout.validation.maxChars50')),
  lastName: z.string().trim().min(1, t('checkout.validation.lastNameRequired')).max(50, t('checkout.validation.maxChars50')),
  email: z.string().trim().email(t('checkout.validation.emailInvalid')).max(255, t('checkout.validation.maxChars255')),
  phone: z.string().trim().min(8, t('checkout.validation.phoneInvalid')).max(20, t('checkout.validation.maxChars20')),
  address: z.string().trim().min(5, t('checkout.validation.addressTooShort')).max(200, t('checkout.validation.maxChars200')),
  city: z.string().trim().min(2, t('checkout.validation.cityRequired')).max(100, t('checkout.validation.maxChars100')),
  postalCode: z.string().trim().min(3, t('checkout.validation.postalCodeRequired')).max(20, t('checkout.validation.maxChars20')),
  country: z.string().trim().min(2, t('checkout.validation.countryRequired')).max(100, t('checkout.validation.maxChars100')),
  cardNumber: z.string().trim().regex(/^\d{16}$/, t('checkout.validation.cardNumberInvalid')),
  cardExpiry: z.string().trim().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, t('checkout.validation.cardExpiryInvalid')),
  cardCvc: z.string().trim().regex(/^\d{3,4}$/, t('checkout.validation.cardCvcInvalid')),
  cardName: z.string().trim().min(2, t('checkout.validation.cardNameRequired')).max(100, t('checkout.validation.maxChars100')),
  notes: z.string().max(500, t('checkout.validation.maxChars500')).optional(),
});

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
  notes?: string;
};
type FormErrors = Partial<Record<keyof CheckoutFormData, string>>;

const Checkout = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const getLocalizedPath = (path: string) => isEnglish ? `/en${path}` : path;
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Get delivery info from cart page
  const deliveryType: DeliveryType = location.state?.deliveryType || 'national';
  const shippingFee: number = location.state?.shippingFee || 0;
  const subtotal = getCartTotal();
  const total = subtotal + shippingFee;
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: deliveryType === 'international' ? "" : "Maroc",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
    notes: "",
  });

  const EmptyState = ({ icon: Icon, title, description, action }: { 
    icon: React.ElementType, title: string, description: string, action: React.ReactNode 
  }) => (
    <PageLayout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Icon className="w-10 h-10 text-muted-foreground" />
          </motion.div>
          <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{title}</h1>
          <p className="text-muted-foreground mb-8 font-base">{description}</p>
          {action}
        </motion.div>
      </div>
    </PageLayout>
  );

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <EmptyState 
        icon={ShoppingBag}
        title={t('checkout.emptyCart')}
        description={t('checkout.addItemsFirst')}
        action={
          <Button asChild size="lg" className="rounded-full px-8 gap-2">
            <Link to={getLocalizedPath("/boutique")}>
              {t('checkout.viewShop')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    );
  }

  if (orderComplete) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            
            <h1 className="font-title text-3xl font-bold mb-3 text-foreground">{t('checkout.thankYou')}</h1>
            <p className="text-muted-foreground font-base mb-6">
              {t('checkout.orderSuccess')}
            </p>
            
            <div className="inline-flex items-center gap-3 bg-muted px-5 py-3 rounded-xl mb-8">
              <FileText className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="text-xs text-muted-foreground block">{t('checkout.orderNumber')}</span>
                <span className="font-mono font-bold text-foreground">{orderId}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link to={getLocalizedPath("/mes-commandes")}>
                  <FileText className="w-4 h-4" />
                  {t('checkout.trackOrder')}
                </Link>
              </Button>
              <Button asChild className="rounded-full gap-2">
                <Link to={getLocalizedPath("/boutique")}>
                  {t('checkout.continueShoppingBtn')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    // Format card number with spaces for display but store without
    if (field === "cardNumber") {
      value = value.replace(/\D/g, "").slice(0, 16);
    }
    // Format expiry date
    if (field === "cardExpiry") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
    }
    // Format CVC
    if (field === "cardCvc") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form with dynamic schema
    const checkoutSchema = createCheckoutSchema(t);
    const result = checkoutSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof CheckoutFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: t('checkout.validationError'),
        description: t('checkout.correctErrors'),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate order ID
      const newOrderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
      
      // Store order in localStorage for order tracking
      const order = {
        id: newOrderId,
        date: new Date().toISOString(),
        status: "pending",
        total: getCartTotal(),
        items: cartItems.map(item => ({
          product_id: item.product_id,
          title: item.product?.title,
          quantity: item.quantity,
          price: item.product?.promoPrice || item.product?.price,
        })),
        shipping: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        notes: formData.notes,
      };
      
      // Get existing orders or initialize empty array
      const existingOrders = JSON.parse(localStorage.getItem("atlas_orders") || "[]");
      existingOrders.push(order);
      localStorage.setItem("atlas_orders", JSON.stringify(existingOrders));
      
      clearCart();
      setOrderId(newOrderId);
      setOrderComplete(true);

      toast({
        title: t('checkout.orderConfirmed'),
        description: t('checkout.paymentAccepted'),
      });
    } catch (error) {
      toast({
        title: t('checkout.paymentError'),
        description: t('checkout.tryAgain'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCardDisplay = (value: string) => {
    return value.replace(/(\d{4})/g, "$1 ").trim();
  };

  const steps = [
    { number: 1, label: t('checkout.stepCart'), completed: true },
    { number: 2, label: t('checkout.stepInfo'), current: true },
    { number: 3, label: t('checkout.stepConfirm'), completed: false },
  ];

  return (
    <PageLayout>
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 font-base">
            <Link to={getLocalizedPath("/")} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
            <Link to={getLocalizedPath("/panier")} className="text-muted-foreground hover:text-primary transition-colors">{t('checkout.stepCart')}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
            <span className="text-foreground font-medium">{t('checkout.pageTitle')}</span>
          </nav>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    step.completed 
                      ? 'bg-secondary text-secondary-foreground' 
                      : step.current 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? <CheckCircle className="w-4 h-4" /> : step.number}
                  </div>
                  <span className={`font-base text-sm hidden sm:block ${step.current ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 rounded-full ${step.completed ? 'bg-secondary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-foreground">{t('checkout.yourInfo')}</h2>
                      <p className="text-sm text-muted-foreground font-base">{t('checkout.fillDetails')}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-base">
                        {t('checkout.firstName')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Jean"
                        className={`h-12 rounded-xl ${errors.firstName ? 'border-destructive' : ''}`}
                      />
                      {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-base">
                        {t('checkout.lastName')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Dupont"
                        className={`h-12 rounded-xl ${errors.lastName ? 'border-destructive' : ''}`}
                      />
                      {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-base flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="jean@email.com"
                        className={`h-12 rounded-xl ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-base flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        {t('checkout.phone')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+33 6 12 34 56 78"
                        className={`h-12 rounded-xl ${errors.phone ? 'border-destructive' : ''}`}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-foreground">{t('checkout.shippingAddress')}</h2>
                      <p className="text-sm text-muted-foreground font-base">{t('checkout.whereToDeliver')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-base">
                        {t('checkout.address')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="123 Rue de la Paix"
                        className={`h-12 rounded-xl ${errors.address ? 'border-destructive' : ''}`}
                      />
                      {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-base">
                          {t('checkout.city')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Paris"
                          className={`h-12 rounded-xl ${errors.city ? 'border-destructive' : ''}`}
                        />
                        {errors.city && <p className="text-xs text-destructive">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode" className="text-sm font-base">
                          {t('checkout.postalCode')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange("postalCode", e.target.value)}
                          placeholder="75001"
                          className={`h-12 rounded-xl ${errors.postalCode ? 'border-destructive' : ''}`}
                        />
                        {errors.postalCode && <p className="text-xs text-destructive">{errors.postalCode}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-sm font-base">
                          {t('checkout.country')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="France"
                          className={`h-12 rounded-xl ${errors.country ? 'border-destructive' : ''}`}
                        />
                        {errors.country && <p className="text-xs text-destructive">{errors.country}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-foreground">{t('checkout.securePaymentTitle')}</h2>
                      <p className="text-sm text-muted-foreground font-base">{t('checkout.dataEncrypted')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-sm font-base">
                        {t('checkout.nameOnCard')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange("cardName", e.target.value)}
                        placeholder="JEAN DUPONT"
                        className={`h-12 rounded-xl uppercase ${errors.cardName ? 'border-destructive' : ''}`}
                      />
                      {errors.cardName && <p className="text-xs text-destructive">{errors.cardName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-sm font-base">
                        {t('checkout.cardNumber')} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          value={formatCardDisplay(formData.cardNumber)}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value.replace(/\s/g, ""))}
                          placeholder="1234 5678 9012 3456"
                          className={`h-12 rounded-xl pr-12 ${errors.cardNumber ? 'border-destructive' : ''}`}
                          maxLength={19}
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                      {errors.cardNumber && <p className="text-xs text-destructive">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry" className="text-sm font-base flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {t('checkout.expiry')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={(e) => handleInputChange("cardExpiry", e.target.value)}
                          placeholder="MM/AA"
                          className={`h-12 rounded-xl ${errors.cardExpiry ? 'border-destructive' : ''}`}
                          maxLength={5}
                        />
                        {errors.cardExpiry && <p className="text-xs text-destructive">{errors.cardExpiry}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardCvc" className="text-sm font-base flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5" />
                          CVC <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cardCvc"
                          type="password"
                          value={formData.cardCvc}
                          onChange={(e) => handleInputChange("cardCvc", e.target.value)}
                          placeholder="•••"
                          className={`h-12 rounded-xl ${errors.cardCvc ? 'border-destructive' : ''}`}
                          maxLength={4}
                        />
                        {errors.cardCvc && <p className="text-xs text-destructive">{errors.cardCvc}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-foreground">{t('checkout.instructions')} <span className="text-muted-foreground font-normal text-sm">({t('checkout.optional')})</span></h2>
                      <p className="text-sm text-muted-foreground font-base">{t('checkout.accessCode')}</p>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Digicode: 1234, 3ème étage gauche..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    rows={3}
                    className="rounded-xl resize-none"
                    maxLength={500}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 font-semibold rounded-xl gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      {t('checkout.processing')}
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      {t('checkout.pay')} {total.toLocaleString()}€
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2 font-base">
                  <Shield className="w-4 h-4 text-secondary-foreground" />
                  {t('checkout.securePaymentFooter')}
                </p>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-foreground">{t('checkout.yourOrder')}</h2>
                      <p className="text-sm text-muted-foreground font-base">{cartItems.length} {t('cart.items')}</p>
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="space-y-3 max-h-[280px] overflow-y-auto mb-6">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="flex gap-3 p-2 bg-muted/50 rounded-xl"
                      >
                        <img
                          src={item.product?.image}
                          alt={item.product?.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-base font-medium text-sm line-clamp-1 text-foreground">
                            {item.product?.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {t('checkout.qty')}: {item.quantity}
                          </p>
                          <p className="font-title text-sm font-bold text-primary">
                            {((item.product?.promoPrice || item.product?.price || 0) * item.quantity).toLocaleString()}€
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-3 pt-4 border-t border-border font-base text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>{t('cart.subtotal')}</span>
                      <span className="text-foreground font-medium">{subtotal.toLocaleString()}€</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        {deliveryType === 'international' ? <Globe className="w-3.5 h-3.5" /> : <Truck className="w-3.5 h-3.5" />}
                        {t('cart.shipping')}
                      </span>
                      {shippingFee === 0 ? (
                        <span className="text-secondary-foreground font-medium">{t('cart.free')}</span>
                      ) : (
                        <span className="text-foreground font-medium">{shippingFee}€</span>
                      )}
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-title font-semibold text-foreground">{t('cart.total')} TTC</span>
                      <span className="font-title text-2xl font-bold text-primary">{total.toLocaleString()}€</span>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground font-base">{t('cart.securePayment')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border">
                    <Package className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground font-base">{t('cart.carefulPackaging')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Checkout;
