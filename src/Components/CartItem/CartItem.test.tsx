import { render, screen, fireEvent } from "@testing-library/react";
import { CartItem } from ".";

const mockProduct = {
  id: 1,
  name: "Test Product",
  price: "100",
  photo: "http://localhost/test-photo.jpg",
  description: "Test description",
  quantity: 1,
};

const renderCartItem = () => {
  render(<CartItem product={mockProduct} />);
};

describe("CartItem", () => {
  it("renders the component", () => {
    renderCartItem();

    const cartItem = screen.getByTestId("cart-item");

    expect(cartItem).toBeInTheDocument();
  });
  it("renders the product name, quantity, price and remove button", () => {
    renderCartItem();

    const productName = screen.getByText(mockProduct.name);
    const productQuantity = screen.getByText("qtd:");
    const productPrice = screen.getByText(new RegExp(mockProduct.price));
    const image = screen.getByTestId("image");
    const removeButton = screen.getByTestId("remove-button");

    expect(productName).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(image).toHaveProperty("src", mockProduct.photo);
    expect(image).toHaveProperty("alt", mockProduct.name);
    expect(removeButton).toBeInTheDocument();
  });

  it("decreases the quantity when the '-' button is clicked", () => {
    renderCartItem();

    const decreaseButton = screen.getByText("-");
    const quantityCounter = screen.getByText("1");

    fireEvent.click(decreaseButton);

    expect(quantityCounter).toHaveTextContent("1");
  });

  it("increases the quantity when the '+' button is clicked", () => {
    renderCartItem();

    const increaseButton = screen.getByText("+");
    const quantityCounter = screen.getByText("1");

    fireEvent.click(increaseButton);

    expect(quantityCounter).toHaveTextContent("2");
  });

  it("removes the item from the cart when the remove button is clicked", () => {
    renderCartItem();

    const removeButton = screen.getByTestId("remove-button");

    fireEvent.click(removeButton);

    expect(removeButton).toBeInTheDocument();
  });
});
