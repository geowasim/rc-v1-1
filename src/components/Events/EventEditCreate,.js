import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { useRef } from "react";

const EventEditCreate = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo]);

  const inputRef = useRef();

  const handleEdit = (input, id, title, complete) => {
    console.log("dddd", title, complete);
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: input };
      }
      return item;
    });
    setTodos(newTodos);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { id: new Date().valueOf(), title: input, complete: false },
      ]);
      setInput("");
    } else {
      handleEdit(input, editTodo.id, editTodo.title, editTodo.complete);
      setInput("");
      setEditTodo(null);
    }
  }
  function handelChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => handelChange(e)}
          value={input}
          ref={inputRef}
          required
          autoFocus
        />
        <button type="submit">{editTodo ? "Save" : "Add"}</button>
      </form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        inputRef={inputRef}
      />
    </div>
  );
};

export default EventEditCreate;
