import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input type="text" class="todo-input" />
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
        <ul class="todo-list"></ul>
      </div>
    </>
  );
}
