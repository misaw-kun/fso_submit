import React from 'react';
import { Contact } from './Contact';

export const ContactList = ({ contacts }) => {
  return (
    <table>
      <tbody>
        {contacts.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </tbody>
    </table>
  );
};
