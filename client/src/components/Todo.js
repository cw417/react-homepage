import React from 'react'
import { FiTrash } from 'react-icons/fi'

export default function Todo({ todo, deleteTodo }) {

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className='m-bt-05'>
      <button onClick={handleDelete}><FiTrash /></button>
      <span className='m-rl-05'>{todo.info}</span>
    </div>
  )
}
