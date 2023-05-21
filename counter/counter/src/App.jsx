import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={increase}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={decrease}
        >
          -
        </button>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
