
import { Clock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../ui/CountdownTimer';

interface Drop {
  id: string;
  title: string;
  image: string;
  status: 'coming-soon' | 'live' | 'ended';
  startDate?: Date;
  endDate?: Date;
  price?: number;
}

interface DropCardProps {
  drop: Drop;
}

const DropCard = ({ drop }: DropCardProps) => {
  const isLive = drop.status === 'live';
  const isComingSoon = drop.status === 'coming-soon';

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
          alt={drop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {isLive && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Drop is live!
            </span>
          )}
          {isComingSoon && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Available soon
            </span>
          )}
        </div>

        {/* Countdown Timer */}
        {(isLive && drop.endDate) && (
          <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
            <CountdownTimer targetDate={drop.endDate} />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{drop.title}</h3>
        
        {isComingSoon && drop.startDate && (
          <div className="mb-4">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <CountdownTimer targetDate={drop.startDate} />
            </div>
          </div>
        )}

        {isLive && drop.price && (
          <div className="mb-4">
            <span className="text-2xl font-bold">${drop.price}</span>
          </div>
        )}

        <div className="space-y-2">
          {isComingSoon ? (
            <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Get notified</span>
            </button>
          ) : (
            <Link
              to={`/drop/${drop.id}`}
              className="block w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
            >
              {isLive ? 'Buy Now' : 'View Drop'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropCard;
