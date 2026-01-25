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
import agadirAbout from "@/assets/images/destinations/agadir-about.webp";
import agadirDest from "@/assets/images/destinations/agadir.jpg";
import casablancaAbout from "@/assets/images/destinations/casablanca-about.webp";
import casablancaDest from "@/assets/images/destinations/casablanca.jpg";
import essaouiraAbout from "@/assets/images/destinations/essaouira-about.webp";
import essaouiraDest from "@/assets/images/destinations/essaouira.jpg";
import fesDestination from "@/assets/images/destinations/fes.jpg";
import marrakechAbout from "@/assets/images/destinations/marrakech-about.webp";
import marrakechDest from "@/assets/images/destinations/marrakech.jpg";
import tangerAbout from "@/assets/images/destinations/tanger-about.webp";
import tangerDest from "@/assets/images/destinations/tanger.jpg";

// Import event images
import animationEvent from "@/assets/images/events/animation.webp";
import anniversairesEvent from "@/assets/images/events/anniversaires.webp";
import autresServicesEvent from "@/assets/images/events/autres-services.webp";
import evjfEvjgEvent from "@/assets/images/events/evjf-evjg.webp";
import fiancaillesEvent from "@/assets/images/events/fiancailles.webp";
import mariageBeachEvent from "@/assets/images/events/mariage-beach.webp";
import mariageTableEvent from "@/assets/images/events/mariage-table.webp";
import soireePriveeEvent from "@/assets/images/events/soiree-privee.webp";

// Import gipsy images
import gipsy1 from "@/assets/images/gipsy/gipsy-1.webp";
import gipsy2 from "@/assets/images/gipsy/gipsy-2.webp";
import gipsy3 from "@/assets/images/gipsy/gipsy-3.webp";
import gipsy4 from "@/assets/images/gipsy/gipsy-4.webp";
import gipsy5 from "@/assets/images/gipsy/gipsy-5.webp";

// Import hebergement images
import agafayLuxuryCamp from "@/assets/images/hebergement/agafay-luxury-camp.webp";
import appartVictorHugo from "@/assets/images/hebergement/appart-victor-hugo.jpg";
import beAgafayHideaway from "@/assets/images/hebergement/be-agafay-hideaway.webp";
import bedouinAgafay from "@/assets/images/hebergement/bedouin-agafay.jpg";
import riadDarIkalimo from "@/assets/images/hebergement/riad-dar-ikalimo.webp";
import villaOrientalys from "@/assets/images/hebergement/villa-orientalys.webp";

// Import services images
import cuisineLocale from "@/assets/images/services/cuisine-locale.jpg";
import divertissement from "@/assets/images/services/divertissement.jpg";
import gastronomie from "@/assets/images/services/gastronomie.jpg";
import guideExpert from "@/assets/images/services/guide-expert.jpg";
import hebergementService from "@/assets/images/services/hebergement.jpg";
import reposDetente from "@/assets/images/services/repos-detente.webp";
import spaMassage from "@/assets/images/services/spa-massage.jpg";
import transportVip from "@/assets/images/services/transport-vip.jpg";

// Import spa images
import hammam from "@/assets/images/spa/hammam.webp";
import hydrafacial from "@/assets/images/spa/hydrafacial.webp";
import lifting from "@/assets/images/spa/lifting.webp";
import massage from "@/assets/images/spa/massage.webp";

// Import transport images
import airportPickup from "@/assets/images/transport/airport-pickup.webp";
import chauffeur from "@/assets/images/transport/chauffeur.webp";
import locationTransport from "@/assets/images/transport/location.webp";

// Import happy customers images
import hpyCus1 from "@/assets/images/hpy-cus/pic1.jpg";
import hpyCus2 from "@/assets/images/hpy-cus/pic2.jpg";
import hpyCus3 from "@/assets/images/hpy-cus/pic3.jpg";
import hpyCus4 from "@/assets/images/hpy-cus/pic4.jpg";
import hpyCus5 from "@/assets/images/hpy-cus/pic5.jpg";
import hpyCus6 from "@/assets/images/hpy-cus/pic6.jpg";
import hpyCus7 from "@/assets/images/hpy-cus/pic7.jpg";

