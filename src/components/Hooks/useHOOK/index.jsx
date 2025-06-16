import { use } from "react"

// export const BioContext = createContext();
export const BioContext = useHook();

export const UseHook = ({ children }) => {
    const Name = "Rishabh yadav from sultanpur"
    const age = 22;
    return (<>
        <BioContext.Provider value={{ Name, age }}>{children}</BioContext.Provider>
    </>)
}

//Use Hook

export const useHook = () => {
    const newuseHook = use(BioContext);
    return newuseHook;
}