import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import TodoList from './components/TodoList';
import NewsFeed from './components/NewsFeed';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

function initialStateWeather() {
  /**
   * A blank initial state is needed so that the Weather component does not
   * try to access API data before it has been fetched.
   */
  return { name: '', sys: {country: ''}, weather: [{description: '', icon: ''}], main: {temp: 0, temp_min: 0, temp_max: 0, feels_like: 0} }
}

function initialStateNews() {
  return { articles: [ { title: '', author: '', url: '', source: {name: ''} } ] }
}

function App() {

  const [ userInfo, setUserInfo ] = useState({ name: '', city: 'Toronto', tempType: 'C' });
  const [ weatherData, setWeatherData ] = useState(initialStateWeather());
  const [ todos, setTodos ] = useState([]);
  const [ newsApiUrl, setNewsApiUrl ] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
  const [ newsData, setNewsData ] = useState(initialStateNews())

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

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInfo.city}&appid=${WEATHER_API_KEY}`

  useEffect(() => {
    fetch(weatherApiUrl)
    .then((res) => res.json())
    .then((data) => setWeatherData(data));
  }, [weatherApiUrl, userInfo.city])

  // get news

  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    fetch(newsApiUrl)
    .then((res) => res.json())
    .then((data) => setNewsData(data));
  }, [newsApiUrl])

  // userInfo functions

  function updateName(newName) {
    /**
     * Updates name in 'userInfo' state.
     * @param {String} newName    New name to set.
     */
    const newUserInfo = {...userInfo, name: newName};
    setUserInfo(newUserInfo);
  }

  function updateCity(newCity) {
    /**
     * Updates city in 'userInfo' state.
     * @param {String} newCity    New city to set.
     */
    const newUserInfo = {...userInfo, city: newCity};
    setUserInfo(newUserInfo);
  }

  function updateTempType(type) {
    /**
     * Updates tempType in 'userInfo' state.
     * @param {String} type    Temperature type to set.
     */
    const newUserInfo = {...userInfo, tempType: type};
    setUserInfo(newUserInfo);
  }

  // todos functions
  
  function addTodo(todoInfo) {
    /**
     * Add new todo to 'todos' array.
     * @param {String} todoInfo    Todo description.
     */
    const newTodo = {id: uuidv4(), info: todoInfo};
    setTodos(prevTodos => {return [...prevTodos, newTodo]});
  }

  function deleteTodo(id) {
    /**
     * Delete a todo from the 'todos' array.
     * @param {String} id    ID of the todo.
     */
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  // newsfeed functions

  function searchNews(keyword) {
    const newUrl = `https://newsapi.org/v2/everything?q=${keyword}&pageSize=20&sortBy=popularity&apiKey=${NEWS_API_KEY}`
    setNewsApiUrl(newUrl);
  }

  return (
    <div className='flex-col app'>
      <Header name={userInfo.name} updateName={updateName} />
      <div className='center weather-todolist'>
        <Weather 
          data={weatherData}
          tempType={userInfo.tempType}
          updateTempType={updateTempType}
          updateCity={updateCity}
         />
        <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      </div>
      <NewsFeed newsData={newsData} searchNews={searchNews} />
    </div>
  );
}

export default App;
