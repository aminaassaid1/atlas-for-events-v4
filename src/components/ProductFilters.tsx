import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
interface FilterCategory {
  id: string;
  name: string;
  icon?: React.ComponentType<{
    className?: string;
  }>;
}
interface ProductFiltersProps {
  categories: FilterCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  maxPrice: number;
  onPriceChange: (range: [number, number]) => void;
  showPromoOnly?: boolean;
  onPromoChange?: (show: boolean) => void;
}
export const ProductFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
  priceRange,
  maxPrice,
  onPriceChange,
  showPromoOnly = false,
  onPromoChange
}: ProductFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasActiveFilters = activeCategory !== "all" || priceRange[0] > 0 || priceRange[1] < maxPrice || showPromoOnly;
  const resetFilters = () => {
    onCategoryChange("all");
    onPriceChange([0, maxPrice]);
    onPromoChange?.(false);
  };
  return <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="w-full flex items-center justify-center gap-2">
          <Filter className="w-4 h-4" />
          Filtres
          {hasActiveFilters && <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
              Actifs
            </span>}
        </Button>
      </div>

      {/* Filters Content */}
      <div className={`space-y-6 ${isExpanded ? "block" : "hidden md:block"}`}>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(cat => <button key={cat.id} onClick={() => onCategoryChange(cat.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all ${activeCategory === cat.id ? "bg-primary text-primary-foreground shadow-lg" : "bg-white text-muted-foreground hover:bg-muted border border-border"}`}>
              {cat.icon && <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              <span className="whitespace-nowrap">{cat.name}</span>
            </button>)}
        </div>

        {/* Price Range Filter */}
        
      </div>
    </div>;
};
export default ProductFilters;