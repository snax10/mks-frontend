import { render, screen } from "@testing-library/react";
import { ProductCard } from ".";
import { Product } from "../../store/product.store";

const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  price: "999",
  photo: "test.jpg",
  description: "This is a test product",
  brand: "Test Brand",
  createdAt: "2021-09-01T00:00:00.000Z",
  updatedAt: "2021-09-01T00:00:00.000Z",
};

const renderProductCard = () => {
  render(<ProductCard product={mockProduct} />);
};

describe("ProductItem", () => {
  it("should render ProductCard", () => {
    renderProductCard();

    const productCard = screen.getByTestId("product-card");

    expect(productCard).toBeInTheDocument();
  });
  it("renders product information correctly", () => {
    renderProductCard();

    const productName = screen.getByText(new RegExp(mockProduct.name));
    const productPrice = screen.getByText(new RegExp(mockProduct.price));
    const productDescription = screen.getByText(mockProduct.description);
    const image = screen.getByRole("img");

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.photo);
  });
});
