
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/layout/Header';
import Homepage from './components/pages/Homepage';
import ProductsPage from './components/pages/ProductsPage';
import ProductPage from './components/pages/ProductPage';
import DropsPage from './components/pages/DropsPage';
import DropCampaignPage from './components/pages/DropCampaignPage';
import AboutCreatorPage from './components/pages/AboutCreatorPage';
import CartPage from './components/pages/CartPage';
import CheckoutSuccessPage from './components/pages/CheckoutSuccessPage';
import NotFound from './pages/NotFound';
import AddedToBagOverlay from './components/cart/AddedToBagOverlay';

function AppContent() {
  const { addedToBag, hideAddedToBag, getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/drops" element={<DropsPage />} />
        <Route path="/drop/:id" element={<DropCampaignPage />} />
        <Route path="/about" element={<AboutCreatorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <AddedToBagOverlay
        isVisible={addedToBag.isVisible}
        onClose={hideAddedToBag}
        itemName={addedToBag.itemName}
        cartCount={getTotalItems()}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
