/**
 * Image path resolver for production compatibility
 * Converts /src/assets paths to proper module imports at build time
 */

// Import all activity images
import quadSunset from "@/assets/images/activities/quad-sunset.webp";
import quadGroup from "@/assets/images/activities/quad-group.webp";
import quadRide from "@/assets/images/activities/quad-ride.webp";
import quadAdventure from "@/assets/images/activities/quad-adventure.webp";
import quadAgafayPool from "@/assets/images/activities/quad-agafay-pool.webp";
import quadAgafayDust from "@/assets/images/activities/quad-agafay-dust.webp";
import quadAgafayGroup from "@/assets/images/activities/quad-agafay-group.webp";
import quadAgafayDuo from "@/assets/images/activities/quad-agafay-duo.webp";
import quadAgafayVillage from "@/assets/images/activities/quad-agafay-village.webp";
import quadPalms from "@/assets/images/activities/quad-palms.webp";
import montgolfiereSunrise from "@/assets/images/activities/montgolfiere-sunrise.webp";
import montgolfiereTakeoff from "@/assets/images/activities/montgolfiere-takeoff.webp";
import montgolfiereNight from "@/assets/images/activities/montgolfiere-night.webp";
import montgolfiereLandscape from "@/assets/images/activities/montgolfiere-landscape.webp";
import montgolfiereSky from "@/assets/images/activities/montgolfiere-sky.webp";
import montgolfiereSunset from "@/assets/images/activities/montgolfiere-sunset.webp";
import chameauPalmeraieGroup from "@/assets/images/activities/chameau-palmeraie-group.webp";
import chameauPalmeraieRide from "@/assets/images/activities/chameau-palmeraie-ride.webp";
import chameauPalmeraieRest from "@/assets/images/activities/chameau-palmeraie-rest.webp";
import chameauPalmeraieSunset from "@/assets/images/activities/chameau-palmeraie-sunset.webp";
import agafayCamelRide from "@/assets/images/activities/agafay-camel-ride.webp";
import agafayLounge from "@/assets/images/activities/agafay-lounge.webp";
import agafaySunset from "@/assets/images/activities/agafay-sunset.webp";
import agafayMotorcycle from "@/assets/images/activities/agafay-motorcycle.webp";
import agafayDunes from "@/assets/images/activities/agafay-dunes.webp";
import coursCuisine from "@/assets/images/activities/cours-cuisine.jpg";
import buggyDesert from "@/assets/images/activities/buggy-desert.webp";
import buggyFleet from "@/assets/images/activities/buggy-fleet.webp";
import buggyGroup from "@/assets/images/activities/buggy-group.webp";
import buggyPalmeraie from "@/assets/images/activities/buggy-palmeraie.webp";
import chezAliEntrance from "@/assets/images/activities/chez-ali-entrance.webp";
import chezAliFantasia from "@/assets/images/activities/chez-ali-fantasia.webp";
import chezAliRestaurant from "@/assets/images/activities/chez-ali-restaurant.webp";
import chezAliShow from "@/assets/images/activities/chez-ali-show.webp";
import chezAliTent from "@/assets/images/activities/chez-ali-tent.webp";
import dinerAgafayCushions from "@/assets/images/activities/diner-agafay-cushions.webp";
import dinerAgafayHorizon from "@/assets/images/activities/diner-agafay-horizon.webp";
import dinerAgafaySunset from "@/assets/images/activities/diner-agafay-sunset.webp";
import dinerAgafayTable from "@/assets/images/activities/diner-agafay-table.webp";
import dinerAgafayTent from "@/assets/images/activities/diner-agafay-tent.webp";
import ouzoudFalls from "@/assets/images/activities/ouzoud-falls.webp";
import ouzoudBoats from "@/assets/images/activities/ouzoud-boats.webp";
import ouzoudMonkey from "@/assets/images/activities/ouzoud-monkey.webp";
import ouzoudPanorama from "@/assets/images/activities/ouzoud-panorama.webp";
import ouzoudBoatRide from "@/assets/images/activities/ouzoud-boat-ride.webp";
import marrakechJemaaFna from "@/assets/images/activities/marrakech-jemaa-fna.webp";
import marrakechKoutoubia from "@/assets/images/activities/marrakech-koutoubia.webp";
import marrakechKoutoubiaFountain from "@/assets/images/activities/marrakech-koutoubia-fountain.webp";
import marrakechMedina from "@/assets/images/activities/marrakech-medina.webp";
import marrakechSouk from "@/assets/images/activities/marrakech-souk.webp";
import marrakechMenara from "@/assets/images/activities/marrakech-menara.webp";
import marrakechMuseumDoor from "@/assets/images/activities/marrakech-museum-door.webp";
import majorelleVilla from "@/assets/images/activities/majorelle-villa.webp";
import majorelleFountain from "@/assets/images/activities/majorelle-fountain.webp";
import majorellePond from "@/assets/images/activities/majorelle-pond.webp";
import majorelleVase from "@/assets/images/activities/majorelle-vase.webp";
import yslMuseum from "@/assets/images/activities/ysl-museum.webp";
import yslSculpture from "@/assets/images/activities/ysl-sculpture.webp";
import museeBerbere from "@/assets/images/activities/musee-berbere.webp";
import imlilPanorama from "@/assets/images/activities/imlil-panorama.webp";
import imlilSnow from "@/assets/images/activities/imlil-snow.webp";
import imlilTrekking from "@/assets/images/activities/imlil-trekking.webp";
import imlilValley from "@/assets/images/activities/imlil-valley.webp";
import imlilVillage from "@/assets/images/activities/imlil-village.webp";
import essaouiraCoast from "@/assets/images/activities/essaouira-coast.webp";
import essaouiraRamparts from "@/assets/images/activities/essaouira-ramparts.webp";
import essaouiraBoats from "@/assets/images/activities/essaouira-boats.webp";
import essaouiraPort from "@/assets/images/activities/essaouira-port.webp";
import essaouiraMedina from "@/assets/images/activities/essaouira-medina.webp";
import essaouiraHarbor from "@/assets/images/activities/essaouira-harbor.webp";
import asilahCoast from "@/assets/images/activities/asilah-coast.webp";
import asilahMedina from "@/assets/images/activities/asilah-medina.webp";
import asilahMural from "@/assets/images/activities/asilah-mural.webp";
import asilahRemparts from "@/assets/images/activities/asilah-remparts.webp";
import asilahSunset from "@/assets/images/activities/asilah-sunset.webp";
import asilahWalls from "@/assets/images/activities/asilah-walls.webp";
import merzougaCamp from "@/assets/images/activities/merzouga-camp.webp";
import merzougaCamel from "@/assets/images/activities/merzouga-camel.webp";
import merzougaQuad from "@/assets/images/activities/merzouga-quad.webp";
import merzougaCaravan from "@/assets/images/activities/merzouga-caravan.webp";
import merzougaAerial from "@/assets/images/activities/merzouga-aerial.webp";
import merzougaDunes from "@/assets/images/activities/merzouga-dunes.webp";
import chefchaouenActivity from "@/assets/images/activities/chefchaouen-activity.jpg";
import ouarzazateKasbahs from "@/assets/images/activities/ouarzazate-kasbahs.jpg";

