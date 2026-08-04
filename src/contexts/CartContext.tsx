import { createContext } from 'react';
import type { ProductCart } from './CartProvider';
import type { Product } from '../interfaces/product';

interface CartContextType {
    cart: ProductCart[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    incrementToCart: (product: ProductCart) => void;
    decrementToCart: (product: ProductCart) => void;
}

export const CartContext = createContext({} as CartContextType);



