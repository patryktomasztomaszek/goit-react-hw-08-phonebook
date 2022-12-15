import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import ContactListFilter from './ContactListFilter/ContactListFilter';
import styles from './App.module.scss';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, updateFilter } from '../redux/actions';

export const App = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} already existst in Contact Book!`);
    } else if (contacts.some(contact => contact.number === number)) {
      Notify.failure(`${number} number already exists in Contact Book!`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(addContact(newContact));
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleUpdateFilter = query => {
    dispatch(updateFilter(query));
  };

  const getFilteredList = () => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  const { container } = styles;

  return (
    <main className={container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <ContactListFilter updateFilter={handleUpdateFilter} />
      <ContactList
        contacts={getFilteredList()}
        deleteContact={handleDeleteContact}
      />
    </main>
  );
};
