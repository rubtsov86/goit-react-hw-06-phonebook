import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReduser } from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
