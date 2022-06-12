import ContactListItem from '../ContactListItem';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return { contacts: items, filter };
};

export default connect(mapStateToProps, null)(ContactList);
