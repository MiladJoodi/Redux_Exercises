import {
  addTodo,
  removeTodo,
  doTodo,
  filterAllTodos,
  filterCompletedTodos,
  filterIncompletedTodos,
} from "../Redux/actions.js";

import {
  addTodoAction,
  removeTodoAction,
  doTodoAction,
  filterAllTodosAction,
  filterCompletedTodosAction,
  filterIncompletedTodosAction,
} from "../Redux/actionCreators.js";

window.removeTodoHandler = removeTodoHandler;
window.doTodoHandler = doTodoHandler;

const todoInputElem = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".todo-button");
const todosContainer = document.querySelector(".todo-list");
const todoFilteringElem = document.querySelector(".filter-todo");

// Create Todolist Reducer
function todolistReducer(state = [], action) {
  switch (action.type) {
    case addTodo: {
      let newState = [...state];
      let newTodoObj = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      newState.push(newTodoObj);

      return newState;
    }
    case removeTodo: {
      let copyState = [...state];
      let newState = copyState.filter((todo) => todo.id !== action.id);
      return newState;
    }
    case doTodo: {
      let newState = [...state];
      newState.some((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
      return newState;
    }
    case filterAllTodos: {
      return state;
    }
    case filterCompletedTodos: {
      let copyState = [...state]
      let newState = copyState.filter(todo => todo.isCompleted)
      return newState;
    }
    case filterIncompletedTodos: {
      let copyState = [...state]
      let newState = copyState.filter(todo => !todo.isCompleted)
      return newState;
    }
    default: {
      return state;
    }
  }
}

// Create Store
const store = Redux.createStore(todolistReducer);

addTodoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTodoTitle = todoInputElem.value.trim();
  store.dispatch(addTodoAction(newTodoTitle));
  const todos = store.getState();
  todoInputElem.value = "";
  generateTodosInDom(todos);
  console.log(todos);
});

todoFilteringElem.addEventListener("change", (event) => {
  console.log(event.target.value);
  if (event.target.value === "all") {
    store.dispatch(filterAllTodosAction())
  } else if (event.target.value === "completed") {
    store.dispatch(filterCompletedTodosAction())
  } else if (event.target.value === "incomplete") {
    store.dispatch(filterIncompletedTodosAction())
  }

  let todos = store.getState()
  generateTodosInDom(todos)
});

function removeTodoHandler(todoID) {
  store.dispatch(removeTodoAction(todoID));
  const todos = store.getState();
  generateTodosInDom(todos);
}

function doTodoHandler(todoID) {
  store.dispatch(doTodoAction(todoID));
  const todos = store.getState();
  generateTodosInDom(todos);
}

function generateTodosInDom(todos) {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    todosContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="todo ${todo.isCompleted && "completed"}">
                <li class="todo-item">${todo.title}</li>
                <button class="complete-btn" onclick=doTodoHandler("${
                  todo.id
                }")>
                    <i class="fas fa-check-circle"></i>
                </button>
                <button class="trash-btn" onclick=removeTodoHandler("${
                  todo.id
                }")>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
    );
  });
}
