import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="container ml-5 mr-5">
      <h1 className="text-2xl mb-5 text-white font-bold">TODO APP</h1>
      <form className="flex justify-center">
        <input
          type="text"
          id="text"
          placeholder="type something..."
          className="shadow appearance-none shadow appearance-none border-none rounded w-full py-2 px-3 mr-4 text-grey-darker"
        />
        <button className="shrink-0 p-2 border-2 rounded hover:text-white hover:bg-pink-400 ">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
