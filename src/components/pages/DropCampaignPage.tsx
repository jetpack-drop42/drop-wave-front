
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Share2, Bell } from 'lucide-react';
import CountdownTimer from '../ui/CountdownTimer';
import { useCart } from '../../context/CartContext';

const DropCampaignPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [email, setEmail] = useState('');

  // Mock drop data
  const drop = {
    id: id || '1',
    title: 'Spring Awakening Drop',
    subtitle: 'Limited Edition Collection',
    description: 'Celebrate the season of renewal with our exclusive Spring Awakening collection. Featuring vibrant colors and nature-inspired designs.',
    status: 'coming-soon' as const,
    startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
    price: 32,
    originalPrice: 40,
    totalQuantity: 100,
    soldQuantity: 0,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    waitlistCount: 247
  };

  const isLive = drop.status === 'live';
  const isComingSoon = drop.status === 'coming-soon';

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle notify me signup
    console.log('Notify me signup:', email);
    setEmail('');
  };

  const handleAddToCart = () => {
    if (isLive) {
      addItem({
        id: drop.id,
        name: drop.title,
        price: drop.price,
        image: drop.image,
        size: selectedSize
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700 flex items-center space-x-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to drops</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Drop Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={drop.image}
                alt={drop.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute top-6 left-6">
              {isLive && (
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Live Now
                </span>
              )}
              {isComingSoon && (
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              )}
            </div>

            {/* Countdown */}
            {isComingSoon && (
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Drops in</span>
                  </div>
                  <div className="text-center">
                    <CountdownTimer targetDate={drop.startDate} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Drop Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {drop.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{drop.subtitle}</p>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${drop.price}
                </span>
                {drop.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${drop.originalPrice}
                  </span>
                )}
              </div>

              {/* Waitlist Counter */}
              {isComingSoon && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{drop.waitlistCount} people waiting</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {drop.description}
            </p>

            {/* Size Selection (if live) */}
            {isLive && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex space-x-2">
                  {drop.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {isComingSoon ? (
                <form onSubmit={handleNotifyMe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Bell className="w-5 h-5" />
                    <span>Notify Me When Available</span>
                  </button>
                </form>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Add to Cart - ${drop.price}
                </button>
              )}

              <button className="w-full py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Share2 className="w-5 h-5 text-gray-600" />
                <span>Share This Drop</span>
              </button>
            </div>

            {/* Drop Stats */}
            {isLive && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Drop Progress</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{drop.soldQuantity} sold</span>
                  <span>{drop.totalQuantity - drop.soldQuantity} remaining</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-black h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(drop.soldQuantity / drop.totalQuantity) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Creator Info */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">About the Creator</h3>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">CT</span>
                </div>
                <div>
                  <p className="font-medium">Charlotte Todd</p>
                  <p className="text-sm text-gray-600">Digital Artist & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropCampaignPage;
