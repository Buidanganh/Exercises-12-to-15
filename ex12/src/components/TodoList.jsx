import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(newTodos);
  };

  return (
    <div>
      <h2>4. Todo List</h2>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Please input a Todo"
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <h3>Todo List</h3>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;