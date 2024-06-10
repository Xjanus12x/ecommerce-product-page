import { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ProductPreview from "./components/ProductPreview";
import CartContext from "./assets/Context/CartContext";
import { NavContextProvider } from "./assets/Context/NavContext";

function App() {
  let { addToCartCount, setAddToCartCount, cart, setCart } =
    useContext(CartContext);

  return (
    <>
      <NavContextProvider>
        <Nav />
      </NavContextProvider>
      <main>
        <div className="grid gap-4 lg:container lg:mx-auto sm:gap-8 sm:py-4 sm:pb-16 lg:grid-cols-2 lg:px-24 lg:py-24 lg:gap-20 lg:items-center">
          <ProductPreview/>
          <section className="p-6 space-y-5 lg:px-10 md:container">
            <section className="space-y-2 sm:space-y-4">
              <h1 className="text-xs font-bold tracking-widest uppercase text-neutral-dark-grayish-blue sm:text-sm">
                Sneaker Company
              </h1>
              <div className="space-y-5 sm:space-y-10">
                <h2 className="text-3xl font-extrabold text-neutral-very-dark-blue sm:text-5xl">
                  Fall Limited Edition Sneakers
                </h2>
                <p className=" text-neutral-dark-grayish-blue sm:max-w-[50ch]">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer
                </p>
              </div>
            </section>

            <section className="flex items-center sm:block">
              <div className="flex items-center gap-4">
                <p className="text-3xl font-extrabold">$125.00</p>
                <span className="px-2 py-1 text-sm font-semibold text-white rounded-md bg-neutral-very-dark-blue">
                  50%
                </span>
              </div>

              <p className="ml-auto font-bold line-through text-neutral-dark-grayish-blue sm:ml-0">
                $250.00
              </p>
            </section>

            <section className="grid gap-4 lg:flex lg:max-w-sm">
              <div className="flex items-center justify-between px-6 py-3 rounded-md bg-neutral-light-grayish-blue lg:grow">
                <button
                  onClick={() => {
                    if (addToCartCount !== 0)
                      setAddToCartCount(--addToCartCount);
                  }}
                >
                  <img
                    src="./src/assets/icons/icon-minus.svg"
                    alt="Decrease button"
                  />
                </button>

                <span>{addToCartCount}</span>

                <button
                  onClick={() => {
                    setAddToCartCount(++addToCartCount);
                  }}
                >
                  <img
                    src="./src/assets/icons/icon-plus.svg"
                    alt="Increment button"
                  />
                </button>
              </div>

              <button
                className="flex items-center justify-center gap-4 px-6 py-3 font-bold rounded-md shadow-xl bg-primary-orange hover:bg-primary-pale-orange shadow-primary-pale-orange lg:grow-[2] lg:py-4"
                onClick={() => {
                  if (addToCartCount === 0) return;
                  const order = {
                    price: 125.0,
                    totalPrice: 125.0 * addToCartCount,
                    numberOfItems: addToCartCount,
                  };

                  const items = [...cart, order];
                  setCart(items);
                  setAddToCartCount(0);
                }}
              >
                <img
                  className="brightness-0 size-4"
                  src="./src/assets/icons/icon-cart.svg"
                  alt="Cart icon"
                />
                <p>Add to cart</p>
              </button>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
