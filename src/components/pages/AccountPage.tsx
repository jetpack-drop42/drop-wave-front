
import { Link } from 'react-router-dom';
import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

const AccountPage = () => {
  // TODO: Replace with actual user data when Supabase is integrated
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    joinDate: 'March 2024'
  };

  const handleSignOut = () => {
    console.log('Sign out');
    // TODO: Implement actual sign out with Supabase
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Welcome back, {user.firstName}!
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>

          {/* Account Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <Link
              to="/account/profile"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <User className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">Profile</h3>
              <p className="text-sm text-gray-600 text-center">
                Manage your personal information
              </p>
            </Link>

            <Link
              to="/account/orders"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Package className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">Orders</h3>
              <p className="text-sm text-gray-600 text-center">
                View your order history
              </p>
            </Link>

            <Link
              to="/account/addresses"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <MapPin className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">Addresses</h3>
              <p className="text-sm text-gray-600 text-center">
                Manage shipping addresses
              </p>
            </Link>

            <Link
              to="/account/settings"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Settings className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600 text-center">
                Account preferences
              </p>
            </Link>
          </div>

          {/* Account Summary */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Account Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                <p className="text-lg font-semibold text-gray-900">{user.joinDate}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Saved Addresses</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
