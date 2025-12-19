import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const boxStyle = {
    width: "200px",
    padding: "20px",
    margin: "20px auto",
    textAlign: "center",
    color: "white",
    backgroundColor: isRed ? "red" : "blue",
  };

  return (
    <div>
      <div style={boxStyle}>
        Conditional Styling Example
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
