import React, { useState, useEffect } from 'react';
// import data from "./data.json";
import './App.css'
import Form from './Components/Form';
import TodoList from './Components/TodoList';


function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todos, status]);


  // const handleToggle = (id) => {
  //   let mapped = todos.map(task => {
  //     return task.id === id ? { ...task, complete: !task.complete } : { ...task };
  //   });
  //   setTodos(mapped);
  // }

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  console.log(filteredTodos)

  // const saceLocalTodos
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      console.log(todoLocal)
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h2>To do app Janou</h2>
        <h3>Local storage</h3>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
