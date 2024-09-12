import React, { createContext, useContext, useState, useEffect } from 'react';
import storage from 'utils/storage';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = storage.getItem('cart');
    return savedCart ? savedCart : [];
  });

  useEffect(() => {
    storage.setItem('cart', JSON.stringify(cart)) ;
  }, [cart]);


  const updateCart = (cartUser) => {
    storage.removeItem('cart');
    setCart(cartUser);
  }

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
