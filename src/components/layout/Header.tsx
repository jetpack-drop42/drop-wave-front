
import { ShoppingBag, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // TODO: Replace with actual auth state when Supabase is integrated
  const isAuthenticated = false;
  const user = null;

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
            <Link to="/drops" className="text-gray-700 hover:text-black transition-colors">
              Drops
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/account"
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Account</span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
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
