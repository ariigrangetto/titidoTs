import React from "react";
import { Task } from "../types";
import useContextTask from "../hooks/useContextTask";
import { CircleX } from "lucide-react";

type Props = {
  task: Task[];
};

export function WithTasks({ task }: Props) {
  const { removeTask, completedTask } = useContextTask();
  return (
    <ul>
      {task.map((item) => (
        <li key={item.id}>
          <p className='bg-red'>{item.text}</p>
          <button onClick={() => removeTask(item.id)}>
            <CircleX />
          </button>
          <button onClick={() => completedTask(item.id)}>
            {item.completed ? "completed" : "not completed"}
          </button>
        </li>
      ))}
    </ul>
  );
}

function WithoutTasks() {
  return <p>No hay tareas pendientes</p>;
}

export default function ListOfTasks({ task }: Props) {
  const hasTask = task.length > 0;
  return hasTask ? <WithTasks task={task} /> : <WithoutTasks />;
}
