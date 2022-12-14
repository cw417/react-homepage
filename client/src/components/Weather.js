import ButtonGroup from './ButtonGroup';
import Input from './Input';
import React from 'react';
import { FiRepeat } from 'react-icons/fi';

export default function Weather({ data, tempType, updateTempType, updateCity }) {

  
  const displayC = (tempType === 'C') ? 'block' : 'none';
  const displayF = (tempType === 'F') ? 'block' : 'none';
  

  const formattedName = `${data.name}, ${data.sys.country}`;
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const tempC = Math.round(convertTempKC(data.main.temp)) + '\u2103';
  const feelsLikeC = Math.round(convertTempKC(data.main.feels_like)) + '\u2103';
  const tempMinC = Math.round(convertTempKC(data.main.temp_min)) + '\u2103';
  const tempMaxC = Math.round(convertTempKC(data.main.temp_max)) + '\u2103';

  const tempF = Math.round(convertTempKF(data.main.temp)) + '\u2109';
  const feelsLikeF = Math.round(convertTempKF(data.main.feels_like)) + '\u2109';
  const tempMinF = Math.round(convertTempKF(data.main.temp_min)) + '\u2109';
  const tempMaxF = Math.round(convertTempKF(data.main.temp_max)) + '\u2109';

  function capitalize(s) {
    /**
     * Capitalize the first character of a string.
     * @param {String} s  string to capitalize
     */
    if (s.length === 0) {return ''};
    if (s.length === 1) {return s};
    return s[0].toUpperCase() + s.slice(1);
  }
  
  function convertTempKC(k) {
    /**
     * Converts Kelvin to Celcius
     * @param {String} k    Kelvin temperature to convert.
     */
    return k - 273.15
  }

  function convertTempKF(k) {
    /**
     * Converts Kevlin to Farenheit.
     * @param {String} k    Kelvin temperature to convert.
     */
    return k * 9 / 5 - 459.67
  }
  
  return (
    <div className='weather'>
      <div className='container shadow'>
        <div className='text-center container-title'>Weather</div>
          <Input
            updateFunction={updateCity}
            buttonText={<FiRepeat />}
            placeholder={"City"}
          />
        <div className='flex-row weather-info'>
          <div>
            <div className='weather-city font-15'>{formattedName}</div>
            <div className='flex-row weather-description-container'>
              <div className='weather-discription'>{capitalize(data.weather[0].description)}</div>
              <img src={icon} alt='Weather icon' />
            </div>
          </div>
          <div>
            <div className='button-group'>
              <ButtonGroup updateTempType={updateTempType} />
            </div>
            <div style={{display: displayC}} >
                <div>Temp: {tempC}</div>
                <div>Feel: {feelsLikeC}</div>
                <div>Min: {tempMinC}</div>
                <div>Max: {tempMaxC}</div>
            </div>
            <div style={{display: displayF}} >
              <div>Temp: {tempF}</div>
              <div>Feel: {feelsLikeF}</div>
              <div>Min: {tempMinF}</div>
              <div>Max: {tempMaxF}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
