import { addTodo, removeTodo, doTodo, filterAllTodos, filterCompletedTodos, filterIncompletedTodos } from "../Redux/actions.js"

import { addTodoAction } from "../Redux/actionCreators.js"

const todoInputElem = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.todo-button')
const todosContainer = document.querySelector('.todo-list')

// Create Todolist Reducer
function todolistReducer(state = [], action) {
    switch (action.type) {
        case addTodo: {
            console.log(action)
            let newState = [...state]
            let newTodoObj = {
                id: crypto.randomUUID(),
                title: action.title,
                isCompleted: false
            }

            newState.push(newTodoObj)

            return newState
        }
        case removeTodo: {
            return state
        }
        case doTodo: {
            return state
        }
        case filterAllTodos: {
            return state
        }
        case filterCompletedTodos: {
            return state
        }
        case filterIncompletedTodos: {
            return state
        }
        default: {
            return state
        }
    }
}

//Create Store
const store = Redux.createStore(todolistReducer)
console.log(store)

addTodoBtn.addEventListener('click', (event) => {
    console.log('first')
})

function generateTodosInDom(todos) {
    todosContainer.innerHTML = "";
    todos.forEach((todo) => {
        todosContainer.insertAdjacentHTML('beforeend', `
        <div class="todo">
            <li class="todo-item">${todos.title}</li>
            <button class="complete-btn">
            <i class="fas fa-check-circle"></i>
            </button>
            <button class="trash-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>
        `)
    })
}