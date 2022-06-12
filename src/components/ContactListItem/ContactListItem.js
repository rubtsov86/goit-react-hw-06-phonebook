import React from 'react';
import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import * as actions from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.button} id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: evt => dispatch(actions.deleteContact(evt.currentTarget.id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactListItem);
