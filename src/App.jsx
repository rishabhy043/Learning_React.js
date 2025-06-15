import { BioContext } from "./components/Hooks/ContextAPI/contextAPi"
import { Home } from "./components/Hooks/ContextAPI/Home"

export const App = () =>{
  return (
  <BioContext>
    <Home></Home>
  </BioContext>
) 
}