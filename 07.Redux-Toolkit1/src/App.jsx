import React, { useState } from "react";

import "./App.css";
import Todolist from "./Components/Todolist";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/store/Todos";

export default function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo({ id: crypto.randomUUID(), title, isDone: false }));
    setTitle("");
  };

  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input
          type="text"
          className="todo-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="todo-button" type="submit" onClick={addTodoHandler}>
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <Todolist />
        </ul>
      </div>
    </>
  );
}

// const mapDispatchToProp = (dispatch) => ({
//   addTodo: (title) => dispatch(addTodoAction(title)),
// });

// export default connect(null, mapDispatchToProp)(App);
