import React, { useState } from 'react'
import ButtonToggle from './ButtonToggle';

const types = ["C", "F"];

export default function ButtonGroup() {
  /* Button group for toggling temperature display between C and F */
  
  const [ active, setActive ] = useState(types[0]);

  function toggleActive(type) {
    /**
     * Toggles 'active' state to given type.
     * @param {String} type    Type to set to active.
     */
    setActive(type);
  }

  return (
    <div>
      {types.map(type => {
        return(
          <ButtonToggle
            key={type}
            type={type}
            active={active}
            toggleActive={toggleActive}
          />
        )
      })}
    </div>
  )
}
