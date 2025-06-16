import React from "react";
import { ThemeProvider ,ThemeContext } from "./Projects/DarkLight/DarkLight";


export const App = () => {
  return (
   <ThemeContext.Provider>
    <ThemeProvider></ThemeProvider>
   </ThemeContext.Provider>
  );
};

