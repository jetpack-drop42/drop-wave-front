
import { ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getTotalItems, toggleCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">CT</span>
            </div>
            <span className="text-xl font-bold">Charlotte Todd</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Featured Drops
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Browse
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Collection 1
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
