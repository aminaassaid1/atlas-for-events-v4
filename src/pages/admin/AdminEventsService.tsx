import ServiceManager from '@/components/admin/ServiceManager';
import { Calendar } from 'lucide-react';

const eventCategories = [
  'Mariages',
  'Fiançailles',
  'Anniversaires',
  'EVJF/EVJG',
  'Soirées Privées',
  'Corporate',
  'Gala',
];

export default function AdminEventsService() {
  return (
    <ServiceManager
      serviceType="event"
      title="Gestion des Événements"
      description="Mariages, anniversaires, EVJF/EVJG, soirées privées et événements corporate"
      icon={Calendar}
      categoryOptions={eventCategories}
    />
  );
}
