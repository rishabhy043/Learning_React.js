import { useState } from "react";
import RenderCount from "./RenderCount"; // Corrected import

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
      
      {/* RenderCount won't re-render if memoization works */}
      <RenderCount />
    </>
  );
};
