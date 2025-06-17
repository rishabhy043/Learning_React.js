import React from "react";
import ReactDOM from "react-dom/client";
import { ReactMemo } from "./components/Hooks/MeMo/ReactMemo";
import { MemoParentComponent } from "./components/Hooks/MeMo/UseMemo";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoParentComponent></MemoParentComponent>
  </React.StrictMode>
);
