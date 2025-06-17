
import { Clock, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../ui/CountdownTimer';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types';

const WaterBottleDropPage = () => {
  const dropEndDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 37 * 60 * 1000);

  const dropProducts: Product[] = [
    {
      id: '2',
      name: 'Stainless Steel Water Bottle',
      price: 22,
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      description: 'Premium stainless steel water bottle with insulation. Perfect for staying hydrated on the go.',
      isNew: true,
    },
    {
      id: '7',
      name: 'Water Bottle - Matte Black',
      price: 25,
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      description: 'Sleek matte black finish water bottle with premium build quality.',
      isNew: true,
    },
    {
      id: '8',
      name: 'Water Bottle - Rose Gold',
      price: 28,
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      description: 'Elegant rose gold water bottle for style-conscious hydration.',
      isNew: true,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Drop Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            DROP IS LIVE!
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Water Bottle Collection
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay hydrated in style with our premium water bottle collection. Limited quantities available.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Ends in:</span>
              <CountdownTimer targetDate={dropEndDate} />
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="text-sm">Limited Edition</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png"
              alt="Water Bottle Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dropProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Out!</h3>
          <p className="text-gray-600 mb-6">This drop ends soon. Get yours before they're gone forever.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Now</span>
            </Link>
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

export default WaterBottleDropPage;
