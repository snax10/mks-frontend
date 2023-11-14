import { render } from "@testing-library/react";
import { IconClose } from "../IconClose";

describe("IconClose", () => {
  it("should render correctly", () => {
    const { container } = render(<IconClose />);
    expect(container).toBeInTheDocument();
  });
});
