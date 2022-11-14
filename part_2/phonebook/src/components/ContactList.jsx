import React from 'react';
import { Contact } from './Contact';

export const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <table>
      <tbody>
        {contacts.map((person) => (
          <Contact
            key={person?.id}
            person={person}
            onDeleteContact={deleteHandler}
          />
        ))}
      </tbody>
    </table>
  );
};
