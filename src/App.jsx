import { useState } from "react";
import { Products } from "./Components/Producst";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useFilters } from "./Hooks/useFilters";
import { Cart } from "./Components/Cart";
import { CartContextProvider } from "./Context/cart";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartContextProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
