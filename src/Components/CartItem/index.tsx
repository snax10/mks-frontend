import { formatMoneyValue } from "../../utils/currency";
import { ItemCart, useProductStore } from "../../store/product.store";
import {
  CartButtonsContainer,
  CartItemContainer,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  IconCloseCart,
  QuantityButton,
  QuantityCounter,
  RemoveItemButton,
} from "./styles";
import { useState } from "react";

interface CartItemProps {
  product: ItemCart;
}

export function CartItem({ product }: CartItemProps) {
  const { name, price, id, photo } = product;

  const { cartItems, setCartItems, setIsCartActive } = useProductStore();

  const [quantity, setQuantity] = useState(1);

  const handleRemoveItem = () => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);

    if (newCartItems.length === 0) {
      setIsCartActive(false);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <CartItemContainer data-testid="cart-item">
      <CartItemImage src={photo} alt={name} data-testid="image" />

      <CartItemName>{name}</CartItemName>
      <div
        style={{
          marginTop: "-20px",
        }}
      >
        <label
          style={{
            fontSize: "10px",
            fontWeight: 400,
            fontFamily: "Montserrat",
            color: "#000000",
          }}
        >
          qtd:
        </label>
        <CartButtonsContainer>
          <QuantityButton
            style={{
              borderRight: "1px solid #BFBFBF",
            }}
            onClick={handleDecreaseQuantity}
          >
            -
          </QuantityButton>

          <QuantityCounter>{quantity}</QuantityCounter>

          <QuantityButton
            style={{
              borderLeft: "1px solid #BFBFBF",
            }}
            onClick={handleIncreaseQuantity}
          >
            +
          </QuantityButton>
        </CartButtonsContainer>
      </div>

      <CartItemPrice>{formatMoneyValue(price)}</CartItemPrice>

      <RemoveItemButton data-testid="remove-button" onClick={handleRemoveItem}>
        <IconCloseCart size={20} />
      </RemoveItemButton>
    </CartItemContainer>
  );
}
