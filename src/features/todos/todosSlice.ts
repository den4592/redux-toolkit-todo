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
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const selectAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
