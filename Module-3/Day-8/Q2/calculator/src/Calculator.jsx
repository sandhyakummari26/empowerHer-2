import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  const handleCalculation = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;

    let result;
    switch (operation) {
      case 'Add':
        result = a + b;
        break;
      case 'Subtract':
        result = a - b;
        break;
      case 'Multiply':
        result = a * b;
        break;
      default:
        result = 'Invalid operation';
    }

    setResults([...results, `${a} ${operation} ${b} = ${result}`]);
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      <button onClick={handleCalculation}>Perform Action</button>

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