// Import miscellaneous images
import image24 from "@/assets/images/24-Image.png";
import girlImage from "@/assets/images/Girl-Image.png";
import imageCont from "@/assets/images/Image-cont.png";
import abtPic1 from "@/assets/images/abt-pic1.png";
import airplaneTakeoff from "@/assets/images/airplane-takeoff.png";
import cloud1 from "@/assets/images/cloud-1.png";
import cloudImg from "@/assets/images/cloud.png";
import hotBallonLeft from "@/assets/images/hotballon-Left.png";
import hotBallonRight from "@/assets/images/hotballon-right.png";
import inrBannerCloud from "@/assets/images/inr-banner-cloud.png";
import partnerLogo1 from "@/assets/images/partner-logo-1.webp";
import partnerLogo2 from "@/assets/images/partner-logo-2.webp";
import partnerLogo3 from "@/assets/images/partner-logo-3.webp";
import partnerLogo4 from "@/assets/images/partner-logo-4.webp";
import partnerLogo5 from "@/assets/images/partner-logo-5.webp";
import plane1 from "@/assets/images/plane1.png";
import stepsChefchaouen from "@/assets/images/steps-chefchaouen.webp";
import stepsDesertCamels from "@/assets/images/steps-desert-camels.webp";
import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";
import transportHero from "@/assets/images/transport-hero.webp";
import traveler from "@/assets/images/traveler.png";
import weRecCamel from "@/assets/images/we-rec-camel.webp";
import weRecCamp from "@/assets/images/we-rec-camp.webp";
import weRecPic from "@/assets/images/we-rec-pic.png";
import weRec3Pic from "@/assets/images/we-rec3-pic.jpg";
import weRec3Pic2 from "@/assets/images/we-rec3-pic2.jpg";

// Import background images
import cloudBg from "@/assets/images/background/Cloud-bg.png";
import titleSeparator from "@/assets/images/background/Title-Separator.png";

