
import HeroSection from '../sections/HeroSection';
import DropCard from '../product/DropCard';
import ProductCard from '../product/ProductCard';
import { Drop, Product } from '../../types';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Accessories', 'Home & Living', 'Art & Prints'];

  // Mock data for drops - matching the mockups
  const mockDrops: Drop[] = [
    {
      id: 'premium-tee',
      title: 'Premium Cotton Tee',
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      status: 'coming-soon' as const,
      startDate: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
    },
    {
      id: 'water-bottle',
      title: 'Water Bottle Collection',
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      status: 'live' as const,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 37 * 60 * 1000), // 2d 14h 37m from now
      price: 22
    }
  ];

  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Cotton Tee',
      price: 28,
      image: '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      description: 'Soft premium cotton t-shirt with comfortable fit',
      isNew: true,
      category: 'Clothing',
    },
    {
      id: '2',
      name: 'Stainless Steel Water Bottle',
      price: 22,
      image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      description: 'Durable stainless steel water bottle for daily hydration',
      isNew: false,
      category: 'Accessories',
    },
    {
      id: '3',
      name: 'Vintage Poster Print',
      price: 15,
      image: '/lovable-uploads/a5baf921-1082-4125-8cc8-ccb252062a6b.png',
      description: 'Classic vintage-style poster for wall decoration',
      isNew: true,
      category: 'Art & Prints',
    },
    {
      id: '4',
      name: 'Canvas Wall Art',
      price: 35,
      image: '/lovable-uploads/b0450473-ea7d-4288-a913-596c20960ef6.png',
      description: 'Beautiful canvas print for modern home decor',
      isNew: false,
      category: 'Art & Prints',
    },
    {
      id: '5',
      name: 'Classic Logo Tee',
      price: 25,
      image: '/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png',
      description: 'Timeless design t-shirt with classic logo',
      isNew: false,
      category: 'Clothing',
    },
    {
      id: '6',
      name: 'Coffee Mug Set',
      price: 18,
      image: '/lovable-uploads/d9f0f475-294a-4fe4-83c0-fd9f0e3d324b.png',
      description: 'Ceramic coffee mug perfect for morning coffee',
      isNew: true,
      category: 'Home & Living',
    },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Drops Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Limited-time Drops</h2>
            </div>
            <Link to="/drops" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockDrops.map((drop) => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'All' ? 'Featured Products' : selectedCategory}
            </h2>
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
            {filteredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length > 3 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {filteredProducts.slice(3, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
