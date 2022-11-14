import React, { useEffect } from 'react';
import contactService from './services/contacts';

import { useState } from 'react';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Search } from './components/Search';
import { Notification } from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    contactService.getAll().then((contacts) => setPersons(contacts));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    // check if contact exists
    if (persons.some((person) => person.name === newContact.name)) {
      let existingData = persons.filter(
        (person) => person.name === newContact.name
      );
      // console.log(existingData);
      // check if a new number was added or left empty
      if (
        newContact.number !== existingData[0].number &&
        window.confirm(
          `${newContact.name} already exists in the phonebook, replace the old number with new one ?`
        )
      ) {
        contactService
          .update(existingData[0].id, {
            ...existingData[0],
            number: newContact.number,
          })
          .then(() => {
            // optimistic ui: locally update data for re render ( or make a network request! )
            let newState = persons.map((person) => {
              if (person.id === existingData[0].id) {
                return { ...existingData[0], number: newNumber };
              }
              return person;
            });

            setPersons(newState);
          })
          .then(() => {
            setNotification('contact updated');
            setTimeout(() => setNotification(null), 3000);
          })
          .catch(() => {
            setError(true);
            setNotification(
              `${existingData[0].name} is already deleted from server`
            );
            setTimeout(() => setNotification(null), 3000);
          });
      } else {
        setNotification(`contact already exists`);
        setError(true);
        setTimeout(() => setNotification(null), 3000);
        setError(false);
        return;
      }
    } else {
      contactService.create(newContact).then((contact) => {
        setPersons(persons.concat(contact));
        setNewName('');
        setNewNumber('');
        setNotification(`${contact.name} added to phonebook`);
        setTimeout(() => setNotification(null), 3000);
      });
    }
  }

  function handleDelete(person) {
    if (window.confirm(`Delete ${person.name} ?`)) {
      contactService.destroy(person.id).then(() => {
        setPersons(persons.filter((contact) => contact.id !== person.id));
        setNotification(`${person.name} deleted from phonebook`);
      });
    }
  }

  const filteredContacts = query
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification message={notification} isError={error} />}
      <Search query={query} onChangeQuery={(e) => setQuery(e.target.value)} />
      <h2>Add a new contact</h2>
      <AddContact
        onSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <ContactList contacts={filteredContacts} deleteHandler={handleDelete} />
    </div>
  );
};

export default App;
