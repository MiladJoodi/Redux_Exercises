
// Counter Reducer
let incrementAction = { type: 'increment' }
let decrementAction = { type: 'decrement' }

function counterReducer(action){
    switch(action.type){
        case 'increment': {
            return newScore
        }
        case 'decrement': {
            return newScore
        }
        default: {
            return store
        }
    }
}

//Todolist Action
let createTodoAction = { type: 'ADD_TODO'}
let removeTodoAction = { type: 'REMOVE_TODO'}
let updateTodoAction = { type: 'UPDATE_TODO'}
let getTodoAction = { type: 'GET_TODO'}

function todosReducer(action){
    switch (action.type){
        case "ADD_TODO":{
            return newStore
        }
        case "REMOVE_TODO":{
            return newStore
        }
        case "UPDATE_TODO":{
            return newStore
        }
        case "GET_TODO":{
            return newStore
        }
        default: {
            return store
        }
    }
}