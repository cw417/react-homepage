import React, { useRef } from 'react'

export default function Input({ updateFunction, labelText, buttonText, placeholder }) {
  
  const infoRef = useRef();

  function handleUpdateInfo() {
    /**
     * Calls the update function and passes in the infoRef as a string.
     * Clears the inputRef when finished.
     */
    updateFunction(infoRef.current.value);
    infoRef.current.value = null;
  }

  function handleKeyPress(event) {
    /**
     * Watches for 'Enter' keypress.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      handleUpdateInfo();
    }
  }

  return (
    <div>
      <label className='name-input--label'>{labelText}</label>
      <input className="name-input--input" ref={infoRef} onKeyUp={handleKeyPress} type="text" placeholder={placeholder} />
      <button className='name-input--button' onClick={handleUpdateInfo}>{buttonText}</button>
    </div>
  )
}
