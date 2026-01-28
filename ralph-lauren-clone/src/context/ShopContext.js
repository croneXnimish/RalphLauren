"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  // Load data from LocalStorage on startup
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedFavs = localStorage.getItem("favorites");
    const savedUser = localStorage.getItem("user");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // --- AUTH ACTIONS ---
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // --- CART & FAV ACTIONS ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`Added ${product.name} to Cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // NEW: Function to clear cart after checkout
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <ShopContext.Provider
      value={{ 
        cart, 
        favorites, 
        user,        
        login,       
        logout,     
        addToCart, 
        removeFromCart, 
        clearCart, // Expose clearCart
        toggleFavorite 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
