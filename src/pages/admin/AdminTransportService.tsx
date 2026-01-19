import ServiceManager from '@/components/admin/ServiceManager';
import { Car } from 'lucide-react';

const transportCategories = [
  'Transfert aéroport',
  'Chauffeur privé',
  'Location véhicule',
  'Excursion',
];

export default function AdminTransportService() {
  return (
    <ServiceManager
      serviceType="transport"
      title="Gestion du Transport"
      description="Transferts aéroport, chauffeur privé et location de véhicules"
      icon={Car}
      categoryOptions={transportCategories}
    />
  );
}
