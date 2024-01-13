import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD_TODO")
export const removeTodo = createAction("REMOVE_TODO")
export const doTodo = createAction("DO_TODO")

console.log(removeTodo({id: 1})) 


// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addTodo.type: {
      return [...state, action.payload];
    }
    case removeTodo.type: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
}
