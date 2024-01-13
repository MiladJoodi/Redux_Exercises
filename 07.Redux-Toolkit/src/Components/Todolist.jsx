import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function Todolist() {
  const todos = useSelector((state) => state); // todos

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
}

// function mapStateToProps(state) {
//   return { todos: state };
// }

// export default connect(mapStateToProps)(Todolist);
