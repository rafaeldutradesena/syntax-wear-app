import { useState } from "react";
import type { Product } from "../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>([]);

  // - adicionar um produto ao carrinho
  function add(product: Product): void {
    const productExisInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    let newCart;

    if (productExisInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
  }

  // - remover um produto do carrinho
  function remove(productId: number): void {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
  }

  // - incrementar a quantidade de um produto no carrinho

  // - decrementar a quantidade de um produto no carrinho

  return <CartContext.Provider value={{
    cart,
    add,
    remove,
  }}>{children}</CartContext.Provider>;
};
