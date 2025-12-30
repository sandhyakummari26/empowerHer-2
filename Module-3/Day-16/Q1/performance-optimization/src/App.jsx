import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // ✅ useMemo to prevent recalculation on every render
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback to prevent function recreation
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
