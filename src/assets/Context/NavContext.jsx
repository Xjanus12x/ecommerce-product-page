import React, { useState, useEffect } from "react";

const NavContext = React.createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  isNavOpen: false,
  setIsNavOpen: () => {},
});

export function NavContextProvider({ children }) {
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (isNavOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen, isCartOpen]);
  return (
    <NavContext.Provider
      value={{ isCartOpen, setIsCartOpen, isNavOpen, setIsNavOpen }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavContext;
