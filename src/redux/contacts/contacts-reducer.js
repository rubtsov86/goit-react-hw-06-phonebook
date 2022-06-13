import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './contacts-actions';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemReducer = createReducer(data, {
  [addContact]: (state, { payload }) => [...state, { ...payload }],

  [deleteContact]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export const contactsReduser = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
