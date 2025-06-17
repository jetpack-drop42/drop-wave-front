
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">CT</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Charlotte Todd
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unique designs and limited drops. Express yourself with pieces that tell your story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/drop/1"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Shop Latest Drop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              About the Creator
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Limited Edition Drops</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div>Free Shipping Over $50</div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div>Worldwide Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
