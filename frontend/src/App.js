import React, { useState, useEffect } from "react";
import { saveCalculation, getHistory } from "./api";

function App() {
  const [elem, setText] = useState("");
  const [val, setNumber] = useState("");
  //const [operation, setOperation] = useState("+");
  //const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const res = await getHistory();
    setHistory(res.data);
  };

  // const handleCalculate = async () => {
  //   const res = await calculate({ number1: +number1, number2: +number2, operation });
  //   setResult(res.data.result);
  // };

  const handleSave = async () => {
    await saveCalculation({ elem, val });
    loadHistory();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Calculator</h2>

      <input
        type="text"
        value={elem}
        onChange={(e) => setText(e.target.value)}
        placeholder="Voice"
      />
      {/* <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select> */}
      <input
        type="number"
        value={val}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
      />

      <br /><br />

      {/* <button onClick={handleCalculate}>Calculate</button> */}

      {(
        <>
          <h3>Result: {}</h3>
          <button onClick={handleSave}>Save to History</button>
        </>
      )}

      <h3>History:</h3>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.elem} {item.val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;