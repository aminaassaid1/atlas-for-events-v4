import ServiceManager from '@/components/admin/ServiceManager';
import { Home } from 'lucide-react';

const accommodationCategories = [
  'Villa',
  'Riad',
  'Appartement',
  'Camp de luxe',
  'Hôtel',
];

export default function AdminAccommodationService() {
  return (
    <ServiceManager
      serviceType="accommodation"
      title="Gestion des Hébergements"
      description="Villas, riads, appartements et camps de luxe"
      icon={Home}
      categoryOptions={accommodationCategories}
    />
  );
}
