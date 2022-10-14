import React from 'react'

export default function Weather({ data }) {

  const formattedName = `${data.name}, ${data.sys.country}`;

  return (
    <div className='weather'>
      <div>{formattedName}</div>
      <div>Current weather: {data.weather[0].description}</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
