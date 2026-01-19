import { Flame } from "lucide-react";

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  suffix?: string;
  size?: "sm" | "md" | "lg";
  showSavings?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: {
    price: "text-lg",
    original: "text-sm"
  },
  md: {
    price: "text-2xl",
    original: "text-base"
  },
  lg: {
    price: "text-3xl",
    original: "text-lg"
  }
};

const PriceDisplay = ({
  price,
  originalPrice,
  currency = "€",
  suffix,
  size = "md",
  showSavings = false,
  className = ""
}: PriceDisplayProps) => {
  const savings = originalPrice ? originalPrice - price : 0;
  const discountPercentage = originalPrice 
    ? Math.round((1 - price / originalPrice) * 100) 
    : 0;

  return (
    <div className={className}>
      <div className="flex items-baseline gap-2">
        <span className={`${sizeClasses[size].price} font-title font-bold text-primary`}>
          {price}{currency}
        </span>
        
        {originalPrice && (
          <span className={`${sizeClasses[size].original} text-muted-foreground line-through`}>
            {originalPrice}{currency}
          </span>
        )}
        
        {suffix && (
          <span className="text-muted-foreground">{suffix}</span>
        )}
      </div>
      
      {showSavings && savings > 0 && (
        <p className="text-sm text-red-500 font-medium mt-1 flex items-center gap-1">
          <Flame className="w-3.5 h-3.5" />
          Économisez {savings}{currency} (-{discountPercentage}%)
        </p>
      )}
    </div>
  );
};

export default PriceDisplay;
