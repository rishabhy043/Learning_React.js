import { HomeComponent } from "./components/Hooks/ContextAPI/useHOOK/Home";
import { BioContext } from "./components/Hooks/ContextAPI/useHOOK/index";


export const App = () => {
  return (
    <BioContext>
      <HomeComponent></HomeComponent>
    </BioContext>
  );
};
