import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TaskProvider from "./contexts/TaskContext.tsx";
import FilterProvider from "./contexts/FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <TaskProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </TaskProvider>
);
