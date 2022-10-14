import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';

function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "", location: "toronto" });
  
  // local storage setup

  const LOCAL_STORAGE_KEY = 'homepageApp.info'

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUserInfo) setUserInfo(storedUserInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo))
  }, [userInfo]);

  // functions

  function updateName(newName) {
    const newUserInfo = {...userInfo, name: newName};
    setUserInfo(newUserInfo);
  }

  return (
    <div className="app">
      <Header name={userInfo.name} updateName={updateName} />
      <div className="main">
        <Weather /> 
        <Todos />
      </div>
    </div>
  );
}

export default App;
