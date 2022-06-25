import React from "react";
import Display from "./Display";
import style from './Display.module.css'
import { FiArrowRight } from 'react-icons/fi'

function ForeCast() {

  const [city, setCity] = React.useState('');
  const [error, setError] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState({});

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    const api_key = '82ed26d2aa7301a9416aa4cfb3e3df34';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    // fetch(url)
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.cod !== 200) {
    //       throw new Error()
    //     }
    //     setWeatherData(response);
    //     setError(false);
    //     console.log("me running");
    //   })
    //   .catch(err => {
    //     setError(true);
    //     console.log(err.message);
    //   });

    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) {
          throw new Error();
        }
        setWeatherData(data);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    }

    getData();
    setCity('');
  }

  return (
    <div>
      <form onSubmit={getForecast}>
        <div className={style['webflow-style-input']}>
          <input
            type="text"
            placeholder="Enter city name"
            className="form--input"
            name="topText"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button><FiArrowRight /></button>
        </div>
      </form>

      <Display
        weatherData={weatherData}
        error={error}
      />

    </div>
  )
}

export default ForeCast;
