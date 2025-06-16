// import { createContext } from "react"
// import { BioProvider } from "../Customhook/custonhook"

import { useHook } from "."

export const HomeComponent = () => {
    // const Name = BioProvider(createContext())
    const Name = useHook;
    const age = useHook;
    return (<>
        <h1>That's about Me: {Name} And i'm {age} years old</h1>
    </>)
}