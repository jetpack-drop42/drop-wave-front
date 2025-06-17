
import { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import DropCard from '../product/DropCard';
import ProductCard from '../product/ProductCard';
import { Drop, Product } from '../../types';
import { Clock, Star } from 'lucide-react';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('drops');

  // Mock data for drops - matching the mockups
  const mockDrops: Drop[] = [
    {
      id: '1',
      title: 'Abstract Pattern Tee',
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      status: 'coming-soon' as const,
      startDate: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
    },
    {
      id: '2',
      title: 'Magic Water Bottle',
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      status: 'live' as const,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 37 * 60 * 1000), // 2d 14h 37m from now
      price: 22
    }
  ];

  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Abstract Pattern Tee',
      price: 28,
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      description: 'Stylish blue t-shirt with abstract geometric pattern',
      isNew: true,
    },
    {
      id: '2',
      name: 'Make Your Magic Water Bottle',
      price: 22,
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      description: 'Motivational CamelBak water bottle with inspiring design',
      isNew: false,
    },
    {
      id: '3',
      name: 'Neon Sign Wall Art',
      price: 45,
      image: '/lovable-uploads/a5baf921-1082-4125-8cc8-ccb252062a6b.png',
      description: 'Motivational neon sign poster - "This is the sign you\'ve been looking for"',
      isNew: true,
    },
    {
      id: '4',
      name: 'Dream Believe Achieve Canvas',
      price: 38,
      image: '/lovable-uploads/b0450473-ea7d-4288-a913-596c20960ef6.png',
      description: 'Inspirational beach sunset canvas wall art',
      isNew: false,
    },
    {
      id: '5',
      name: 'Modern Logo Tee',
      price: 25,
      image: '/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png',
      description: 'Clean white t-shirt with modern geometric logo design',
      isNew: false,
    },
    {
      id: '6',
      name: 'Karaoke Club Shot Glass',
      price: 12,
      image: '/lovable-uploads/d9f0f475-294a-4fe4-83c0-fd9f0e3d324b.png',
      description: 'Fun karaoke club themed shot glass for parties',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('drops')}
            className={`pb-4 px-1 text-lg font-medium transition-colors relative ${
              activeTab === 'drops'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Featured Drops
          </button>
          <button
            onClick={() => setActiveTab('browse')}
            className={`pb-4 px-1 text-lg font-medium transition-colors relative ${
              activeTab === 'browse'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => setActiveTab('collection')}
            className={`pb-4 px-1 text-lg font-medium transition-colors relative ${
              activeTab === 'collection'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Collection 1
          </button>
        </div>

        {/* Featured Drops Section */}
        {activeTab === 'drops' && (
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Limited-time Drops</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {mockDrops.map((drop) => (
                <DropCard key={drop.id} drop={drop} />
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">All Products</h2>
            <div className="grid grid-cols-3 gap-6">
              {allProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Browse Section */}
        {activeTab === 'browse' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Products</h2>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Collection Section */}
        {activeTab === 'collection' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Motivational Collection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our curated collection of motivational designs, featuring inspiring messages 
                and uplifting artwork perfect for daily motivation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.filter(product => ['2', '3', '4'].includes(product.id)).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
