import GetContactsFromStorage from 'components/GetContactsFromStorage';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './contacts-actions';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const initialContactsItems = GetContactsFromStorage(data);

const itemReducer = createReducer(data, {
  [addContact]: (state, { payload }) => {
    const newStateAfterAdd = [...state, { ...payload }];
    // localStorage.setItem('contacts', JSON.stringify(newStateAfterAdd));
    return newStateAfterAdd;
  },

  [deleteContact]: (state, { payload }) => {
    const newStateAfterDelete = [
      ...state.filter(contact => contact.id !== payload),
    ];
    // localStorage.setItem('contacts', JSON.stringify(newStateAfterDelete));
    return newStateAfterDelete;
  },
});

// const itemReducer = (state = initialContactsItems, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       const newStateAfterAdd = [...state, { ...payload }];
//       localStorage.setItem('contacts', JSON.stringify(newStateAfterAdd));
//       return newStateAfterAdd;
//     case DELETE_CONTACTS:
// const newStateAfterDelete = [
//   ...state.filter(contact => contact.id !== payload),
// ];
// localStorage.setItem('contacts', JSON.stringify(newStateAfterDelete));
// return newStateAfterDelete;
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export const contactsReduser = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
