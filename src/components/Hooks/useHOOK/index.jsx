import { use } from "react"

// export const BioContext = createContext();
export const BioContext = useHook;

export const UseHook = ({ children }) => {
    const Name = "Rishabh yadav from sultanpur"
    return (<>
        <BioContext.Provider value={Name}>{children}</BioContext.Provider>
    </>)
}

//Use Hook

export const useHook = () => {
    const NewuseHook = use(BioContext);
    return NewuseHook;
}