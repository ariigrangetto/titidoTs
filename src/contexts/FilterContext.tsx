import { createContext, useState } from "react";
import React from "react";
import type { Task } from "../types";

type FilterState = {
  completed: "all" | "completed" | "incomplete";
};

type FilterContextType = {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  filterTask: (task: Task[]) => Task[];
};

//definir el tipo exacto de lo que voy a compartir en el contexto
// Tip: usamos el undefined porque al inicio el contexto puede estar vacio y eso nos permite lanzar un error si se intenta usar el contexto fuera de su proveedor

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

interface FilterProviderProp {
  children: React.ReactNode;
}

export default function FilterProvider({ children }: FilterProviderProp) {
  const [filter, setFilter] = useState<FilterState>({
    completed: "all",
  });

  function filterTask(task: Task[]): Task[] {
    return task.filter((task) => {
      if (filter.completed === "all") return true;
      if (filter.completed === "completed") return task.completed;
      if (filter.completed === "incomplete") return !task.completed;
      return false;
    });
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter, filterTask }}>
      {children}
    </FilterContext.Provider>
  );
}
