/* eslint-disable react/react-in-jsx-scope */
import { NotebookPen } from "lucide-react";

export default function Header() {
  return (
    <>
      <header>
        <div className='flex justify-center items-center m-auto'>
          <NotebookPen />
          <h1 className='font-medium text-3xl ml-1'>Titido</h1>
        </div>

        <h2 className='mt-2.5 text-2xl'>Organize your tasks with us!</h2>
      </header>
    </>
  );
}
