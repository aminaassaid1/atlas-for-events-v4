import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

const sizeClasses = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5"
};

const RatingStars = ({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
  reviewCount,
  className = ""
}: RatingStarsProps) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-yellow-400" 
                : i < rating 
                  ? "text-yellow-400 fill-yellow-400/50" 
                  : "text-muted"
            }`}
          />
        ))}
      </div>
      
      {showValue && (
        <span className="font-semibold text-foreground ml-1">{rating}</span>
      )}
      
      {reviewCount !== undefined && (
        <span className="text-muted-foreground text-sm">({reviewCount} avis)</span>
      )}
    </div>
  );
};

export default RatingStars;
