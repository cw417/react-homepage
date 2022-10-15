import React from 'react'
import Todo from './Todo'
import Input from './Input'
import { FiPlus } from 'react-icons/fi'

export default function TodoList({ todos, addTodo, deleteTodo }) {

  function createList() {
    return (
      todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        )
      })
    )
  }

  return (
    <div className='container flex-col'>
      <div className='text-center container-title'>Todo List</div>
      <Input 
        labelText={''}
        buttonText={<FiPlus />}
        placeholder={'Todo'}
        updateFunction={addTodo}
      />
      <div className='flex-col'>
        {createList()}
      </div>
    </div>
  )
}
