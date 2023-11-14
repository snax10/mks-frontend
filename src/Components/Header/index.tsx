import { CartButton } from "../CartButton";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>
        MKS <span> Sistemas</span>
      </h1>

      <CartButton />
    </HeaderContainer>
  );
}
