import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header component", () => {
  it("should render the company name", () => {
    render(<Header />);
    const companyName = screen.getByText(/MKS/);

    expect(companyName).toBeInTheDocument();
  });

  it("should render the cart button", () => {
    render(<Header />);
    const cartButton = screen.getByTestId("cart-button");
    expect(cartButton).toBeInTheDocument();
  });
});
