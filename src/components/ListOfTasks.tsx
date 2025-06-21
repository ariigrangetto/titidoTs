import React from "react";

export function withTasks({ task }) {
  <ul>
    {task.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>;
}

function WithoutTasks() {
  return <p>No hay tareas pendientes</p>;
}

export default function ListOfTasks({ task }) {
  const hasTask = task.length > 0;
  return hasTask ? <ListOfTasks task={task} /> : <WithoutTasks />;
}
