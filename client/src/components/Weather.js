import React, { useState, useEffect } from 'react'

export default function Weather() {

  const [ data, setData ] = useState();
  
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = 43.7001;
  const lon = -79.4163;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`

  useEffect(() => {
    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((info) => setData(info));
  }, [weatherApiUrl]);

  const formattedName = `${data.name}, ${data.sys.country}`;

  let icon = '';
  switch (data.weather[0].main) {
    case 'Thunderstorm':
      icon = 'http://openweathermap.org/img/wn/11d.png'
      break;
    case 'Drizzle':
      icon = 'http://openweathermap.org/img/wn/10d.png'
      break;
    case 'Rain':
      icon = 'http://openweathermap.org/img/wn/10d.png'
      break;
    case 'Snow':
      icon = 'http://openweathermap.org/img/wn/13d.png'
      break;
    case 'Clear':
      icon = 'http://openweathermap.org/img/wn/01d.png'
      break;
    case 'Clouds':
      icon = 'http://openweathermap.org/img/wn/03d.png'
      break;
    default:
      icon = 'http://openweathermap.org/img/wn/02d.png'
  }

  return (
    <div className='weather'>
      <div>{formattedName}</div>
      <div>Current weather: {data.weather[0].description}</div>
      <img src={icon} alt='Weather icon' />
    </div>
  )
}
