import { useState } from "react";
import { selectAllTodos } from "../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  editTodo,
  removeTodo,
} from "../features/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");

  const handleEdit = (
    todoId: string,
    inputedText: string,
    todoText: string
  ) => {
    if (!edit) {
      setEdit(true);
      setTodoText(inputedText);
    } else {
      dispatch(editTodo({ todoId, todoText }));
      setEdit(false);
    }
  };

  return (
    <div className="container mt-10">
      <h3 className="text-white text-left text-base  mb-10 ">
        Count: {todos.length}
      </h3>
      <div className="container text-left overflow-auto h-[700px] mt-10">
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full h-[6rem] p-5 rounded bg-white flex gap-5 items-center justify-between mb-5  overflow-x-auto"
            >
              {edit ? (
                <input
                  className="placeholder:italic placeholder:text-slate-400 block text-ellipsis w-full min-w-[200px] overflow-hidden bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                />
              ) : (
                <p
                  className={`text-base ${
                    todo.completed === true ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </p>
              )}

              <div className="flex gap-5">
                <button
                  className="shrink-0 p-2 border-2 border-yellow-400  rounded hover:text-white hover:bg-yellow-400"
                  onClick={() => handleEdit(todo.id, todo.text, todoText)}
                >
                  {edit ? <span>confirm</span> : <span>edit</span>}
                </button>
                <button
                  className="shrink-0 p-2 border-2 border-green-400  rounded hover:text-white hover:bg-green-400"
                  onClick={() => dispatch(completeTodo(todo.id))}
                >
                  complete
                </button>
                <button
                  className="shrink-0 p-2 border-2 border-red-400  rounded hover:text-white hover:bg-red-400"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
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
