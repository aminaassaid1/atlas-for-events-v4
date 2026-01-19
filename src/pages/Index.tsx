import { PageLayout } from "@/components/layout";
import { SEO } from "@/components/common";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import DestinationsSection from "@/components/DestinationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClientLogos from "@/components/ClientLogos";
import VideoStats from "@/components/VideoStats";
import ToursSection from "@/components/ToursSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import GipsySuenoSection from "@/components/GipsySuenoSection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Atlas For Events",
    "description": isEnglish 
      ? "Your partner for exceptional events and unforgettable trips in Marrakech"
      : "Votre partenaire pour des événements d'exception et des voyages inoubliables à Marrakech",
    "url": "https://atlasforevents.com",
    "logo": "https://atlasforevents.com/logo.png",
    "image": "https://atlasforevents.com/og-image.jpg",
    "telephone": "+33698272483",
    "email": "contact@atlasforevents.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marrakech",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.6295",
      "longitude": "-7.9811"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "priceRange": "€€-€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61566269972374",
      "https://www.instagram.com/atlas.for.events"
    ]
  };

  return (
    <PageLayout>
      <SEO 
        title={isEnglish ? "Events & Travel in Marrakech" : "Événementiel & Voyages à Marrakech"}
        description={isEnglish 
          ? "Atlas For Events - Your partner for exceptional events and unforgettable trips in Marrakech. Weddings, activities, spa, transport and accommodation."
          : "Atlas For Events - Votre partenaire pour des événements d'exception et des voyages inoubliables à Marrakech. Mariages, activités, spa, transport et hébergement."
        }
        keywords={isEnglish 
          ? "events Marrakech, Morocco travel, wedding Marrakech, spa Marrakech, VIP transport, activities Marrakech, desert excursions"
          : "événementiel Marrakech, voyages Maroc, mariage Marrakech, spa Marrakech, transport VIP, activités Marrakech, excursions désert"
        }
        url="https://atlasforevents.com"
        locale={isEnglish ? "en_US" : "fr_FR"}
        jsonLd={homeJsonLd}
      />
      <section id="accueil">
        <HeroSection />
      </section>
      <SearchBar />
      <section id="destinations">
        <DestinationsSection />
      </section>
      <FeaturesSection />
      <ClientLogos />
      <VideoStats />
      <section id="evenements">
        <ToursSection />
      </section>
      <StepsSection />
      <GipsySuenoSection />
      <TestimonialsSection />
      <NewsletterSection />
    </PageLayout>
  );
};

export default Index;
