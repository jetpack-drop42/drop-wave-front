
import DropCard from '../product/DropCard';
import { Drop } from '../../types';
import { Clock } from 'lucide-react';

const DropsPage = () => {
  // Mock data for drops
  const mockDrops: Drop[] = [
    {
      id: '1',
      title: 'Premium Cotton Tee',
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      status: 'coming-soon' as const,
      startDate: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
    },
    {
      id: '2',
      title: 'Water Bottle Collection',
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      status: 'live' as const,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 37 * 60 * 1000), // 2d 14h 37m from now
      price: 22
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="w-5 h-5 text-orange-500" />
          <h1 className="text-3xl font-bold">Limited-time Drops</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockDrops.map((drop) => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropsPage;
