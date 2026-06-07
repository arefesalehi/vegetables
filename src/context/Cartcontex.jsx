'use client'
import { createContext, useState, useContext , useEffect} from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState([]);

useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(localCart);
  }, []);

    const updateCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  


  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen , openCart , closeCart , cart, setCart: updateCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
