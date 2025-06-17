import React from "react";
import ReactDOM from "react-dom/client";
import { ReactMemo } from "./components/Hooks/MeMo/ReactMemo";
import { MemoParentComponent } from "./components/Hooks/MeMo/UseMemo";
import { UseCallback } from "./components/Hooks/MeMo/UseCallback";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseCallback></UseCallback>
  </React.StrictMode>
);
