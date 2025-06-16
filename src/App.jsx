import { HomeComponent } from "./components/Hooks/useHOOK/Home";
import { BioContext } from "./components/Hooks/useHOOK/index";


export const App = () => {
  return (
    <BioContext>
      <HomeComponent></HomeComponent>
    </BioContext>
  );
};
