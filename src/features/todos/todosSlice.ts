import { createSlice } from "@reduxjs/toolkit";
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
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    editTodo(state, action) {
      const todoId = action.payload;
      const findedTodo = state.todos.find((todo) => todo.id === todoId);
      findedTodo.completed = !findedTodo?.completed;
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
