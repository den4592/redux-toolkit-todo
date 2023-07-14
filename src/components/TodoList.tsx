import { selectAllTodos } from "../features/todos/todosSlice";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector(selectAllTodos);

  return (
    <div className="container mt-10">
      <h3 className="text-white text-left text-base  mb-10 ">
        Count: {todos.length}
      </h3>
      <div className="container text-left overflow-auto h-[700px] mt-10">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
