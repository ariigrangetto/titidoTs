/* eslint-disable react/react-in-jsx-scope */
import { useId } from "react";
import { useFilter } from "../hooks/useFilter";

export default function Filter() {
  const labelId = useId();
  const { setFilter } = useFilter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFilter((prevFilter) => ({
      ...prevFilter,
      completed: value as "all" | "completed" | "incomplete",
    }));
  }

  return (
    <>
      <div className='mt-3'>
        <label className='' htmlFor={labelId}>
          Filter task by pending or complete
        </label>
        <select
          className='mt-2 bg-blue-300/50 w-30 h-8 px-3 border-0 outline-0 items-center rounded-2xl flex justify-center m-auto '
          id={labelId}
          onChange={handleChange}
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>
    </>
  );
}
