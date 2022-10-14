import React from 'react'
import Todo from './Todo'

export default function Todos({ todos }) {
  return (
    todos.map(todo => {
      return (
        <div>
          <Todo key={todo.id} todo={todo} />
        </div>
      )
    })
  )
}
