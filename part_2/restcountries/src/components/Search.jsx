import React from 'react';

export const Search = ({ query, onQueryChange }) => {
  return (
    <>
      <label htmlFor="search-country">Find Countries:</label>
      <input
        type="search"
        id="search-country"
        name="q"
        defaultValue={query}
        onChange={onQueryChange}
      />
    </>
  );
};
