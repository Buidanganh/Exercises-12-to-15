import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>1. Counter</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;