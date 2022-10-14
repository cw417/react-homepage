import React, { useState, useEffect } from 'react'

export default function Weather({ data }) {

  const formattedName = `${data.name}, ${data.sys.country}`;
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  
  return (
    <div className='weather'>
      <div>{formattedName}</div>
      <div>Current weather: {data.weather[0].description}</div>
      <img src={icon} alt='Weather icon' />
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
