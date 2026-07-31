import IconCart from "@/assets/images/icon-cart.png";
import React from "react";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
      </button>

      <div
        className={`${cartIsOpen ? "w-full bg-black/70" : "w-0"} fixed top-0 bottom-0 left-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <div
          className={`${cartIsOpen ? "w-75 md:w-106" : "w-0"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </>
  );
};
