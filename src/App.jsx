import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
import FilterButtons from './components/FilterButtons/FilterButtons'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text, targetTime, duration) => {
    if (!text.trim()) return
    setTodos([...todos, { 
      id: Date.now(), 
      text: text.trim(), 
      completed: false,
      targetTime: targetTime || '',
      duration: duration || ''
    }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, deleting: true } : todo
    ))
    setTimeout(() => {
      setTodos(todos.filter(todo => todo.id !== id))
    }, 300)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList 
        todos={filteredTodos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
      <FilterButtons 
        filter={filter} 
        onFilterChange={setFilter} 
      />
      <div className="stats">
        {todos.filter(t => !t.completed).length} items left
      </div>
    </div>
  )
}

export default App