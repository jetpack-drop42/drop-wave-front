
import { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import DropCard from '../product/DropCard';
import ProductCard from '../product/ProductCard';
import { Clock, Star } from 'lucide-react';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('drops');

  const featuredDrops = [
    {
      id: '1',
      title: 'Abstract Shape Print',
      image: '/lovable-uploads/dd78b53a-3b2d-49aa-afde-210881370822.png',
      status: 'coming-soon',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '2',
      title: 'Good Energy T-Shirt',
      image: '/lovable-uploads/dd78b53a-3b2d-49aa-afde-210881370822.png',
      status: 'live',
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      price: 28,
    },
  ];

  const allProducts = [
    {
      id: '3',
      name: 'Connected Hoodie',
      price: 45,
      image: '/lovable-uploads/dd78b53a-3b2d-49aa-afde-210881370822.png',
      isNew: false,
    },
    {
      id: '4',
      name: 'Flower Tote Bag',
      price: 20,
      image: '/lovable-uploads/dd78b53a-3b2d-49aa-afde-210881370822.png',
      isNew: true,
    },
    {
      id: '5',
      name: 'Beach Sunset Tee',
      price: 28,
      image: '/lovable-uploads/38c9f9f3-e155-44d2-9677-f296e1781068.png',
      isNew: true,
    },
    {
      id: '6',
      name: 'Mountain Line Tee',
      price: 28,
      image: '/lovable-uploads/38c9f9f3-e155-44d2-9677-f296e1781068.png',
      isNew: false,
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
              {featuredDrops.map((drop) => (
                <DropCard key={drop.id} drop={drop} />
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.slice(0, 4).map((product) => (
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
              <h2 className="text-3xl font-bold mb-4">Summer Vibes Collection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our curated collection of summer essentials, featuring vibrant designs 
                and comfortable materials perfect for the season.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.filter(product => ['5', '6'].includes(product.id)).map((product) => (
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
