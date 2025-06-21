import TaskReducer, { initialState } from "../reducers/TaskReducer";
import { Task } from "../types";
import React from "react";
import { useReducer } from "react";

export function useTaskActions() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  function addTask(task: Task) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function removeTask(id: string) {
    dispatch({ type: "REMOVE_TASK", payload: id });
  }

  function clearTask() {
    dispatch({ type: "CLEAR_TASKS" });
  }

  function completedTask(id: string) {
    dispatch({ type: "COMPLETED_TASK", payload: id });
  }

  return { addTask, removeTask, clearTask, tasks: state, completedTask };
}
