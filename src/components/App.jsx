import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactListFilter from './ContactListFilter/ContactListFilter';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const { container } = styles;

  return (
    <main className={container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <ContactListFilter />
      <ContactList />
    </main>
  );
};
