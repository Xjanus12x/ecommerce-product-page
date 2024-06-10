import React from "react";
import Portal from "./Portal";

const Cart = ({ isCartOpen, toggleCart, cart, setCart }) => {
  if (!isCartOpen) return null;

  const numberOfItemsInCart = cart.length;

  return (
    <Portal>
      <div
        onClick={(e) => {
          if (e.target.classList.contains("absolute")) toggleCart(false);
        }}
        className="absolute inset-0 lg:px-32"
      >
        <div className="mx-2 mt-[17%] overflow-y-auto bg-white rounded-lg shadow-2xl max-h-80 lg:mt-[6%] lg:max-w-sm lg:ml-auto">
          <header className="px-5 pt-4 pb-6 border-b">
            <h2 className="font-bold">Cart</h2>
          </header>
          <div
            className={`grid ${
              numberOfItemsInCart > 0 ? "p-6 gap-7" : "text-center py-24"
            }`}
          >
            {numberOfItemsInCart > 0 ? (
              <>
                {cart.map((item, i) => {
                  return (
                    <article
                      className="flex items-center justify-between"
                      key={i}
                    >
                      <img
                        className="rounded-md size-14"
                        src="./src/assets/images/image-product-1-thumbnail.jpg"
                        alt=""
                      />
                      <div className="text-neutral-dark-grayish-blue">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>
                          <span>
                            ${item.price} x {item.numberOfItems}
                          </span>

                          <span className="font-bold text-neutral-very-dark-blue">
                            {" "}
                            ${item.totalPrice}
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setCart(
                            cart.filter((_, cartIndex) => i !== cartIndex)
                          );
                        }}
                      >
                        <img
                          className="hover:brightness-0"
                          src="./src/assets/icons/icon-delete.svg"
                          alt="Remove order icon"
                        />
                      </button>
                    </article>
                  );
                })}
                <button className="px-6 py-4 font-bold rounded-lg bg-primary-orange">
                  Checkout
                </button>
              </>
            ) : (
              <p className="font-bold text-neutral-dark-grayish-blue">
                Your cart is empty
              </p>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Cart;
