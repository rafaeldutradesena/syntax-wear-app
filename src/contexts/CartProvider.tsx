import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

const localStorageKey = "@SyntaxWear:cart";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const cartFromLocalStorage = localStorage.getItem(localStorageKey);
    return cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart))
  }, [cart]);

  // - adicionar um produto ao carrinho
  function addToCart(product: Product): void {
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
  function removeFromCart(productId: number): void {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
  }

  // - incrementar a quantidade de um produto no carrinho
  function incrementToCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity + 1);
  }

  // - decrementar a quantidade de um produto no carrinho
  function decrementToCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity - 1);
  }

  function updateProductQuantity(
    product: ProductCart,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return;
    const productExisInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    if (!productExisInCart) return;

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart,
    );

    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementToCart,
        decrementToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
