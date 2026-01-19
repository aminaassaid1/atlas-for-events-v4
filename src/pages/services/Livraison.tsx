/**
 * Livraison page - International Delivery Service
 * Displays handcrafted product delivery service information
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Package, Shield, Globe, Truck, FileCheck, Clock, Check, Phone, Upload, X } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const advantages = [
  {
    icon: Shield,
    title: "Protection et Sécurité",
    description: "Emballage soigné et protection maximale pour vos articles fragiles et précieux."
  },
  {
    icon: Globe,
    title: "Livraison Internationale",
    description: "Expédition vers le monde entier, où que vous soyez."
  },
  {
    icon: Truck,
    title: "Suivi de Commande",
    description: "Suivez votre colis en temps réel jusqu'à sa livraison."
  },
  {
    icon: FileCheck,
    title: "Assurance",
    description: "Option d'assurance supplémentaire pour une tranquillité totale."
  },
  {
    icon: Clock,
    title: "Facilité",
    description: "Nous nous occupons de tout, vous n'avez qu'à profiter."
  }
];

const productCategories = [
  {
    title: "Œuvres d'art",
    description: "Créations artistiques uniques fabriquées à partir de pièces automobiles.",
    image: "https://atlasforevents.com/wp-content/uploads/elementor/thumbs/charmingart0505_350865698_1384757428757447_8328670991529485398_n-r6f1ddxrmg7ynf2k2ynlqjn6okgqbku81zdiflw1ds.jpg",
    link: "/boutique"
  },
  {
    title: "Artisanat marocain",
    description: "Produits artisanaux marocains traditionnels, fabriqués avec passion.",
    image: "https://atlasforevents.com/wp-content/uploads/elementor/thumbs/7xm368440-r6f1dnc5isktviowk2pvfh9smf6egjvjf9wd8di3nk.jpg",
    link: "/boutique"
  }
];

const Livraison = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    orderNumber: "",
    itemsDescription: "",
    deliveryType: "standard",
    insurance: "no",
    message: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileInfo = selectedFile ? `\nFichier joint: ${selectedFile.name}` : "";
    const whatsappMessage = `Bonjour, je souhaite réserver une livraison internationale.\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nAdresse de livraison: ${formData.address}\nNuméro de commande: ${formData.orderNumber}\nDescription des articles: ${formData.itemsDescription}\nType de livraison: ${formData.deliveryType === 'express' ? 'Express' : 'Standard'}\nAssurance supplémentaire: ${formData.insurance === 'yes' ? 'Oui' : 'Non'}${fileInfo}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/33698272483?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt="Livraison internationale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-[69px]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/boutique" className="hover:text-secondary transition-colors">Boutique</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">Livraison Internationale</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Livraison de Produits Artisanaux
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            Service de livraison internationale
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto mt-4 text-white/80"
          >
            Vous êtes tombé amoureux de nos produits artisanaux marocains, mais vous vous demandez comment les ramener chez vous en toute sécurité ? Ne vous inquiétez pas, nous avons la solution parfaite !
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-lightturquoise">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Service de Livraison de Produits Artisanaux
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Notre service de livraison internationale garantit que vos précieux achats arrivent à votre porte en parfait état, où que vous soyez dans le monde.
            </p>
            <p className="text-lg text-muted-foreground">
              Que vous ayez choisi de grandes pièces, des articles fragiles ou que vous ne puissiez tout simplement pas emporter vos achats avec vous, notre service de livraison s'occupe de tout. Profitez de l'artisanat marocain sans tracas !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Les avantages de notre service de livraison
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-muted/30 rounded-2xl hover:bg-primary/5 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-paleaqua/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Nos produits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Avez-vous déjà fait vos achats chez nous ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Avant de réserver votre livraison, nous vous invitons à découvrir nos deux catégories de produits uniques :
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4 italic">{category.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={category.link}>
                      Découvrir nos {category.title.toLowerCase()}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-lightturquoise rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Réservation pour Livraison</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Numéro de commande (si applicable)"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <textarea
                  placeholder="Adresse de livraison"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />

                <textarea
                  placeholder="Description des articles à livrer"
                  value={formData.itemsDescription}
                  onChange={(e) => setFormData({ ...formData, itemsDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Préférences de livraison :
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="standard"
                          checked={formData.deliveryType === 'standard'}
                          onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">Livraison standard</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="express"
                          checked={formData.deliveryType === 'express'}
                          onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">Livraison express</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Assurance supplémentaire :
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="insurance"
                          value="yes"
                          checked={formData.insurance === 'yes'}
                          onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground text-sm">Oui, je souhaite ajouter une assurance</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="insurance"
                          value="no"
                          checked={formData.insurance === 'no'}
                          onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground text-sm">Non</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Joindre un fichier (photo des articles, facture, etc.) :
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.doc,.docx"
                      className="hidden"
                      id="file-upload"
                    />
                    {!selectedFile ? (
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-border bg-white hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Cliquez pour sélectionner un fichier</span>
                      </label>
                    ) : (
                      <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-primary bg-primary/5">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-primary" />
                          <span className="text-foreground text-sm truncate max-w-[200px]">{selectedFile.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Formats acceptés : images, PDF, Word (max 10 Mo)
                  </p>
                </div>

                <textarea
                  placeholder="Message ou demande spéciale (optionnel)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                  Envoyer la demande
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Besoin d'aide ?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Contactez-nous directement
              </h2>
              <p className="text-muted-foreground mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions concernant notre service de livraison internationale.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+33698272483"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Appelez-nous</span>
                    <span className="block text-lg font-bold text-primary">+33 698-272483</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/33698272483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">WhatsApp</span>
                    <span className="block text-lg font-bold text-primary">Discuter avec nous</span>
                  </div>
                </a>
              </div>

              {/* Features List */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <h4 className="font-bold text-primary mb-4">Notre engagement :</h4>
                <ul className="space-y-3">
                  {[
                    "Emballage professionnel et sécurisé",
                    "Suivi en temps réel de votre colis",
                    "Livraison dans le monde entier",
                    "Assurance disponible sur demande",
                    "Service client réactif"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Livraison;
