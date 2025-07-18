import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
