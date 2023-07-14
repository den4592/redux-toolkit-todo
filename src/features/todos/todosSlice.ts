import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

interface TodoState {
  todos: Todo[];
}

interface EditTodo {
  todoId: string;
  todoText: string;
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.unshift(action.payload);
    },
    editTodo(state, action: PayloadAction<EditTodo>) {
      const { todoId, todoText } = action.payload;
      const findedTodo = state.todos.find((todo) => todo.id === todoId)!;
      findedTodo.text = todoText;
      if (findedTodo.completed) {
        findedTodo.completed = !findedTodo.completed;
      }
    },
    completeTodo(state, action: PayloadAction<string>) {
      const todoId: string = action.payload;
      const findedTodo = state.todos.find((todo) => todo.id === todoId)!;
      findedTodo.completed = !findedTodo?.completed;
    },
    removeTodo(state, action: PayloadAction<string>) {
      const todoId: string = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId)!;
    },
  },
});

export const { addTodo, editTodo, completeTodo, removeTodo } =
  todoSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
