/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export interface ItemCart {
  id: number;
  photo: string;
  name: string;
  price: string;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductStore {
  products: Product[];
  cartItems: ItemCart[];
  isCartActive: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setProducts: (products: Product[]) => void;
  setCartItems: (cartItems: ItemCart[]) => void;
  setIsCartActive: (isCartActive: boolean) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  cartItems: [],
  isCartActive: false,
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setProducts: (products) => set({ products }),
  setCartItems: (cartItems) => set({ cartItems }),
  setIsCartActive: (isCartActive) => set({ isCartActive }),
}));
