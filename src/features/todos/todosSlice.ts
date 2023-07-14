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

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    completeTodo(state, action: PayloadAction<string>) {
      const todoId: string = action.payload;
      const findedTodo = state.todos.find((todo) => todo.id === todoId)!;
      findedTodo.completed = !findedTodo?.completed;
    },
  },
});

export const { addTodo, completeTodo } = todoSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
