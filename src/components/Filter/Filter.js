import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, makeFilter }) => {
  const handleInput = evt => {
    makeFilter(evt.currentTarget.value);
  };

  return (
    <label className={s.label}>
      Find Contacts by name
      <input
        type="text"
        onChange={handleInput}
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={s.input}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  makeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter } }) => {
  return { filter };
};

const mapDispatchToProps = dispatch => {
  return {
    makeFilter: text => dispatch(setFilter(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
