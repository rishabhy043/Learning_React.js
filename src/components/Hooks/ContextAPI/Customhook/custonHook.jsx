import { createContext, useContext } from "react";

// 1. Create the context
export const BioContext = createContext();

// 2. Create the Provider component
export const BioProvider = ({ children }) => {
  const info = "Rishabh Yadav from Sultanpur";

  return (
    <BioContext.Provider value={info}>
      {children}
    </BioContext.Provider>
  );
};

// 3. Create a custom hook to use the context
export const useCustomHook = () => {
  const context = useContext(BioContext);
  if (!context) {
    throw new Error("useCustomHook must be used within a BioProvider");
  }
  return context;
};
