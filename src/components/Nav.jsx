import React, { useContext } from "react";
import SideNav from "./SideNav";
import Cart from "./Cart";
import NavContext from "../assets/Context/NavContext";
import CartContext from "../assets/Context/CartContext";

const Nav = () => {
  const { isCartOpen, setIsCartOpen, isNavOpen, setIsNavOpen } =
    useContext(NavContext);
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <nav className="flex justify-between px-6 py-4 mx-auto sm:border-b sm:py-5 md:py-10 sm:container">
        <div className="flex items-center gap-4 sm:gap-12">
          <button
            className="lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <img src="./src/assets/icons/icon-menu.svg" alt="Hamburger menu" />
          </button>
          <img src="./src/assets/logo.svg" alt="Logo" />
          <ul className="hidden font-semibold md:gap-8 lg:flex text-neutral-grayish-blue">
            <li className="relative cursor-pointer hover:before:bg-primary-orange hover:text-black hover:before:absolute hover:before:top-[4.5rem] hover:before:h-1 hover:before:inset-0">
              Collections
            </li>
            <li className="relative cursor-pointer hover:before:bg-primary-orange hover:text-black hover:before:absolute hover:before:top-[4.5rem] hover:before:h-1 hover:before:inset-0">
              Men
            </li>
            <li className="relative cursor-pointer hover:before:bg-primary-orange hover:text-black hover:before:absolute hover:before:top-[4.5rem] hover:before:h-1 hover:before:inset-0">
              Women
            </li>
            <li className="relative cursor-pointer hover:before:bg-primary-orange hover:text-black hover:before:absolute hover:before:top-[4.5rem] hover:before:h-1 hover:before:inset-0">
              About
            </li>
            <li className="relative cursor-pointer hover:before:bg-primary-orange hover:text-black hover:before:absolute hover:before:top-[4.5rem] hover:before:h-1 hover:before:inset-0">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:gap-10">
          <button
            className={`relative`}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <img
              className={`${isCartOpen ? "brightness-0" : ""}`}
              src="./src/assets/icons/icon-cart.svg"
              alt="Cart icon"
            />
            {cart.length > 0 && (
              <span
                className={`absolute bg-primary-orange -top-1 -right-1 rounded-full min-h-[.85rem] min-w-[1.1rem]  text-white text-[.65rem] z-10 text-center font-extrabold`}
              >
                {cart.length}
              </span>
            )}
          </button>
          <img
            className="rounded-full cursor-pointer size-6 md:size-9 lg:size-12 hover:border-2 hover:border-primary-orange"
            src="./src/assets/images/image-avatar.png"
            alt="User Avatar"
          />
        </div>
      </nav>
      <SideNav toggleNav={setIsNavOpen} isNavOpen={isNavOpen} />
      <Cart
        isCartOpen={isCartOpen}
        toggleCart={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default Nav;
