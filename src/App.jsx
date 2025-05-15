import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getCountClass = () => {
    if (count < 0) return "count red";
    if (count > 0) return "count green";
    return "count black";
  };

  return (
    <div className="container">
      <h1 className={getCountClass()}>{count}</h1>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>–</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
}
