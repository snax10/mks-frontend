import axios from "axios";
import { Product } from "../store/product.store";

export interface fetchProductsParams {
  page: number;
  rows: number;
  sortBy?: string;
  orderBy?: string;
}

export interface ApiResponse {
  products: Product[];
}

export const fetchProducts = async ({
  page = 1,
  rows = 5,
  sortBy = "id",
  orderBy = "ASC",
}: fetchProductsParams): Promise<ApiResponse> => {
  try {
    const response = await axios.get(
      `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
    );
    const products = response.data;
    return products;
  } catch (error) {
    console.error(error);
    return { products: [] };
  }
};
