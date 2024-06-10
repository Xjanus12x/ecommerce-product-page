import React, { useState } from "react";

const CartContext = React.createContext({
  addToCartCount: 0,
  setAddToCartCount: () => {},
  cart: [],
  setCart: () => {},
});

export function CartContextProvider({ children }) {
  let [addToCartCount, setAddToCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider
      value={{ addToCartCount, setAddToCartCount, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
