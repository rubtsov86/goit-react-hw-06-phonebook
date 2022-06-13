import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => ({
    payload: { name, number, id: nanoid() },
  })
);

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('contacts/setFilter');
