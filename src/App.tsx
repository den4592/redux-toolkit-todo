import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" min-h-[700px] mt-10 flex flex-col items-center ml-5 mr-5">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