// Import offer images
import offerPic1 from "@/assets/images/offer/pic1.jpg";

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
  "/src/assets/images/destinations/fes.jpg": fesDestination,
  
  // Destinations - Argan
  "/src/assets/images/destinations/argan-cooperative-1.jpg": arganCooperative1,
  "/src/assets/images/destinations/argan-cooperative-2.jpg": arganCooperative2,
  "/src/assets/images/destinations/argan-cooperative-3.jpg": arganCooperative3,
  "/src/assets/images/destinations/argan-cooperative-4.jpg": arganCooperative4,
  "/src/assets/images/destinations/argan-cooperative-5.jpg": arganCooperative5,
  
  // Destinations - Other cities
  "/src/assets/images/destinations/agadir-about.webp": agadirAbout,
  "/src/assets/images/destinations/agadir.jpg": agadirDest,
  "/src/assets/images/destinations/casablanca-about.webp": casablancaAbout,
  "/src/assets/images/destinations/casablanca.jpg": casablancaDest,
  "/src/assets/images/destinations/essaouira-about.webp": essaouiraAbout,
  "/src/assets/images/destinations/essaouira.jpg": essaouiraDest,
  "/src/assets/images/destinations/marrakech-about.webp": marrakechAbout,
  "/src/assets/images/destinations/marrakech.jpg": marrakechDest,
  "/src/assets/images/destinations/tanger-about.webp": tangerAbout,
  "/src/assets/images/destinations/tanger.jpg": tangerDest,
  
  // Events
  "/src/assets/images/events/animation.webp": animationEvent,
  "/src/assets/images/events/anniversaires.webp": anniversairesEvent,
  "/src/assets/images/events/autres-services.webp": autresServicesEvent,
  "/src/assets/images/events/evjf-evjg.webp": evjfEvjgEvent,
  "/src/assets/images/events/fiancailles.webp": fiancaillesEvent,
  "/src/assets/images/events/mariage-beach.webp": mariageBeachEvent,
  "/src/assets/images/events/mariage-table.webp": mariageTableEvent,
  "/src/assets/images/events/soiree-privee.webp": soireePriveeEvent,
  
  // Gipsy
  "/src/assets/images/gipsy/gipsy-1.webp": gipsy1,
  "/src/assets/images/gipsy/gipsy-2.webp": gipsy2,
  "/src/assets/images/gipsy/gipsy-3.webp": gipsy3,
  "/src/assets/images/gipsy/gipsy-4.webp": gipsy4,
  "/src/assets/images/gipsy/gipsy-5.webp": gipsy5,
  
  // Hebergement
  "/src/assets/images/hebergement/agafay-luxury-camp.webp": agafayLuxuryCamp,
  "/src/assets/images/hebergement/appart-victor-hugo.jpg": appartVictorHugo,
  "/src/assets/images/hebergement/be-agafay-hideaway.webp": beAgafayHideaway,
  "/src/assets/images/hebergement/bedouin-agafay.jpg": bedouinAgafay,
  "/src/assets/images/hebergement/riad-dar-ikalimo.webp": riadDarIkalimo,
  "/src/assets/images/hebergement/villa-orientalys.webp": villaOrientalys,
  
  // Services
  "/src/assets/images/services/cuisine-locale.jpg": cuisineLocale,
  "/src/assets/images/services/divertissement.jpg": divertissement,
  "/src/assets/images/services/gastronomie.jpg": gastronomie,
  "/src/assets/images/services/guide-expert.jpg": guideExpert,
  "/src/assets/images/services/hebergement.jpg": hebergementService,
  "/src/assets/images/services/repos-detente.webp": reposDetente,
  "/src/assets/images/services/spa-massage.jpg": spaMassage,
  "/src/assets/images/services/transport-vip.jpg": transportVip,
  
  // Spa
  "/src/assets/images/spa/hammam.webp": hammam,
  "/src/assets/images/spa/hydrafacial.webp": hydrafacial,
  "/src/assets/images/spa/lifting.webp": lifting,
  "/src/assets/images/spa/massage.webp": massage,
  
  // Transport
  "/src/assets/images/transport/airport-pickup.webp": airportPickup,
  "/src/assets/images/transport/chauffeur.webp": chauffeur,
  "/src/assets/images/transport/location.webp": locationTransport,
  
  // Happy customers
  "/src/assets/images/hpy-cus/pic1.jpg": hpyCus1,
  "/src/assets/images/hpy-cus/pic2.jpg": hpyCus2,
  "/src/assets/images/hpy-cus/pic3.jpg": hpyCus3,
  "/src/assets/images/hpy-cus/pic4.jpg": hpyCus4,
  "/src/assets/images/hpy-cus/pic5.jpg": hpyCus5,
  "/src/assets/images/hpy-cus/pic6.jpg": hpyCus6,
  "/src/assets/images/hpy-cus/pic7.jpg": hpyCus7,
  
  // Background
  "/src/assets/images/background/Cloud-bg.png": cloudBg,
  "/src/assets/images/background/Title-Separator.png": titleSeparator,
  
  // Offer
  "/src/assets/images/offer/pic1.jpg": offerPic1,
  
  // Miscellaneous
  "/src/assets/images/24-Image.png": image24,
  "/src/assets/images/Girl-Image.png": girlImage,
  "/src/assets/images/Image-cont.png": imageCont,
  "/src/assets/images/abt-pic1.png": abtPic1,
  "/src/assets/images/airplane-takeoff.png": airplaneTakeoff,
  "/src/assets/images/cloud-1.png": cloud1,
  "/src/assets/images/cloud.png": cloudImg,
  "/src/assets/images/hotballon-Left.png": hotBallonLeft,
  "/src/assets/images/hotballon-right.png": hotBallonRight,
  "/src/assets/images/inr-banner-cloud.png": inrBannerCloud,
  "/src/assets/images/partner-logo-1.webp": partnerLogo1,
  "/src/assets/images/partner-logo-2.webp": partnerLogo2,
  "/src/assets/images/partner-logo-3.webp": partnerLogo3,
  "/src/assets/images/partner-logo-4.webp": partnerLogo4,
  "/src/assets/images/partner-logo-5.webp": partnerLogo5,
  "/src/assets/images/plane1.png": plane1,
  "/src/assets/images/steps-chefchaouen.webp": stepsChefchaouen,
  "/src/assets/images/steps-desert-camels.webp": stepsDesertCamels,
  "/src/assets/images/testimonial-1.jpg": testimonial1,
  "/src/assets/images/testimonial-2.jpg": testimonial2,
  "/src/assets/images/testimonial-3.jpg": testimonial3,
  "/src/assets/images/transport-hero.webp": transportHero,
  "/src/assets/images/traveler.png": traveler,
  "/src/assets/images/we-rec-camel.webp": weRecCamel,
  "/src/assets/images/we-rec-camp.webp": weRecCamp,
  "/src/assets/images/we-rec-pic.png": weRecPic,
  "/src/assets/images/we-rec3-pic.jpg": weRec3Pic,
  "/src/assets/images/we-rec3-pic2.jpg": weRec3Pic2,
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
