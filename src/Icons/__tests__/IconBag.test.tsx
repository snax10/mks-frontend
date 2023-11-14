import { render } from "@testing-library/react";
import { IconBag } from "../IconBag";

describe("IconBag", () => {
  it("should render correctly", () => {
    const { container } = render(<IconBag />);
    expect(container).toBeInTheDocument();
  });
});
