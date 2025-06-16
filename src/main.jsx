
import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components/Hooks/UseReducer";
import { ImproveReducer } from "./components/Hooks/UseReducer/improvemet";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImproveReducer></ImproveReducer>
  </React.StrictMode>
);
