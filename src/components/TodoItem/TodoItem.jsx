import './TodoItem.css'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.deleting ? 'deleting' : ''}`}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        {(todo.targetTime || todo.duration) && (
          <div className="todo-meta">
            {todo.targetTime && <span>Make at: {todo.targetTime}</span>}
            {todo.duration && <span>Duration: {todo.duration}</span>}
          </div>
        )}
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  )
}

export default TodoItem