import { createContext } from "react"
import { BioProvider } from "./custonHook"

export const Home = () =>{
    const info = BioProvider(createContext());
    return(<>
    <h1>HELLO This is my introduction: {info}</h1>
    </>)
}