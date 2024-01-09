import {addTodo,removeTodo,doTodo} from './actions.js'

const addTodoAction = (value)=>{
    return{
        type: addTodo,
        title: value
    }
}
const removeTodoAction = (id)=>{
    return{
        type: removeTodo,
        id
    }
}

const doTodoAction = (id)=>{
    return{
        type: doTodo,
        id
    }
}
// const filterAllTodos = (value)=>{
//     return{
//         type: addTodo,
//         title: value
//     }
// }

export{
    addTodoAction,
    removeTodoAction,
    doTodoAction,
    
} 