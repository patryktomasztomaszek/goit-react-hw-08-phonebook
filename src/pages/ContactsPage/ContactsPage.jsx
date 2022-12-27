import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import ContactListFilter from '../../components/ContactListFilter/ContactListFilter';

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <ContactListFilter />
      <ContactList />
    </>
  );
}
