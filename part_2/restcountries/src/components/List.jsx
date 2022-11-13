import React, { useState } from 'react';
import { CountryData } from './CountryData';

export const List = ({ query, result }) => {
  const [toggle, setToggle] = useState({});

  function handleToggle(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  // for matches less than 10 countries
  function mapCountries() {
    return result.map((country) => {
      let name = country.name.common;
      return (
        <div key={name}>
          <span>{name}</span>
          <button onClick={() => handleToggle(name)}>
            {toggle[name] ? 'hide' : 'show'}
          </button>
          {toggle[name] && <CountryData country={country} />}
        </div>
      );
    });
  }

  return (
    <>
      {query ? (
        result.length < 10 ? (
          result.length === 1 ? (
            <CountryData country={result[0]} />
          ) : (
            mapCountries()
          )
        ) : (
          <p>Too many matches, be more specific !</p>
        )
      ) : null}
    </>
  );
};
