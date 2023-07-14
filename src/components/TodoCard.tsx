import {
  completeTodo,
  editTodo,
  removeTodo,
} from "../features/todos/todosSlice";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

interface TodoCardProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoCard = ({ id, text, completed }: TodoCardProps) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");

  const handleEdit = useCallback(
    (todoId: string, inputedText: string, todoText: string) => {
      if (!edit) {
        setEdit(true);
        setTodoText(inputedText);
      } else {
        dispatch(editTodo({ todoId, todoText }));
        setEdit(false);
      }
    },
    [dispatch, edit]
  );
  return (
    <div className="w-full h-[6rem] p-5 rounded bg-white flex gap-5 items-center justify-between mb-5  overflow-x-auto">
      {edit ? (
        <input
          className="placeholder:italic placeholder:text-slate-400 block text-ellipsis w-full min-w-[200px] overflow-hidden bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      ) : (
        <p className={`text-base ${completed === true ? "line-through" : ""}`}>
          {text}
        </p>
      )}

      <div className="flex gap-5">
        <button
          className="shrink-0 p-2 border-2 border-yellow-400  rounded hover:text-white hover:bg-yellow-400"
          onClick={() => handleEdit(id, text, todoText)}
        >
          {edit ? <span>confirm</span> : <span>edit</span>}
        </button>
        <button
          className="shrink-0 p-2 border-2 border-green-400  rounded hover:text-white hover:bg-green-400"
          onClick={() => dispatch(completeTodo(id))}
        >
          complete
        </button>
        <button
          className="shrink-0 p-2 border-2 border-red-400  rounded hover:text-white hover:bg-red-400"
          onClick={() => dispatch(removeTodo(id))}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
