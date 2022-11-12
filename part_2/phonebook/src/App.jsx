import React from 'react';
import { useState } from 'react';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Search } from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(
        persons.concat({
          id: persons.length + 1,
          name: newName,
          number: newNumber,
        })
      );
    }
  }

  const filteredContacts = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

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
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
