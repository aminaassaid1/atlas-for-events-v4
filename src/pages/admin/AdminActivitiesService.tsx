import ServiceManager from '@/components/admin/ServiceManager';
import { Compass } from 'lucide-react';

const activityCategories = [
  'Aventure',
  'Nature',
  'Culture',
  'Gastronomie',
  'Détente',
  'Sport',
];

export default function AdminActivitiesService() {
  return (
    <ServiceManager
      serviceType="activity"
      title="Gestion des Activités"
      description="Quad, montgolfière, chameau, cours de cuisine et plus encore"
      icon={Compass}
      categoryOptions={activityCategories}
    />
  );
}
