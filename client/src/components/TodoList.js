import React from 'react'
import Todos from './Todos'
import Input from './Input'

export default function TodoList({ todos, addTodo }) {
  return (
    <div className="flex-col">
      <Input 
        labelText={""}
        buttonText={"Add"}
        placeholder={"Todo"}
        updateFunction={addTodo}
      />
      <div className="flex-col">
        <Todos todos={todos} />
      </div>
    </div>
  )
}
