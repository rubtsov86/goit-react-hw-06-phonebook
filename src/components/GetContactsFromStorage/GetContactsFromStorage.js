const GetContactsFromStorage = data => {
  const savedContacts = localStorage.getItem('contacts');

  if (!savedContacts) {
    return data;
  }
  const parsedContacts = JSON.parse(savedContacts);

  return parsedContacts;
};

export default GetContactsFromStorage;
