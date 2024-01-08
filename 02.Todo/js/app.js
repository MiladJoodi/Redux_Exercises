import { addTodo, removeTodo, doTodo, filterAllTodos, filterCompletedTodos, filterIncompletedTodos } from "../Redux/actions.js"

// Create Todolist Reducer
function todolistReducer(state = [], action) {
    switch (action.type) {
        case addTodo: {
            return state
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

// Create Store
const store = Redux.createStore(todolistReducer)
console.log(store);