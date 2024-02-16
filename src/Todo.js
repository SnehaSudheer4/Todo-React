import React, { useEffect, useRef, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './todo.css'; // Import CSS file for styling

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { list: todo, id: Date.now() }]);
      setTodo('');
    }
  };

  const inputRef = useRef(null); // Corrected ref initialization

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onDelete = (id) => {
    setTodos(todos.filter((to) => to.id !== id));
  };

  return (
   
  
    <div className="container">
      <div>
    <h2 style={{paddingRight:'20px'}}>TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          ref={inputRef}
          placeholder="Enter your todo"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((to) => (
            <li key={to.id} className="todo-item">
              <span>{to.list}</span>
              <AiFillDelete className="delete-icon" onClick={() => onDelete(to.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Todo;
