import { Task } from "../types";

export const initialState: Task[] = JSON.parse(
  window.localStorage.getItem("task") || "[]"
);

const updateLocalStorage = (tasks: Task[]) => {
  window.localStorage.setItem("task", JSON.stringify(tasks));
};

type TYPE_ACTIONS =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "CLEAR_TASKS" }
  | { type: "COMPLETED_TASK"; payload: string };

export default function TaskReducer(
  state: Task[] = initialState,
  action: TYPE_ACTIONS
): Task[] {
  if (action.type === "ADD_TASK") {
    const newState = [...state, action.payload];
    updateLocalStorage(newState);
    return newState;
  }
  if (action.type === "REMOVE_TASK") {
    const newState = state.filter((task) => task.id !== action.payload);
    updateLocalStorage(newState);
    return newState;
  }
  if (action.type === "CLEAR_TASKS") {
    updateLocalStorage([]);
    return [];
  }
  if (action.type === "COMPLETED_TASK") {
    const newState = state.map((task) => {
      if (task.id === action.payload) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    updateLocalStorage(newState);
    return newState;
  } else {
    return state;
  }
}
