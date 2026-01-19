import ServiceManager from '@/components/admin/ServiceManager';
import { Sparkles } from 'lucide-react';

const spaCategories = [
  'Hammam',
  'Massage',
  'Soins visage',
  'Soins corps',
  'Rituel complet',
];

export default function AdminSpaService() {
  return (
    <ServiceManager
      serviceType="spa"
      title="Gestion du Spa"
      description="Hammam, massages, soins visage et rituels bien-être"
      icon={Sparkles}
      categoryOptions={spaCategories}
    />
  );
}
