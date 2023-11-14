import { CartItem } from "../CartItem";
import { formatMoneyValue } from "../../utils/currency";
import { useProductStore } from "../../store/product.store";

import {
  ButtonClose,
  CartContainer,
  CartItems,
  CartPrice,
  CartResume,
  CartTitle,
  CartTotal,
  FinishPurchase,
} from "./styles";
import { IconClose } from "../../Icons/IconClose";
import { useToast } from "../../hooks/useToast";

export function Cart() {
  const { toastSuccess } = useToast();

  const { cartItems, isCartActive, setCartItems, setIsCartActive } =
    useProductStore((state) => state);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  return (
    <CartContainer className={`cart ${isCartActive ? "cart--active" : ""}`}>
      <CartTitle>
        Carrinho <br /> de compras
        <ButtonClose
          data-testid="close-cart-button"
          onClick={() => {
            setIsCartActive(false);
          }}
        >
          <IconClose size={38} />
        </ButtonClose>
      </CartTitle>

      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} product={cartItem} />
        ))}
      </CartItems>

      <CartResume>
        <CartTotal>Total:</CartTotal>{" "}
        <CartPrice>{formatMoneyValue(totalPrice.toString())}</CartPrice>
      </CartResume>
      <FinishPurchase
        data-testid="finish-purchase-button"
        disabled={cartItems.length === 0}
        onClick={() => {
          toastSuccess(`
            Compra finalizada com sucesso! 
            Total: ${formatMoneyValue(totalPrice.toString())}
          `);
          setCartItems([]);
          setIsCartActive(false);
        }}
      >
        Finalizar compra
      </FinishPurchase>
    </CartContainer>
  );
}
