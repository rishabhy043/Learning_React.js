import { useCustomHook } from "./custonhook"; // make sure the path is correct

export const Home = () => {
  const info = useCustomHook();

  return (
    <>
      <h1>HELLO This is my introduction: {info}</h1>
    </>
  );
};
