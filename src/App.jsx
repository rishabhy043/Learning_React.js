import React from "react";
import { ThemeProvider ,ThemeContext } from "./Projects/DarkLight/DarkLight";
import { Movie } from "./Pages/Movie";

export const App = () => {
  return (<>
  <Movie></Movie>
  </>
  );
};

