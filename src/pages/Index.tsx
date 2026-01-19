import { PageLayout } from "@/components/layout";
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

const Index = () => {
  return (
    <PageLayout>
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
