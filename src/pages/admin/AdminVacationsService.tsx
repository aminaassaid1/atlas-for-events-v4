import ServiceManager from '@/components/admin/ServiceManager';
import { Mountain } from 'lucide-react';

const vacationCategories = [
  'Désert',
  'Culture',
  'Nature',
  'Côte',
  'Montagne',
  'Circuit',
];

export default function AdminVacationsService() {
  return (
    <ServiceManager
      serviceType="vacation"
      title="Gestion des Vacances"
      description="Excursions, circuits et destinations au Maroc"
      icon={Mountain}
      categoryOptions={vacationCategories}
    />
  );
}
