import React, { useRef } from 'react'

export default function Header({ name, updateName }) {

  const nameRef = useRef();

  function handleUpdateName() {
    updateName(nameRef.current.value);
  }

  return (
    <div className='header'>
      <div style={{display:(name === "") ? "none" : "block"}}>Hello, {name}!</div>
      <div style={{display:(name === "") ? "block" : "none"}}>
        <label className='name-input--label'>What is your name?</label>
        <input className="name-input--input" ref={nameRef} type="text" />
        <button className='name-input--button' onClick={handleUpdateName}>Update</button>
      </div>
    </div>
  )
}
