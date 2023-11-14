import { render, screen } from "@testing-library/react";
import { Footer } from ".";
// import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should render the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(
      /MKS sistemas © Todos os direitos reservados/i
    );
    expect(footerText).toBeInTheDocument();
  });
});
