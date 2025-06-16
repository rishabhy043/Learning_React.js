import { Home } from "./components/Hooks/Customhook/Home";
import { BioProvider } from "./components/Hooks/Customhook/custonhook"; // correct the spelling from 'custonHook' to 'customHook'

export const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
};
