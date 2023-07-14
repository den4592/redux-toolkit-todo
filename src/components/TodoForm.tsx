import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const handleAddPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text) {
      const postObj = {
        id: nanoid(),
        text: text,
        completed: false,
      };
      dispatch(addTodo(postObj));
      setText("");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl mb-5 text-white font-bold">TODO APP</h1>
      <form className="flex justify-center">
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="type something..."
          className="shadow appearance-none shadow appearance-none border-none rounded w-full py-2 px-3 mr-4 text-grey-darker"
        />
        <button
          className="shrink-0 p-2 border-2 rounded hover:text-white hover:bg-pink-400"
          onClick={handleAddPost}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
