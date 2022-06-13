export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getFilteredContacts = state =>
  getContacts(state).filter(contact =>
    contact.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
