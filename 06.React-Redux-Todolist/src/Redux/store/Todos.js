//Actions
const addTodo = "ADD_TODO"
const removeTodo = "REMOVE_TODO"
const doTodo = "DO_TODO"

//Reducer
export default function reducer(state = [], action){
    switch(action.type){
        case addTodo:{
            return [...state, action.payload]
        }
        case removeTodo:{
            return state.filter(todo=> todo.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

//Action Creators
export const addTodoAction = (title)=> ({
    type: addTodo,
    payload: {
        id: crypto.randomUUID,
        title: title,
        isDone: false,
    }
})

export const removeTodoAction = (id)=> ({
    type: removeTodo,
    payload: {
        id
    }
})