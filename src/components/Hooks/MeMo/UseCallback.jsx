import { useCallback, useState } from "react";

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
