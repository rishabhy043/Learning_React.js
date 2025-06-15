import { Home } from "./components/Hooks/ContextAPI/Home"
import { BioProvider } from "./components/Hooks/Customhook/custonHook"

export const App = () =>{
  return (
<BioProvider>
  <Home></Home>
</BioProvider>
) 
}