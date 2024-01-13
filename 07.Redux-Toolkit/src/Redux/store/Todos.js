import { createAction } from "@reduxjs/toolkit";

const addTodoAct = createAction("ADD_TODO")
const removeTodoAct = createAction("REMOVE_TODO")
const doTodo = createAction('DO_TODO')

console.log(removeTodoAct.type)

//Actions
export const addTodo = createAction("ADD_TODO");
export const removeTodo = createAction("REMOVE_TODO");
export const doTodo = createAction("DO_TODO");

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
