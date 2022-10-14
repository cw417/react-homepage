import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';

function initialState() {
  return { name: "", sys: {country: ""}, weather: [{description: "", icon: ""}] }
}

function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "", location: "toronto" });
  const [ weatherData, setWeatherData ] = useState(initialState());
  
  // local storage setup

  const LOCAL_STORAGE_KEY = 'homepageApp.info'

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUserInfo) setUserInfo(storedUserInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo))
  }, [userInfo]);

  // get current weather

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = 43.7001;
  const lon = -79.4163;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`

  useEffect(() => {
    fetch(weatherApiUrl)
    .then((res) => res.json())
    .then((data) => setWeatherData(data));
  }, [weatherApiUrl])

  // functions

  function updateName(newName) {
    const newUserInfo = {...userInfo, name: newName};
    setUserInfo(newUserInfo);
  }

  return (
    <div className="app">
      <Header name={userInfo.name} updateName={updateName} />
      <div className="main">
        <Weather data={weatherData} />
        <Todos />
      </div>
    </div>
  );
}

export default App;
