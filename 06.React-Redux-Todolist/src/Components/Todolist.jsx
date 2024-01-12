import React from 'react'
import Todo from ".Todo"
import { connect } from 'react-redux'

function Todolist({ todos }) {
    return (
        <>
            {
                todos.map(todo => (
                    <Todo key={todo.d} {...todo} />
                ))
            }
        </>
    )
}

function mapStateToProps(state){
    console.log(state);
    return {todos: state}
}

export default connect(mapStateToProps)(Todolist)