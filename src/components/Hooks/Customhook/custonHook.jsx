import { createContext } from "react"

export const BioProvider = createContext();

export const BioContext = ({ Children }) => {
     const info = "Rishabh yadav from Sultanpur"
    return (<>
        <BioProvider.Provider value={info}>
            {Children}
        </BioProvider.Provider>
    </>)
}

// custom hook

export const use