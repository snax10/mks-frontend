import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./Products";

const queryClient = new QueryClient();

jest.mock("../services/fetchProducts", () => ({
  fetchProducts: jest.fn(() =>
    Promise.resolve({
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
          price: 10.0,
          image: "https://example.com/image1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
          price: 20.0,
          image: "https://example.com/image2.jpg",
        },
      ],
    })
  ),
}));

describe("Products", () => {
  it("renders loading skeleton when products are being fetched", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    );

    const skeletonItems = await screen.findAllByTestId("product-skeleton");
    expect(skeletonItems).toHaveLength(8);
  });

  it("renders product cards when products are fetched", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    );

    const productCards = await screen.findAllByTestId("product-card");

    expect(productCards).toHaveLength(2);

    const product1 = productCards[0];

    expect(product1).toHaveTextContent("Product 1");

    const product2 = productCards[1];

    expect(product2).toHaveTextContent("Product 2");
  });
});
