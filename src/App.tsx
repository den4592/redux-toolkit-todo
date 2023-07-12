import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col min-h-[700px]">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
