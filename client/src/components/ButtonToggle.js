import React from 'react'

export default function ButtonToggle({ type, active, toggleActive, updateTempType }) {

  const opacity = (active === type) ? 1 : 0.6;

  function handleClick() {
    /**
     * Toggle active button to current type.
     */
    toggleActive(type);
    updateTempType(type);
  }

  return (
    <button
    className='button temp-type-button'
      style={{opacity:opacity}}
      onClick={handleClick}
    >
      {type}
    </button>
  )
}
