import React, { useState } from "react";
import "./App.css";
import ListOfTasks from "./components/ListOfTasks";
import { Task } from "./types";
import useContextTask from "./hooks/useContextTask";
import Filter from "./components/Filter";
import { useFilter } from "./hooks/useFilter";

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
      <main className='app'>
        <h1 className=''>Titido</h1>
        <h2>Organiza tus tareas con nosotros</h2>
        <Filter />

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={text}
            onChange={handleChange}
            placeholder='Homework...'
          />
          <button type='submit'>Add</button>
        </form>

        <ListOfTasks task={filteredTask} />
      </main>
    </>
  );
}

export default App;
