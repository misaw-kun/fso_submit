import React from 'react';

export const Search = ({ query, onChangeQuery }) => {
  return (
    <input
      defaultValue={query}
      onChange={onChangeQuery}
      type="search"
      name="contact-search"
    />
  );
};
