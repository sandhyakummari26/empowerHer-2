import { useState, lazy, Suspense } from "react";

// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      {/* Lazy loaded component */}
      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
