import { ADD_CONTACTS, DELETE_CONTACTS, SET_FILTER } from './contacts-types';

export const addContact = (name, number) => ({
  type: ADD_CONTACTS,
  payload: { name, number },
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACTS,
  payload: contactId,
});

export const setFilter = text => ({
  type: SET_FILTER,
  payload: text,
});
