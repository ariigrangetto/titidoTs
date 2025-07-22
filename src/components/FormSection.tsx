import { useState } from "react";
import useContextTask from "../hooks/useContextTask";
import { MousePointerClick } from "lucide-react";
import { useFilter } from "../hooks/useFilter";
import ListOfTasks from "./ListOfTasks";
import Filter from "./Filter";

/* eslint-disable react/react-in-jsx-scope */
export default function FormSection() {
  const { filterTask } = useFilter();
  const { tasks, addTask } = useContextTask();

  const filteredTask = filterTask(tasks);

  const [text, setText] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask({ text, completed: false, id: crypto.randomUUID() });
    setText("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
  }

  return (
    <>
      <section className='flex justify-center m-auto mt-5'>
        <form onSubmit={handleSubmit} className='flex'>
          <input
            type='text'
            value={text}
            className='
        bg-gray-100 w-70 rounded-3xl h-10 p-2 border-0 outline-0'
            onChange={handleChange}
            placeholder='Homework...'
          />
          <button
            type='submit'
            className='flex h-10 p-2 bg-blue-300/50 rounded-4xl w-22 ml-2 justify-center cursor-pointer hover:bg-blue-400/50 transition-all duration-300'
          >
            <MousePointerClick className='mr-1' />
            Add
          </button>
        </form>
      </section>
      <Filter />
      <ListOfTasks task={filteredTask} />
    </>
  );
}
