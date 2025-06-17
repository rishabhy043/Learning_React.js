import { useRef, memo } from "react";

const RenderCount = () => {
  const renderCount = useRef(1); // Start at 1 to count the first render

  return (
    <>
      <p>
        Nothing changed here, but I have rendered{" "}
        <span>{renderCount.current++} time(s)</span>
      </p>
    </>
  );
};

export default memo(RenderCount); // Wrap in React.memo to prevent unnecessary re-renders
