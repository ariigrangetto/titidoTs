import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function useContextTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useContextTask must be used within a TaskProvider");
  }

  return context;
}
