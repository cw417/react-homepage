import React, { useState, useEffect } from 'react'

export default function Clock() {

  const [ date, setdate ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timer);
    }
  }, [])

  function refresh() {
    /**
     * Refresh clock to current time.
     */
    setdate(new Date());
  }

  return (
    <span className='clock'>{date.toLocaleTimeString()}</span>
  )
}
