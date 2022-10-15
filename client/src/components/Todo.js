import React from 'react'
import { FiMinus } from 'react-icons/fi'

export default function Todo({ todo, deleteTodo }) {

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className='todo'>
      <button className='todo-delete button' onClick={handleDelete}><FiMinus /></button>
      <span>{todo.info}</span>
    </div>
  )
}
