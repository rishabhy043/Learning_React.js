// import { createContext } from "react"
// import { BioProvider } from "../Customhook/custonhook"

import { useHook } from "."

export const HomeComponent = () => {
    // const Name = BioProvider(createContext())
    const Name = useHook;
    return (<>
        <h1>That's about Me: {Name}</h1>
    </>)
}