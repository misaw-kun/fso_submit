import React, { useEffect } from 'react';
import contactService from './services/contacts';

import { useState } from 'react';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Search } from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');

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

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      contactService.create(newContact).then((contact) => {
        setPersons(persons.concat(contact));
        setNewName('');
        setNewNumber('');
      });
    }
  }

  function handleDelete(person) {
    if (window.confirm(`Delete ${person.name} ?`)) {
      contactService
        .destroy(person.id)
        .then(() =>
          setPersons(persons.filter((contact) => contact.id !== person.id))
        );
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
