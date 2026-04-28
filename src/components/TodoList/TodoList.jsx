import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
      {todos.length === 0 && (
        <li className="empty">No tasks yet</li>
      )}
    </ul>
  )
}

export default TodoList