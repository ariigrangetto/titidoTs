/* eslint-disable react/react-in-jsx-scope */
import useContextTask from "../hooks/useContextTask";
import { CircleX } from "lucide-react";
import type { Task } from "../types";

type Props = {
  task: Task[];
};

export function WithTasks({ task }: Props) {
  const { removeTask, completedTask } = useContextTask();
  return (
    <div className='mt-5 justify-center m-auto flex font-sans'>
      <ul className='rounded-3xl w-full max-w-2xl space-y-4'>
        {task.map((item) => (
          <li
            key={item.id}
            className='flex items-center  justify-between m-auto p-2'
          >
            <div className='flex justify-center bg-gray-100 w-4xl h-14 p-5 m-auto items-center rounded-2xl'>
              <div className=' flex flex-1 items-center gap-4 justify-start'>
                <p className=''>{item.text}</p>
              </div>

              <div className='flex gap-2'>
                <button
                  name='delete button'
                  onClick={() => removeTask(item.id)}
                  className='ml-2 cursor-pointer w-15 justify-center flex h-9 items-center  rounded-2xl bg-red-300/40 text-red-950 hover:bg-red-500/50 transition-all duration-300'
                >
                  <CircleX size={19} />
                </button>
                <button
                  name='complete button'
                  onClick={() => completedTask(item.id)}
                  className={`ml-2 cursor-pointer ${
                    item.completed
                      ? "bg-green-300/40 font-medium text-green-950 w-32 rounded-2xl h-9 hover:bg-green-500/30 transition-all duration-300"
                      : "bg-red-300/40 rounded-2xl h-9 w-32 text-red-950 font-medium hover:bg-red-400/50 transition-all duration-300"
                  }`}
                >
                  {item.completed ? "completed" : "pending"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WithoutTasks() {
  return <p className='mt-10 text-red-800'>No hay tareas pendientes</p>;
}

export default function ListOfTasks({ task }: Props) {
  const hasTask = task.length > 0;
  return hasTask ? <WithTasks task={task} /> : <WithoutTasks />;
}
