import React from "react";
import "./App.css";
import Todolist from "./Components/Todolist";
import { connect } from "react-redux";
import { addTodoAction } from "./Redux/store/Todos";

function App(props) {

  const [title, setTitle] = useState('')

  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input type="text" class="todo-input"
        value={title}
        onChange={event=> setTitle(event.target.value)} />

        <button class="todo-button" type="submit">
          <i class="fas fa-plus-circle fa-lg"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div class="todo-container">
        <ul class="todo-list">
          <Todolist />

        </ul>
      </div>
    </>
  );
}

const mapDispatchToProp = (dispatch)=>({
  addTodo: (title)=> dispatch(addTodoAction())
})


export default connect(null,mapDispatchToProp)(App)