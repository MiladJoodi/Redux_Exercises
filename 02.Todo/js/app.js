import { addTodo, removeTodo, doTodo, filterAllTodos, filterCompletedTodos, filterIncompletedTodos } from "../Redux/actions.js"

import { addTodoAction } from "../Redux/actionCreators.js"

const todoInputElem = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.todo-button')

// Create Todolist Reducer
function todolistReducer(state = [], action){
    switch(action.type){
        case addTodo:{
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
        case removeTodo:{
            return state
        }
        case doTodo:{
            return state
        }
        case filterAllTodos:{
            return state
        }
        case filterCompletedTodos:{
            return state
        }
        case filterIncompletedTodos:{
            return state
        }
        default:{
            return state
        }
    } 
}

//Create Store
const store = Redux.createStore(todolistReducer)
console.log(store)

addTodoBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    const newTodoTitle = todoInputElem.value.trim()
    store.dispatch(addTodoAction(newTodoTitle))
    const todos = store.getState()
    todoInputElem.value = ""
    generateTodosInDom(todos)
    console.log(todos)
})

function generateTodosInDom (todos){
    
}