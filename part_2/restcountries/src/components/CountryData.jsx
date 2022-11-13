import React from 'react';

export const CountryData = ({ country }) => {
  return (
    <>
      <h1>{country?.name.common}</h1>
      <p>
        Capital: <strong>{country?.capital[0]}</strong>
      </p>
      <p>
        Area: <strong>{country?.area}</strong>
      </p>
      <strong>languages: </strong>
      <ul>
        {Object.values(country?.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country?.flags.png} />
    </>
  );
};