// Import destination images
import ouarzazateAitBenhaddou from "@/assets/images/destinations/ouarzazate-ait-benhaddou.webp";
import ouarzazateCinema from "@/assets/images/destinations/ouarzazate-cinema.webp";
import ouarzazateKasbah from "@/assets/images/destinations/ouarzazate-kasbah.webp";
import ouarzazateStudios from "@/assets/images/destinations/ouarzazate-studios.webp";
import ouarzazatePanorama from "@/assets/images/destinations/ouarzazate-panorama.webp";
import ourikaValley from "@/assets/images/destinations/ourika-valley.jpg";
import chefchaouen1 from "@/assets/images/destinations/chefchaouen-1.webp";
import chefchaouen2 from "@/assets/images/destinations/chefchaouen-2.webp";
import chefchaouen3 from "@/assets/images/destinations/chefchaouen-3.webp";
import chefchaouen4 from "@/assets/images/destinations/chefchaouen-4.webp";
import chefchaouen5 from "@/assets/images/destinations/chefchaouen-5.webp";
import fesAbout from "@/assets/images/destinations/fes-about.webp";
import fesMurailles from "@/assets/images/destinations/fes-murailles.webp";
import fesPanorama from "@/assets/images/destinations/fes-panorama.webp";
import fesRiad from "@/assets/images/destinations/fes-riad.webp";
import fesTanneries1 from "@/assets/images/destinations/fes-tanneries-1.webp";
import fesTanneries2 from "@/assets/images/destinations/fes-tanneries-2.webp";
import arganCooperative1 from "@/assets/images/destinations/argan-cooperative-1.jpg";
import arganCooperative2 from "@/assets/images/destinations/argan-cooperative-2.jpg";
import arganCooperative3 from "@/assets/images/destinations/argan-cooperative-3.jpg";
import arganCooperative4 from "@/assets/images/destinations/argan-cooperative-4.jpg";
import arganCooperative5 from "@/assets/images/destinations/argan-cooperative-5.jpg";

