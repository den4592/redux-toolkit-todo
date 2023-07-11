import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="container xl-auto m-auto">
      <form className="flex justify-center">
        <input
          type="text"
          id="text"
          placeholder="Todo..."
          className="w-3/5 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-indigo-400">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
