/**
 * SEO Component - Manages document head meta tags for SEO
 * Uses react-helmet-async for dynamic meta tag updates
 */
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  locale?: "fr_FR" | "en_US";
  noIndex?: boolean;
  jsonLd?: object;
}

const BASE_URL = "https://atlasforevents.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Atlas For Events";

const SEO = ({
  title,
  description = "Atlas For Events - Votre partenaire pour des événements d'exception et des voyages inoubliables à Marrakech. Mariages, activités, spa, transport et hébergement.",
  keywords = "événementiel Marrakech, voyages Maroc, mariage Marrakech, spa Marrakech, transport VIP, activités Marrakech, excursions désert",
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
  locale = "fr_FR",
  noIndex = false,
  jsonLd,
}: SEOProps) => {
  const pageTitle = title 
    ? `${title} | ${SITE_NAME}` 
    : `${SITE_NAME} - Événementiel & Voyages à Marrakech`;
  
  const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  // Default organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marrakech",
      "addressCountry": "MA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33698272483",
      "contactType": "customer service",
      "availableLanguage": ["French", "English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61566269972374",
      "https://www.instagram.com/atlas.for.events"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />
      {locale === "fr_FR" && <meta property="og:locale:alternate" content="en_US" />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@AtlasForEvents" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#0A4D68" />
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="Marrakech" />
      <meta name="language" content={locale === "fr_FR" ? "French" : "English"} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || organizationJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
