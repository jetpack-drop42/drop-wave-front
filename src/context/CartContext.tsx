
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(item => 
        item.id === newItem.id && item.size === newItem.size
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (id: string, size?: string) => {
    setItems(prev => prev.filter(item => 
      !(item.id === id && item.size === size)
    ));
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(id, size);
      return;
    }
    
    setItems(prev => prev.map(item =>
      item.id === id && item.size === size
        ? { ...item, quantity }
        : item
    ));
  };

  const toggleCart = () => setIsOpen(!isOpen);

  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
