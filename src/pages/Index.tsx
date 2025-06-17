
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/pages/Homepage';
import ProductPage from '../components/pages/ProductPage';
import DropCampaignPage from '../components/pages/DropCampaignPage';
import AboutCreatorPage from '../components/pages/AboutCreatorPage';
import CartPage from '../components/pages/CartPage';
import DropsPage from '../components/pages/DropsPage';
import ProductsPage from '../components/pages/ProductsPage';
import Header from '../components/layout/Header';
import CartDrawer from '../components/cart/CartDrawer';
import { CartProvider } from '../context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drops" element={<DropsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/drop/:id" element={<DropCampaignPage />} />
          <Route path="/about" element={<AboutCreatorPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
