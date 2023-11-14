import { useQuery } from "react-query";
import { fetchProducts, fetchProductsParams } from "../services/fetchProducts";
import { ProductCard } from "../Components/ProductCard";
import { Skeleton } from "@mui/material";
import { ProductsContainer } from "./styles";

export const Products = () => {
  const params: fetchProductsParams = {
    page: 1,
    rows: 8,
  };

  const { data: products, isLoading } = useQuery("products", () =>
    fetchProducts(params).then((response) => response.products)
  );

  const skeletonItems = Array.from({ length: 8 }).map((_, index) => (
    <Skeleton
      data-testid="product-skeleton"
      key={index}
      width={250}
      height={450}
    />
  ));

  return (
    <ProductsContainer>
      {isLoading ? (
        <>{skeletonItems}</>
      ) : (
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            data-testid="product-card"
          />
        ))
      )}
    </ProductsContainer>
  );
};
