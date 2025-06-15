// contextAPI.js
import { createContext } from "react";

// Create the context
export const BioContext = createContext();

// Create the Provider component
export const BioProvider = ({ children }) => {
    const myName = "Rishabh Yadav";

    return (
        <BioContext.Provider value={myName}>
            {children} {/* Providing value to all nested components */}
        </BioContext.Provider>
    );
};
