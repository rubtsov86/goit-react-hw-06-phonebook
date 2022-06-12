import { useState } from 'react';
import s from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

function Phonebook({ contacts, addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'number':
        setNumber(evt.currentTarget.value);
        break;
      default:
        console.log('wrong name');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContactToContacts(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContactToContacts = (name, number) => {
    const isNameInContacts = contacts
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    isNameInContacts
      ? alert(`${name} is already in contacts`)
      : addContact(name, number);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          onChange={handleInput}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.input}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          onChange={handleInput}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.input}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { contacts: state.contacts.items };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
