import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';

function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "" });
  
  // local storage setup
  const LOCAL_STORAGE_KEY = 'homepageApp.info'

  // local storage setup
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUserInfo) setUserInfo(storedUserInfo);
  }, []);

  // local storage setup
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo))
  }, [userInfo]);

  function updateName(newName) {
    const newUserInfo = {...userInfo, name: newName};
    setUserInfo(newUserInfo);
  }

  return (
    <div>
      <Header name={userInfo.name} updateName={updateName} />
      <Weather />
      <Todos />
    </div>
  );
}

export default App;
