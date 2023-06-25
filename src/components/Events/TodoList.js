import React from "react";
import "./style.css";

const TodoList = ({ todos, setTodos, setEditTodo, inputRef }) => {
  const handleDelete = ({ id }) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  const handleComplete = ({ id }) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodos(newTodos);
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p className={`${todo.complete ? "done" : "".trim()}`}>
              {todo.title}
            </p>
            <button onClick={() => handleComplete(todo)}>complete</button>
            <button
              onClick={() => {
                handleEdit(todo);
                inputRef.current.focus();
              }}
            >
              edit
            </button>
            <button onClick={() => handleDelete(todo)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
