// Data exports - explicit to avoid conflicts
export { destinations, getDestinationById, getDestinationsByCategory, categories as destinationCategories } from "./destinations";
export type { Destination, ItineraryDay, PracticalInfo as DestinationPracticalInfo, FAQ as DestinationFAQ, Review as DestinationReview } from "./destinations";

export { activities, getActivityById, getActivitiesByCategory } from "./activities";
export type { Activity } from "./activities";

export { eventTypes, getEventTypeById } from "./events";
export type { EventType } from "./events";

export { products } from "./products";
