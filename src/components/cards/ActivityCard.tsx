/**
 * Unified Activity/Destination Card Component
 * Reusable card for displaying activities, destinations, and related items
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/common";
import { useTranslation } from "react-i18next";

export interface CardItem {
  id: string | number;
  slug?: string;
  name: string;
  nameEn?: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category?: string;
  description?: string;
  includes?: string[];
  includesEn?: string[];
}

export type CardVariant = "full" | "compact" | "related";
export type LinkType = "activites" | "destinations";

interface ActivityCardProps {
  item: CardItem;
  index?: number;
  variant?: CardVariant;
  linkType?: LinkType;
  showPromo?: boolean;
  showCategory?: boolean;
  showDescription?: boolean;
  showIncludes?: boolean;
  showMapPin?: boolean;
  fromLabel?: string;
  viewDetailsLabel?: string;
  promoLabel?: string;
}

const ActivityCard = ({
  item,
  index = 0,
  variant = "full",
  linkType = "activites",
  showPromo = true,
  showCategory = false,
  showDescription = false,
  showIncludes = true,
  showMapPin = false,
  fromLabel,
  viewDetailsLabel,
  promoLabel = "Promo"
}: ActivityCardProps) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const displayName = isEnglish && item.nameEn ? item.nameEn : item.name;
  const displayIncludes = isEnglish && item.includesEn ? item.includesEn : item.includes;
  const linkId = item.slug || item.id;
  const linkPath = `/${linkType}/${linkId}`;
  
  const defaultFromLabel = fromLabel || t('common.from', 'À partir de');
  const defaultViewDetailsLabel = viewDetailsLabel || t('common.viewDetails', 'Voir détails');

  // Compact variant for related items
  if (variant === "related") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <Link to={linkPath} className="block">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <OptimizedImage
              src={item.image}
              alt={displayName}
              aspectRatio="landscape"
              className="group-hover:scale-105 transition-transform duration-500"
              containerClassName="rounded-xl"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-white/90 text-foreground">{item.duration}</Badge>
            </div>
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground gap-1">
                <Star className="w-3 h-3 fill-current" />
                {item.rating}
              </Badge>
            </div>
          </div>
          <h3 className="font-title text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {displayName}
          </h3>
          {item.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">{item.price}€</span>
            {item.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{item.originalPrice}€</span>
            )}
          </div>
        </Link>
      </motion.div>
    );
  }

  // Full variant for grid listings
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={item.image}
          alt={displayName}
          aspectRatio="landscape"
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2">
          <span className="bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-foreground flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            {item.duration}
          </span>
          {showCategory && item.category && (
            <span className="bg-secondary/90 text-secondary-foreground px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold">
              {item.category}
            </span>
          )}
        </div>
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <span className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-0.5 sm:gap-1">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            {item.rating}
          </span>
        </div>
        {showPromo && item.originalPrice && (
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
            <span className="bg-destructive text-destructive-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
              {promoLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        {showMapPin ? (
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="line-clamp-2">{displayName}</span>
            </h3>
          </div>
        ) : (
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 line-clamp-2">
            {displayName}
          </h3>
        )}

        {showDescription && item.description && (
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{item.description}</p>
        )}

        {showIncludes && displayIncludes && displayIncludes.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            {displayIncludes.slice(0, 3).map(inc => (
              <span key={inc} className="text-[10px] sm:text-xs bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-muted-foreground">
                {inc}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-xs text-muted-foreground">{defaultFromLabel}</span>
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-primary">{item.price}€</span>
              {item.originalPrice && (
                <span className="text-xs sm:text-sm text-muted-foreground line-through">{item.originalPrice}€</span>
              )}
            </div>
          </div>
          <Button size="sm" className="rounded-full text-xs sm:text-sm px-3 sm:px-4 flex-shrink-0" asChild>
            <Link to={linkPath}>
              <span className="hidden xs:inline">{defaultViewDetailsLabel}</span>
              <span className="xs:hidden">Détails</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
