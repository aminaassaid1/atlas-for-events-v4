import { useState, useEffect } from "react";
import { MapPin, Calendar, Users, Search, Briefcase, Tag } from "lucide-react";

// Sub-services mapping for each service type
const subServicesMap: Record<string, string[]> = {
  "Hébergement": ["Villa", "Appartement", "Riad", "Camp de luxe"],
  "Transport": ["Transfert aéroport", "VIP & Limousine", "Excursion", "Location véhicule"],
  "Événements": ["Mariage", "Corporate", "Anniversaire", "Conférence"],
  "Activités": ["Quad & Buggy", "Montgolfière", "Randonnée", "Excursion désert"],
  "Spa & Bien-être": ["Massage", "Hammam", "Soins du corps", "Yoga & Méditation"],
  "Vacances": ["Week-end", "Séjour complet", "Circuit découverte", "All-inclusive"],
};

const SearchBar = () => {
  const [location, setLocation] = useState("Marrakech");
  const [serviceType, setServiceType] = useState("Hébergement");
  const [subService, setSubService] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);

  // Reset sub-service when service type changes
  useEffect(() => {
    const options = subServicesMap[serviceType] || [];
    setSubService(options[0] || "");
  }, [serviceType]);

  return (
    <section className="bg-gradient-to-b from-primary/5 to-primary/10 py-12 xl:py-17.5 px-4 md:px-5 flex items-center justify-center">
      <div className="w-full max-w-320 p-1.5 md:p-1.75 bg-gradient-to-r from-gold/30 to-orange/20 lg:rounded-25xl rounded-2xl shadow-lg">
        <div className="bg-white rounded-xl lg:rounded-full p-3 md:p-4 lg:p-3 lg:pl-10 shadow-sm">
          <form className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
            {/* Location */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <MapPin className="h-4 w-4 text-primary" />
                Localisation
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-lg font-bold text-primary outline-none cursor-pointer"
              >
                <option value="Marrakech">Marrakech</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Rabat">Rabat</option>
                <option value="Fès">Fès</option>
                <option value="Agadir">Agadir</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Service Type */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Briefcase className="h-4 w-4 text-primary" />
                Service
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-transparent text-lg font-bold text-primary outline-none cursor-pointer"
              >
                <option value="Hébergement">Hébergement</option>
                <option value="Transport">Transport</option>
                <option value="Événements">Événements</option>
                <option value="Activités">Activités</option>
                <option value="Spa & Bien-être">Spa & Bien-être</option>
                <option value="Vacances">Vacances</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Sub-Service */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Tag className="h-4 w-4 text-primary" />
                Option
              </label>
              <select
                value={subService}
                onChange={(e) => setSubService(e.target.value)}
                className="w-full bg-transparent text-lg font-bold text-primary outline-none cursor-pointer"
              >
                {(subServicesMap[serviceType] || []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Date */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Choisir une date"
                className="w-full bg-transparent text-lg font-bold text-primary outline-none"
              />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#DBEEEE]" />

            {/* Guests */}
            <div className="w-full lg:w-auto lg:flex-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Users className="h-4 w-4 text-primary" />
                Personnes
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="h-7 w-7 flex items-center justify-center text-muted-foreground hover:text-primary border border-border rounded-full hover:border-primary transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-12 bg-transparent text-lg font-bold text-primary outline-none text-center"
                />
                <button
                  type="button"
                  onClick={() => setGuests(guests + 1)}
                  className="h-7 w-7 flex items-center justify-center text-muted-foreground hover:text-primary border border-border rounded-full hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-6 lg:h-14 lg:w-14 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Search className="h-6 w-6" />
              <span className="ml-2 lg:hidden">Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
