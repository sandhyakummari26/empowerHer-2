import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("HeavyComponent rendered");

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Heavy Component</h3>
      <p>This component is lazy loaded and memoized.</p>
    </div>
  );
});

export default HeavyComponent;
