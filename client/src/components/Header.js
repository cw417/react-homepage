import React, { useRef } from 'react'

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
        <label className='name-input--label'>What is your name?</label>
        <input className="name-input--input" ref={nameRef} onKeyUp={handleKeyPress} type="text" />
        <button className='name-input--button' onClick={handleUpdateName}>Update</button>
      </div>
    </div>
  )
}
