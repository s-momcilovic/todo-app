import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
// uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }
  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, id) => (
        <Todo task={todo} key={id} />
      ))}
    </div>
  );
};
