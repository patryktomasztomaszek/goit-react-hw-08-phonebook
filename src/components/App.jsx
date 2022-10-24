import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import ContactListFilter from './ContactListFilter/ContactListFilter';
import styles from './App.module.scss';
import { Notify } from 'notiflix';

export const App = () => {
  // useState Hook for contacts data storage (array of objects) =>
  // [{id: string, name: string, number: number}, {...}]
  const [contacts, setContacts] = useState([]);
  // useState Hook for filter query storage (string)
  const [filter, setFilter] = useState('');

  // Function for adding contact via form submit
  const addContact = event => {
    event.preventDefault();
    // Getting contact data from event info
    const form = event.currentTarget.elements;
    const name = form.name.value;
    const number = form.number.value;

    // Checking for possible duplicates - name & number
    if (contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} already existst in Contact Book!`);
    } else if (contacts.some(contact => contact.number === number)) {
      Notify.failure(`${number} number already existst in Contact Book!`);
    } else {
      // If there is no duplicates - add contact
      // Contact construct for new contact data
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      // Adding new contact to 'contact' as last position
      setContacts(contacts => (contacts = [newContact, ...contacts]));
    }
  };

  // Function for updating folter query via onSubmit method
  const updateFilter = event => {
    // Getting filter query data from event info
    const query = event.currentTarget.value;
    // Updating filter query
    setFilter(query);
  };

  // Function for filtering cintact data via filter query (searching by name)
  const getFilteredList = () => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  // Function for deleting contact from contacts data via id check
  const deleteContact = id => {
    // Filtering every contact position for id match, updating contacts data
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  // CSS styling variables => App.module.scss
  const { container } = styles;

  return (
    <main className={container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <ContactListFilter updateFilter={updateFilter} />
      <ContactList contacts={getFilteredList()} deleteContact={deleteContact} />
    </main>
  );
};
