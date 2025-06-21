import React, { useState } from "react";
import "./App.css";
import ListOfTasks from "./components/ListOfTasks";
import { Task } from "./types";
import useContextTask from "./hooks/useContextTask";

function App() {
  const [text, setText] = useState<string>("");
  const { tasks, addTask } = useContextTask();

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
      <main>
        <h1>Titido</h1>
        <h2>Organiza tus tareas con nosotros</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={text}
            onChange={handleChange}
            placeholder='Homework...'
          />
          <button type='submit'>Add</button>
        </form>

        <ListOfTasks task={tasks} />
      </main>
    </>
  );
}

export default App;
