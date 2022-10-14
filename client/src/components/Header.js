import React, { useRef } from 'react'

export default function Header({ name, updateName }) {

  const nameRef = useRef();

  function handleUpdateName() {
    updateName(nameRef.current.value);
  }

  return (
    <>
      <div style={{display:(name === "") ? "none" : "block"}}>Hello, {name}!</div>
      <div style={{display:(name === "") ? "block" : "none"}}>
        <label>What is your name?</label>
        <input ref={nameRef} type="text" />
        <button onClick={handleUpdateName}>Add</button>
      </div>
    </>
  )
}
