import { useProductStore } from "../../store/product.store";
import { CartButtonContainer, CartStatus } from "./styles";
import { IconCart } from "../../Icons/IconCart";

export function CartButton() {
  const { cartItems, isCartActive, setIsCartActive } = useProductStore();

  return (
    <CartButtonContainer
      data-testid="cart-button"
      onClick={() => {
        setIsCartActive(!isCartActive);
      }}
    >
      <IconCart size={19} />
      <CartStatus data-testid="cart-status">
        {cartItems.length > 0 ? cartItems.length : 0}
      </CartStatus>
    </CartButtonContainer>
  );
}
