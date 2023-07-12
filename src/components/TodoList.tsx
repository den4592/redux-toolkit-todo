import { selectAllTodos } from "../features/todos/todosSlice";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector(selectAllTodos);

  return (
    <div className="container text-left">
      <h3 className="text-white text-base mt-10 mb-10 ">
        Count: {todos.length}
      </h3>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full h-[5rem] p-5 rounded bg-white flex items-center justify-between"
          >
            <p className="text-base">{todo.text}</p>
            <div className="flex gap-5">
              <button className="shrink-0 p-2 border-2 border-yellow-400  rounded hover:text-white hover:bg-yellow-400">
                edit
              </button>
              <button className="shrink-0 p-2 border-2 border-green-400  rounded hover:text-white hover:bg-green-400">
                complete
              </button>
              <button className="shrink-0 p-2 border-2 border-red-400  rounded hover:text-white hover:bg-red-400">
                remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
