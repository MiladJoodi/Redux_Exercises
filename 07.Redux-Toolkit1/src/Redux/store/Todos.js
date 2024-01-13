import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD_TODO");
export const removeTodo = createAction("REMOVE_TODO");
export const doTodo = createAction("DO_TODO");

export default createReducer([], {
  [addTodo.type]: (state, action) => {
    state.push(action.payload);
  },
  [removeTodo.type]: (state, action) => {
    // Coding
  },
  [doTodo.type]: (state, action) => {
    // Coding
  },
});
