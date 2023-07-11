import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
  todos: [{ id: "1", text: "hello", completed: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      // state.todos.push(action.payload)
      console.log(state, action);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
