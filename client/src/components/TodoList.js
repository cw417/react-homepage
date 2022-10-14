import React from 'react'
import Todos from './Todos'
import Input from './Input'

export default function TodoList({ todos, addTodo, deleteTodo }) {
  return (
    <div className="flex-col">
      <Input 
        labelText={""}
        buttonText={"Add"}
        placeholder={"Todo"}
        updateFunction={addTodo}
      />
      <div className="flex-col">
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}
