import { render } from "@testing-library/react";
import { IconCart } from "../IconCart";

describe("IconCart", () => {
  it("should render correctly", () => {
    const { container } = render(<IconCart />);
    expect(container).toBeInTheDocument();
  });
});
