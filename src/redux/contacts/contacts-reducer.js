import { nanoid } from 'nanoid';
import { ADD_CONTACTS, DELETE_CONTACTS, SET_FILTER } from './contacts-types';
import GetContactsFromStorage from 'components/GetContactsFromStorage';
import { combineReducers } from 'redux';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialContactsItems = GetContactsFromStorage(data);

const itemReducer = (state = initialContactsItems, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return [...state, { ...payload, id: nanoid() }];
    case DELETE_CONTACTS:
      return [...state.filter(contact => contact.id !== payload)];
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};

export const contactsReduser = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
