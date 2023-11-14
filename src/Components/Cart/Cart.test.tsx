import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./index";
import { useProductStore } from "../../store/product.store";

jest.mock("../../store/product.store");

describe("Cart", () => {
  beforeEach(() => {
    (useProductStore as unknown as jest.Mock).mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: "Product 1",
          price: "10.00",
          image: "product1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          price: "20.00",
          image: "product2.jpg",
        },
      ],
      isCartActive: true,
      setCartItems: jest.fn(),
      setIsCartActive: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the cart with the correct items and total price", () => {
    render(<Cart />);

    const product1Name = screen.getByText("Product 1");
    const product2Name = screen.getByText("Product 2");
    const totalText = screen.getByText("Total:");
    const totalPrice = screen.getByText("R$ 30");

    expect(product1Name).toBeInTheDocument();
    expect(product2Name).toBeInTheDocument();
    expect(totalText).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });

  it("closes the cart when the close button is clicked", () => {
    render(<Cart />);

    const closeButton = screen.getByTestId("close-cart-button");

    fireEvent.click(closeButton);

    expect(useProductStore().setIsCartActive).toHaveBeenCalledWith(false);
  });

  it("finishes the purchase and clears the cart when the finish purchase button is clicked", () => {
    render(<Cart />);

    const finishPurchaseButton = screen.getByTestId("finish-purchase-button");

    fireEvent.click(finishPurchaseButton);

    expect(useProductStore().setCartItems).toHaveBeenCalledWith([]);
    expect(useProductStore().setIsCartActive).toHaveBeenCalledWith(false);
  });
});
