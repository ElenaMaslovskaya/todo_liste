import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './App.css';
import Context from '../../context/Context';
import TodoAdd from '../TodoAdd/TodoAdd';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal'


function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="app">
        <h1 className='app__title'>Todo List</h1>
        <Modal/>
        {loading && <Loader />}
        {todos.length
          ? (<TodoList todos={todos} onToggle={toggleTodo} />
          ) : (
            loading ? null : <p>No Todos!</p>
          )}

        <TodoAdd onCreate={addTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
