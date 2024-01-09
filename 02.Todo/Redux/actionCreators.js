import {
    addTodo,
    removeTodo,
    doTodo,
    filterAllTodos,
    filterCompletedTodos,
    filterIncompletedTodos,
  } from "./actions.js";
  
  function addTodoAction(title) {
    return {
      type: addTodo,
      title,
    };
  }
  
  function removeTodoAction(id) {
    return {
      type: removeTodo,
      id,
    };
  }
  
  function doTodoAction(id) {
    return {
      type: doTodo,
      id,
    };
  }
  
  function filterAllTodosAction() {
    return {
      type: filterAllTodos,
    };
  }
  
  function filterCompletedTodosAction() {
    return {
      type: filterCompletedTodos,
    };
  }
  
  function filterIncompletedTodosAction() {
    return {
      type: filterIncompletedTodos,
    };
  }
  
  export {
    addTodoAction,
    removeTodoAction,
    doTodoAction,
    filterAllTodosAction,
    filterCompletedTodosAction,
    filterIncompletedTodosAction,
  };
  