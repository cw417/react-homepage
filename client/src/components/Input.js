import React, { useRef } from 'react'

export default function Input({ updateFunction, labelText, buttonText, placeholder }) {
  
  const infoRef = useRef();

  function handleUpdateInfo() {
    /**
     * Calls the update function and passes in the infoRef as a string.
     * Clears the inputRef when finished.
     */
    const info = infoRef.current.value;
    if (info === '') return;
    updateFunction(info);
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
      <label className='input--label'>{labelText}</label>
      <input className='input--input' ref={infoRef} onKeyUp={handleKeyPress} type='text' placeholder={placeholder} />
      <button className='input--button' onClick={handleUpdateInfo}>{buttonText}</button>
    </div>
  )
}
