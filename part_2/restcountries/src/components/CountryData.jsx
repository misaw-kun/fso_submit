import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WeatherData } from './WeatherData';

export const CountryData = ({ country }) => {
  const { name, languages, capital, area, flags } = country;
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const [lat, lon] = country?.capitalInfo?.latlng;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
      .then((res) => setWeatherData(res.data));
  }, [country]);

  console.log(weatherData);

  return (
    <>
      <h1>{name.common}</h1>
      <p>
        Capital: <strong>{capital[0]}</strong>
      </p>
      <p>
        Area: <strong>{area}</strong>
      </p>
      <strong>languages: </strong>
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={flags.png} />
      <WeatherData capital={capital} weatherData={weatherData} />
    </>
  );
};
