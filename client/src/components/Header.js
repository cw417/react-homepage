import React, { useRef } from 'react'
import Input from './Input';

export default function Header({ name, updateName }) {

  const nameRef = useRef();

  function handleUpdateName() {
    updateName(nameRef.current.value);
  }

  function handleKeyPress(event) {
    /**
     * Watches for 'Enter' keypress.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      handleUpdateName();
    }
  }


  return (
    <div className='header'>
      <div className='header--title' style={{display:(name === "") ? "none" : "block"}}>Hello, {name}!</div>
      <div style={{display:(name === "") ? "block" : "none"}}>
        <Input 
          updateFunction={updateName}
          labelText={"What is your name?"}
          buttonText={"Update"}
          placeholder={"Name"}
        />
      </div>
    </div>
  )
}
