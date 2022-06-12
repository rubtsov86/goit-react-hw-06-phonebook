import React, { useEffect } from 'react';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';
import { connect } from 'react-redux';

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

const mapStateToProps = ({ contacts: { items } }) => {
  return { contacts: items };
};

export default connect(mapStateToProps, null)(App);
