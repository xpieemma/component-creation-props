import { useMemo, useState, useCallback } from "react";
import type { Product, AlertType } from "../../index"; 

export const useCart = (
  products: Product[], 
  notify: (type: AlertType, msg: string) => void
) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, id) => {
      const p = products.find(item => item.id === id);
      return sum + (p?.price || 0);
    }, 0);
  }, [cartItems, products]);

  const addToCart = useCallback((productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (!product.inStock) {
      notify('error', `${product.name} is out of stock!`);
      return;
    }
    setCartItems(prev => [...prev, productId]);
    notify('success', `${product.name} added!`);
  }, [products, notify]);

  const removeOne = useCallback((productId: string) => {
    setCartItems(prev => {
      const lastIndex = prev.lastIndexOf(productId);
      if (lastIndex === -1) return prev;
      const newItems = [...prev];
      newItems.splice(lastIndex, 1);
      return newItems;
    });
  }, []);

  const removeAll = useCallback((productId: string) => {
    setCartItems(prev => prev.filter(id => id !== productId));
  }, []);

  return { cartItems, addToCart, removeOne, removeAll, totalPrice };
};