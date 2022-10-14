import React from 'react'

export default function ButtonToggle({ type, active, toggleActive }) {

  const opacity = (active === type) ? 1 : 0.6;

  function handleClick() {
    /**
     * Toggle active button to current type.
     */
    toggleActive(type);
  }

  return (
    <button
      style={{opacity:opacity}}
      onClick={handleClick}
    >
      {type}
    </button>
  )
}
