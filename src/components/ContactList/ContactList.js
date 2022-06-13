import ContactListItem from '../ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
