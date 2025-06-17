
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from '../components/pages/Homepage';
import ProductPage from '../components/pages/ProductPage';
import DropCampaignPage from '../components/pages/DropCampaignPage';
import AboutCreatorPage from '../components/pages/AboutCreatorPage';
import CartPage from '../components/pages/CartPage';
import Header from '../components/layout/Header';
import CartDrawer from '../components/cart/CartDrawer';
import { CartProvider } from '../context/CartContext';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/drop/:id" element={<DropCampaignPage />} />
            <Route path="/about" element={<AboutCreatorPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <CartDrawer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default Index;
