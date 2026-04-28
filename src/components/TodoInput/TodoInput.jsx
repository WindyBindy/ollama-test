import { useState } from 'react'
import './TodoInput.css'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')
  const [targetTime, setTargetTime] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text, targetTime, duration)
      setText('')
      setTargetTime('')
      setDuration('')
    }
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="text"
          className="main-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">+</button>
      </div>
      <div className="time-fields">
        <div className="time-field">
          <label>Make at</label>
          <input
            type="time"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
          />
        </div>
        <div className="time-field">
          <label>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. 30m"
          />
        </div>
      </div>
    </form>
  )
}

export default TodoInput