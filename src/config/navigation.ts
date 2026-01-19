import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    name: "Accueil",
    href: "/",
    scrollTo: "accueil"
  },
  {
    name: "À Propos",
    href: "/a-propos"
  },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Tous les services", href: "/services" },
      { name: "Événements", href: "/services/evenements" },
      { name: "Vacances", href: "/services/vacances" },
      { name: "Activités", href: "/services/activites" },
      { name: "Hébergement", href: "/services/hebergement" },
      { name: "Spa", href: "/services/spa" },
      { name: "Transport", href: "/services/transport" }
    ]
  },
  {
    name: "Boutique",
    href: "/boutique",
    subItems: [
      { name: "Tous les produits", href: "/boutique" },
      { name: "Livraison Internationale", href: "/services/livraison" }
    ]
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

export const darkHeroPages = ["/"];
