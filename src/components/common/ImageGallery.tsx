import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  badge?: string;
  discountBadge?: string;
  onWishlistToggle?: () => void;
  isWishlisted?: boolean;
  onShare?: () => void;
  className?: string;
}

const ImageGallery = ({
  images,
  alt,
  badge,
  discountBadge,
  onWishlistToggle,
  isWishlisted = false,
  onShare,
  className = ""
}: ImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={`grid lg:grid-cols-2 gap-4 ${className}`}>
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={images[activeImage]}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {badge && (
            <Badge className="bg-secondary text-secondary-foreground font-semibold px-3 py-1.5">
              {badge}
            </Badge>
          )}
          {discountBadge && (
            <Badge className="bg-red-500 text-white font-semibold px-3 py-1.5">
              {discountBadge}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          {onWishlistToggle && (
            <button
              onClick={onWishlistToggle}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isWishlisted 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white/90 text-muted-foreground hover:text-primary"
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
          )}
          {onShare && (
            <button 
              onClick={onShare}
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <Share2 className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeImage === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Thumbnail Grid */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid grid-cols-2 gap-4"
      >
        {images.slice(0, 4).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all ${
              activeImage === idx ? "ring-4 ring-primary" : "hover:opacity-80"
            }`}
          >
            <img 
              src={img} 
              alt={`${alt} ${idx + 1}`} 
              className="w-full h-full object-cover" 
            />
            {idx === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  +{images.length - 4}
                </span>
              </div>
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
