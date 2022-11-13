import React from 'react';

export const WeatherData = ({ capital, weatherData }) => {
  return (
    <>
      <h1>Weather in {capital[0]}</h1>
      <p>
        Temperature: <strong>{weatherData?.main?.temp} &#8451;</strong>
      </p>
      {/* weatherData?.weather?.[0]?.icon */}
      <img
        src={` http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
      />
      <p>
        Wind: <strong>{weatherData?.wind?.speed} m/s</strong>
      </p>
    </>
  );
};
