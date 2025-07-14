/* eslint-disable react/react-in-jsx-scope */
import { createContext } from "react";
import { useTaskActions } from "../hooks/useTaskAction";
import type { Task } from "../types";

interface TaskProviderType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  clearTask: () => void;
  completedTask: (id: string) => void;
}

export const TaskContext = createContext<TaskProviderType | undefined>(
  undefined
);

interface TaskProviderProp {
  children: React.ReactNode;
}

export default function TaskProvider({ children }: TaskProviderProp) {
  const { tasks, addTask, removeTask, clearTask, completedTask } =
    useTaskActions();

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, clearTask, completedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
