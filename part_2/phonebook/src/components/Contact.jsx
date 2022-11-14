import React from 'react';

export const Contact = ({ person, onDeleteContact }) => {
  return (
    <tr>
      <td>{person?.name}</td>
      <td>{person?.number}</td>
      <td>
        <button onClick={() => onDeleteContact(person)}>delete</button>
      </td>
    </tr>
  );
};
