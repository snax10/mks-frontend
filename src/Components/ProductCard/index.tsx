import { ItemCart, Product, useProductStore } from "../../store/product.store";
import { formatMoneyValue } from "../../utils/currency";
import { IconBag } from "../../Icons/IconBag";
import {
  AddCartButton,
  CardDescription,
  CardImage,
  CardInfos,
  CardPrice,
  CardTitle,
  ProductCardContainer,
} from "./styles";

interface ProductItemProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductItemProps) => {
  const { photo, name, price, description } = product;

  const { cartItems, setCartItems, setIsCartActive } = useProductStore();

  const handleAddToCart = () => {
    const newItem: ItemCart = { ...product, quantity: 1 };
    setCartItems([...cartItems, newItem]);
    setIsCartActive(true);
  };

  return (
    <ProductCardContainer data-testid="product-card">
      <CardImage src={photo} alt={name} />

      <CardInfos>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{formatMoneyValue(price)}</CardPrice>
      </CardInfos>

      <CardDescription>{description}</CardDescription>

      <AddCartButton onClick={handleAddToCart} data-testid="button-add">
        <IconBag size={16} />
        Comprar
      </AddCartButton>
    </ProductCardContainer>
  );
};
