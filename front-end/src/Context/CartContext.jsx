import React, {useState, createContext, useEffect, Children} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
  const [cartItems, setCartItems] = useState([]);

  useEffect(() =>{
    const storedCart = localStorage.getItem("cartItems");
    if(storedCart){
      setCartItems(JSON.parse(storedCart));
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  const addToCart = (product) =>{
    setCartItems(prevItems => [...prevItems, product]);
  }

  const removeFromCart = (productId)=>{
    setCartItems(prevItems => prevItems.filter(cartItems => cartItems.id !== productId))
  }

  const clearCart = () =>{
    setCartItems([]);
  }

  return (
    <CartContext.Provider value = {{cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;