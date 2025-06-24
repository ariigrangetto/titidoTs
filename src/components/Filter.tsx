import React, { useId } from "react";
import { useFilter } from "../hooks/useFilter";

export default function Filter() {
  const selectId = useId();
  const { filter, setFilter } = useFilter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFilter((prevFilter) => ({
      ...prevFilter,
      completed: value as "all" | "completed" | "incomplete",
    }));
  }

  return (
    <>
      <select name='' id={selectId} onChange={handleChange}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='incomplete'>Incomplete</option>
      </select>
    </>
  );
}

//uso el prevState para que no se sobreescriba la propieda del objeto
//es para asegurar que solo se cambie esa parte

//si tuviera un objeto como
// const [filter, setFilter] = useState({
// completed: "all",
// priority: "high"
// });

// si no uso el prevState, queda:
//{ copleted: "completed"} y se pierde la propiedad priority

// si uso el prevState, queda;
//  { completed: "completed", priority: "high" } y solo modifica la propiedad completed que es la que cambio
