import React from 'react';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <div
      style={{
        fontSize: 40,
        paddingLeft: 20,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
}

export default App;
