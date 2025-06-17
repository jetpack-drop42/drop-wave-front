
import { Clock, Bell, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../ui/CountdownTimer';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types';

const PremiumTeeDropPage = () => {
  const dropStartDate = new Date(Date.now() + 8 * 60 * 60 * 1000);

  const upcomingProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Cotton Tee - Black',
      price: 28,
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      description: 'Ultra-soft premium cotton t-shirt in classic black. Perfect for everyday wear.',
      isNew: true,
    },
    {
      id: '9',
      name: 'Premium Cotton Tee - White',
      price: 28,
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      description: 'Clean white premium cotton tee with superior comfort and fit.',
      isNew: true,
    },
    {
      id: '10',
      name: 'Premium Cotton Tee - Gray',
      price: 28,
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      description: 'Versatile gray premium cotton tee that goes with everything.',
      isNew: true,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Drop Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="w-3 h-3 mr-2" />
            AVAILABLE SOON
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Cotton Tee
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Our softest, most comfortable tee yet. Made with premium cotton for the perfect fit and feel.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Drops in:</span>
              <CountdownTimer targetDate={dropStartDate} />
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="text-sm">Limited Edition</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png"
              alt="Premium Cotton Tee Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Coming Soon Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Available Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Be the First to Know</h3>
          <p className="text-gray-600 mb-6">Get notified when this drop goes live. Limited quantities will be available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Get Notified</span>
            </button>
            <Link
              to="/drops"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View All Drops
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumTeeDropPage;
