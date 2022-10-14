import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';

function initialState() {
  /**
   * A blank initial state is needed so that the Weather component does not
   * try to access   API data before it has been fetched.
   */
  return { name: "", sys: {country: ""}, weather: [{description: "", icon: ""}], main: {temp: 0, temp_min: 0, temp_max: 0, feels_like: 0} }
}

function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "", tempType: "C" });
  const [ weatherData, setWeatherData ] = useState(initialState());
  const [ todos, setTodos ] = useState([]);
  
  // local storage setup for 'userInfo'

  const LOCAL_STORAGE_KEY_INFO = 'homepageApp.info'

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INFO));
    if (storedUserInfo) setUserInfo(storedUserInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_INFO, JSON.stringify(userInfo))
  }, [userInfo]);
  
  // local storage setup for 'todos'

  const LOCAL_STORAGE_KEY_TODOS = 'homepageApp.todos'
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS))
    if (storedTodos) setTodos(storedTodos);
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }, [todos])

  
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
    /**
     * Updates name in 'userInfo' state.
     * @param {String} newName    New name to add.
     */
    const newUserInfo = {...userInfo, name: newName};
    setUserInfo(newUserInfo);
  }

  function updateTempType(type) {
    /**
     * Updates tempType in 'userInfo' state.
     * @param {String} type    Temperature type to set.
     */
    const newUserInfo = {...userInfo, tempType: type};
    setUserInfo(newUserInfo);
    console.log(userInfo);
  }

  return (
    <div className="app">
      <Header name={userInfo.name} updateName={updateName} />
      <div className="main">
        <Weather 
          data={weatherData}
          tempType={userInfo.tempType}
          updateTempType={updateTempType}
         />
        <Todos />
      </div>
    </div>
  );
}

export default App;
