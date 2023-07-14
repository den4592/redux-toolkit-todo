import { selectAllTodos } from "../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../features/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-10">
      <h3 className="text-white text-left text-base  mb-10 ">
        Count: {todos.length}
      </h3>
      <div className="container text-left overflow-auto h-[700px] mt-10 ">
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full h-[5rem] p-5 rounded bg-white flex items-center justify-between mb-5"
            >
              <p
                className={`text-base ${
                  todo.completed === true ? "line-through" : ""
                }`}
              >
                {todo.text}
              </p>
              <div className="flex gap-5">
                <button className="shrink-0 p-2 border-2 border-yellow-400  rounded hover:text-white hover:bg-yellow-400">
                  edit
                </button>
                <button
                  className="shrink-0 p-2 border-2 border-green-400  rounded hover:text-white hover:bg-green-400"
                  onClick={() => dispatch(completeTodo(todo.id))}
                >
                  complete
                </button>
                <button className="shrink-0 p-2 border-2 border-red-400  rounded hover:text-white hover:bg-red-400">
                  remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
