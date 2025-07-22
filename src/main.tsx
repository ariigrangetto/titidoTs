/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TaskProvider from "./contexts/TaskContext.tsx";

createRoot(document.getElementById("root")!).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
