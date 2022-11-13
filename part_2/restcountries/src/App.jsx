import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  // for matches less than 10 countries
  function mapCountries() {
    return filteredCountries.map((country) => (
      <p key={country.name.common}>{country.name.common}</p>
    ));
  }

  // for exactly one result for the query
  function getCountryData() {
    const country = filteredCountries[0];
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
  }

  return (
    <>
      <label htmlFor="search-country">Find Countries:</label>
      <input
        type="search"
        id="search-country"
        name="q"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query ? (
        filteredCountries.length < 10 ? (
          filteredCountries.length === 1 ? (
            getCountryData()
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
