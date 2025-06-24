import React, { useState } from "react";
import "./App.css";
import ListOfTasks from "./components/ListOfTasks";
import { Task } from "./types";
import useContextTask from "./hooks/useContextTask";
import Filter from "./components/Filter";
import { useFilter } from "./hooks/useFilter";
import { MousePointerClick } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { GithubIcon } from "lucide-react";

function App() {
  const [text, setText] = useState<string>("");
  const { tasks, addTask } = useContextTask();
  const { filterTask } = useFilter();

  const filteredTask = filterTask(tasks);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask({ text, completed: false, id: crypto.randomUUID() });
    setText("");
  }

  return (
    <>
      <a href='https://github.com/ariigrangetto/titidoTs'>
        <GithubIcon />
      </a>
      <header className='mt-5'>
        <div className='flex justify-center items-center m-auto'>
          <NotebookPen />
          <h1 className='font-medium text-3xl ml-1'>Titido</h1>
        </div>

        <h2 className='mt-2.5 text-2xl'>Organize your tasks with us!</h2>
      </header>
      <Filter />

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

      <ListOfTasks task={filteredTask} />
    </>
  );
}

export default App;
