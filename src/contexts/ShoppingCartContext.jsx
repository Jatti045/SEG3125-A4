import React, {createContext, useContext, useEffect, useState} from "react";
import productsData from "../data/products.json";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0)

  useEffect(() => {
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartQuantity(total);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const increaseCartQuantity = (id, by = 1) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + by } : p))
    );
  };

  const decreaseCartQuantity = (id, by = 1) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity - by) } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        cart,
        cartQuantity,
        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
