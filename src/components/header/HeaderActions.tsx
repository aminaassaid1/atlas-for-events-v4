import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderActionsProps {
  cartCount: number;
  isScrolled: boolean;
  useDarkText: boolean;
}

const HeaderActions = ({
  cartCount,
  isScrolled,
  useDarkText
}: HeaderActionsProps) => {
  const getIconColorClass = () => {
    if (isScrolled) return "text-white";
    if (useDarkText) return "text-primary";
    return "text-white";
  };

  return (
    <div className="flex lg:justify-end lg:items-center z-9 h-20 xl:pl-8 max-lg:ms-auto">
      <div className="flex items-center">
        {/* Language Switcher */}
        <LanguageSwitcher isScrolled={isScrolled} useDarkText={useDarkText} />
        
        <ul className="ml-2 flex items-center -mr-2.5">
          {/* Wishlist Icon */}
          <li className="inline-block">
            <Link
              to="/favoris"
              className={`flex items-center justify-center size-14 px-4 cursor-pointer transition-colors ${getIconColorClass()}`}
            >
              <Heart className="h-5 w-5" />
            </Link>
          </li>

          {/* Cart Icon */}
          <li className="inline-block">
            <Link
              to="/panier"
              className={`flex items-center justify-center size-14 px-4 cursor-pointer transition-colors relative ${getIconColorClass()}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderActions;
