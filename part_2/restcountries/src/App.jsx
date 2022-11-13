import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search';
import { List } from './components/List';

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

  return (
    <>
      <Search query={query} onQueryChange={(e) => setQuery(e.target.value)} />
      <List query={query} result={filteredCountries} />
    </>
  );
};
