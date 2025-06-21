import React, { useState } from "react";
import "./App.css";
import ListOfTasks from "./components/ListOfTasks";

type Task = {
  id: string;
  text: string;
};

function App() {
  const [text, setText] = useState<string>("");
  const [task, setTaks] = useState<Task[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask = { id: crypto.randomUUID(), text };
    setTaks([...task, newTask]);
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

        <ListOfTasks task={task} />
      </main>
    </>
  );
}

export default App;
