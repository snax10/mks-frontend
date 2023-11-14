import { render, screen } from "@testing-library/react";
import { useProductStore } from "../../store/product.store";
import { CartButton } from ".";

jest.mock("../../store/product.store");

describe("CartButton", () => {
  it("should render the cart items count", () => {
    (useProductStore as unknown as jest.Mock).mockReturnValue({
      cartItems: [{ id: 1, name: "Product 1", price: 10 }],
      isCartActive: false,
      setIsCartActive: jest.fn(),
    });

    render(<CartButton />);
    const cartStatus = screen.getByTestId("cart-status");

    expect(cartStatus).toHaveTextContent("1");
  });
});