// Map of hardcoded paths to imported modules
const imageMap: Record<string, string> = {
  // Quad activities
  "/src/assets/images/activities/quad-sunset.webp": quadSunset,
  "/src/assets/images/activities/quad-group.webp": quadGroup,
  "/src/assets/images/activities/quad-ride.webp": quadRide,
  "/src/assets/images/activities/quad-adventure.webp": quadAdventure,
  "/src/assets/images/activities/quad-agafay-pool.webp": quadAgafayPool,
  "/src/assets/images/activities/quad-agafay-dust.webp": quadAgafayDust,
  "/src/assets/images/activities/quad-agafay-group.webp": quadAgafayGroup,
  "/src/assets/images/activities/quad-agafay-duo.webp": quadAgafayDuo,
  "/src/assets/images/activities/quad-agafay-village.webp": quadAgafayVillage,
  "/src/assets/images/activities/quad-palms.webp": quadPalms,
  
  // Montgolfiere
  "/src/assets/images/activities/montgolfiere-sunrise.webp": montgolfiereSunrise,
  "/src/assets/images/activities/montgolfiere-takeoff.webp": montgolfiereTakeoff,
  "/src/assets/images/activities/montgolfiere-night.webp": montgolfiereNight,
  "/src/assets/images/activities/montgolfiere-landscape.webp": montgolfiereLandscape,
  "/src/assets/images/activities/montgolfiere-sky.webp": montgolfiereSky,
  "/src/assets/images/activities/montgolfiere-sunset.webp": montgolfiereSunset,
  
  // Chameau Palmeraie
  "/src/assets/images/activities/chameau-palmeraie-group.webp": chameauPalmeraieGroup,
  "/src/assets/images/activities/chameau-palmeraie-ride.webp": chameauPalmeraieRide,
  "/src/assets/images/activities/chameau-palmeraie-rest.webp": chameauPalmeraieRest,
  "/src/assets/images/activities/chameau-palmeraie-sunset.webp": chameauPalmeraieSunset,
  
  // Agafay
  "/src/assets/images/activities/agafay-camel-ride.webp": agafayCamelRide,
  "/src/assets/images/activities/agafay-lounge.webp": agafayLounge,
  "/src/assets/images/activities/agafay-sunset.webp": agafaySunset,
  "/src/assets/images/activities/agafay-motorcycle.webp": agafayMotorcycle,
  "/src/assets/images/activities/agafay-dunes.webp": agafayDunes,
  
  // Cours cuisine
  "/src/assets/images/activities/cours-cuisine.jpg": coursCuisine,
  
  // Buggy
  "/src/assets/images/activities/buggy-desert.webp": buggyDesert,
  "/src/assets/images/activities/buggy-fleet.webp": buggyFleet,
  "/src/assets/images/activities/buggy-group.webp": buggyGroup,
  "/src/assets/images/activities/buggy-palmeraie.webp": buggyPalmeraie,
  
  // Chez Ali
  "/src/assets/images/activities/chez-ali-entrance.webp": chezAliEntrance,
  "/src/assets/images/activities/chez-ali-fantasia.webp": chezAliFantasia,
  "/src/assets/images/activities/chez-ali-restaurant.webp": chezAliRestaurant,
  "/src/assets/images/activities/chez-ali-show.webp": chezAliShow,
  "/src/assets/images/activities/chez-ali-tent.webp": chezAliTent,
  
  // Diner Agafay
  "/src/assets/images/activities/diner-agafay-cushions.webp": dinerAgafayCushions,
  "/src/assets/images/activities/diner-agafay-horizon.webp": dinerAgafayHorizon,
  "/src/assets/images/activities/diner-agafay-sunset.webp": dinerAgafaySunset,
  "/src/assets/images/activities/diner-agafay-table.webp": dinerAgafayTable,
  "/src/assets/images/activities/diner-agafay-tent.webp": dinerAgafayTent,
  
  // Ouzoud
  "/src/assets/images/activities/ouzoud-falls.webp": ouzoudFalls,
  "/src/assets/images/activities/ouzoud-boats.webp": ouzoudBoats,
  "/src/assets/images/activities/ouzoud-monkey.webp": ouzoudMonkey,
  "/src/assets/images/activities/ouzoud-panorama.webp": ouzoudPanorama,
  "/src/assets/images/activities/ouzoud-boat-ride.webp": ouzoudBoatRide,
  
  // Marrakech
  "/src/assets/images/activities/marrakech-jemaa-fna.webp": marrakechJemaaFna,
  "/src/assets/images/activities/marrakech-koutoubia.webp": marrakechKoutoubia,
  "/src/assets/images/activities/marrakech-koutoubia-fountain.webp": marrakechKoutoubiaFountain,
  "/src/assets/images/activities/marrakech-medina.webp": marrakechMedina,
  "/src/assets/images/activities/marrakech-souk.webp": marrakechSouk,
  "/src/assets/images/activities/marrakech-menara.webp": marrakechMenara,
  "/src/assets/images/activities/marrakech-museum-door.webp": marrakechMuseumDoor,
  
  // Majorelle / YSL
  "/src/assets/images/activities/majorelle-villa.webp": majorelleVilla,
  "/src/assets/images/activities/majorelle-fountain.webp": majorelleFountain,
  "/src/assets/images/activities/majorelle-pond.webp": majorellePond,
  "/src/assets/images/activities/majorelle-vase.webp": majorelleVase,
  "/src/assets/images/activities/ysl-museum.webp": yslMuseum,
  "/src/assets/images/activities/ysl-sculpture.webp": yslSculpture,
  "/src/assets/images/activities/musee-berbere.webp": museeBerbere,
  
  // Imlil
  "/src/assets/images/activities/imlil-panorama.webp": imlilPanorama,
  "/src/assets/images/activities/imlil-snow.webp": imlilSnow,
  "/src/assets/images/activities/imlil-trekking.webp": imlilTrekking,
  "/src/assets/images/activities/imlil-valley.webp": imlilValley,
  "/src/assets/images/activities/imlil-village.webp": imlilVillage,
  
  // Essaouira
  "/src/assets/images/activities/essaouira-coast.webp": essaouiraCoast,
  "/src/assets/images/activities/essaouira-ramparts.webp": essaouiraRamparts,
  "/src/assets/images/activities/essaouira-boats.webp": essaouiraBoats,
  "/src/assets/images/activities/essaouira-port.webp": essaouiraPort,
  "/src/assets/images/activities/essaouira-medina.webp": essaouiraMedina,
  "/src/assets/images/activities/essaouira-harbor.webp": essaouiraHarbor,
  
  // Asilah
  "/src/assets/images/activities/asilah-coast.webp": asilahCoast,
  "/src/assets/images/activities/asilah-medina.webp": asilahMedina,
  "/src/assets/images/activities/asilah-mural.webp": asilahMural,
  "/src/assets/images/activities/asilah-remparts.webp": asilahRemparts,
  "/src/assets/images/activities/asilah-sunset.webp": asilahSunset,
  "/src/assets/images/activities/asilah-walls.webp": asilahWalls,
  
  // Merzouga
  "/src/assets/images/activities/merzouga-camp.webp": merzougaCamp,
  "/src/assets/images/activities/merzouga-camel.webp": merzougaCamel,
  "/src/assets/images/activities/merzouga-quad.webp": merzougaQuad,
  "/src/assets/images/activities/merzouga-caravan.webp": merzougaCaravan,
  "/src/assets/images/activities/merzouga-aerial.webp": merzougaAerial,
  "/src/assets/images/activities/merzouga-dunes.webp": merzougaDunes,
  
  // Other activities
  "/src/assets/images/activities/chefchaouen-activity.jpg": chefchaouenActivity,
  "/src/assets/images/activities/ouarzazate-kasbahs.jpg": ouarzazateKasbahs,
  
  // Destinations - Ouarzazate
  "/src/assets/images/destinations/ouarzazate-ait-benhaddou.webp": ouarzazateAitBenhaddou,
  "/src/assets/images/destinations/ouarzazate-cinema.webp": ouarzazateCinema,
  "/src/assets/images/destinations/ouarzazate-kasbah.webp": ouarzazateKasbah,
  "/src/assets/images/destinations/ouarzazate-studios.webp": ouarzazateStudios,
  "/src/assets/images/destinations/ouarzazate-panorama.webp": ouarzazatePanorama,
  
  // Destinations - Ourika
  "/src/assets/images/destinations/ourika-valley.jpg": ourikaValley,
  
  // Destinations - Chefchaouen
  "/src/assets/images/destinations/chefchaouen-1.webp": chefchaouen1,
  "/src/assets/images/destinations/chefchaouen-2.webp": chefchaouen2,
  "/src/assets/images/destinations/chefchaouen-3.webp": chefchaouen3,
  "/src/assets/images/destinations/chefchaouen-4.webp": chefchaouen4,
  "/src/assets/images/destinations/chefchaouen-5.webp": chefchaouen5,
  
  // Destinations - Fes
  "/src/assets/images/destinations/fes-about.webp": fesAbout,
  "/src/assets/images/destinations/fes-murailles.webp": fesMurailles,
  "/src/assets/images/destinations/fes-panorama.webp": fesPanorama,
  "/src/assets/images/destinations/fes-riad.webp": fesRiad,
  "/src/assets/images/destinations/fes-tanneries-1.webp": fesTanneries1,
  "/src/assets/images/destinations/fes-tanneries-2.webp": fesTanneries2,
  
  // Destinations - Argan
  "/src/assets/images/destinations/argan-cooperative-1.jpg": arganCooperative1,
  "/src/assets/images/destinations/argan-cooperative-2.jpg": arganCooperative2,
  "/src/assets/images/destinations/argan-cooperative-3.jpg": arganCooperative3,
  "/src/assets/images/destinations/argan-cooperative-4.jpg": arganCooperative4,
  "/src/assets/images/destinations/argan-cooperative-5.jpg": arganCooperative5,
};

/**
 * Resolves an image path to a properly bundled URL
 * If the path starts with /src/assets, it will be resolved from the imageMap
 * Otherwise, the original path is returned (for external URLs)
 */
export function resolveImagePath(path: string): string {
  if (path.startsWith("/src/assets/")) {
    return imageMap[path] || path;
  }
  return path;
}

/**
 * Resolves an array of image paths
 */
export function resolveImagePaths(paths: string[]): string[] {
  return paths.map(resolveImagePath);
}
