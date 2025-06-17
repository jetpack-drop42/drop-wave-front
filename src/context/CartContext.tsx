
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
}

interface AddedToBagState {
  isVisible: boolean;
  itemName: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addedToBag: AddedToBagState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
  hideAddedToBag: () => void;
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
  const [addedToBag, setAddedToBag] = useState<AddedToBagState>({
    isVisible: false,
    itemName: ''
  });

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(item => 
        item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...newItem, quantity: 1 }];
    });

    // Show the added to bag overlay
    setAddedToBag({
      isVisible: true,
      itemName: newItem.name
    });
  };

  const removeItem = (id: string, size?: string, color?: string) => {
    setItems(prev => prev.filter(item => 
      !(item.id === id && item.size === size && item.color === color)
    ));
  };

  const updateQuantity = (id: string, quantity: number, size?: string, color?: string) => {
    if (quantity <= 0) {
      removeItem(id, size, color);
      return;
    }
    
    setItems(prev => prev.map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    ));
  };

  const toggleCart = () => setIsOpen(!isOpen);

  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const clearCart = () => setItems([]);

  const hideAddedToBag = () => {
    setAddedToBag({
      isVisible: false,
      itemName: ''
    });
  };

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addedToBag,
      addItem,
      removeItem,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice,
      clearCart,
      hideAddedToBag
    }}>
      {children}
    </CartContext.Provider>
  );
};
