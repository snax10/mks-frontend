import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";

export function App() {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
      }}
    >
      <Header />
      <Products />
      <Cart />
      <Footer />
    </div>
  );
}
