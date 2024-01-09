import { addTodo, removeTodo, doTodo, filterAllTodos, filterCompletedTodos, filterIncompletedTodos } from './actions.js'

const addTodoAction = (value) => {
    return {
        type: addTodo,
        title: value
    }
}
const removeTodoAction = (id) => {
    return {
        type: removeTodo,
        id
    }
}

const doTodoAction = (id) => {
    return {
        type: doTodo,
        id
    }
}

const filterAllTodos = () => {
    return {
        type: filterAllTodos,
    }
}
const filterCompletedTodosAction = () => {
    return {
        type: filterCompletedTodos,
    }
}



export {
    addTodoAction,
    removeTodoAction,
    doTodoAction,

} 