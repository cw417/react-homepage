import React from 'react'
import { FiTrash } from 'react-icons/fi'

export default function Todo({ todo, deleteTodo }) {

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div>
      <button onClick={handleDelete}><FiTrash /></button>
      {todo.info}
    </div>
  )
}
