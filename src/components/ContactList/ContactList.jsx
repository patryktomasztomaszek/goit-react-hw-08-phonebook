import React from 'react';
import styles from './ContactList.module.scss';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'services/phonebookApi';

// Component for contacts data rendering
function ContactList() {
  const {
    data: contacts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);
  const [deleteItemContact] = useDeleteContactMutation();

  let filteredContacts = useMemo(() => {
    return contacts.filter(contact => contact.name.includes(filter));
  }, [contacts, filter]);

  const {
    container,
    contact_list,
    contact_list__item,
    contact_list__info,
    contact_list__name,
    contact_list__number,
    contact_list__button,
    contact_list__notification,
  } = styles;

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isSuccess) {
    filteredContacts.length !== 0
      ? (content = (
          <ul className={contact_list}>
            {filteredContacts.map(contact => {
              return (
                <li key={contact.id} className={contact_list__item}>
                  <div className={contact_list__info}>
                    <p className={contact_list__name}>{contact.name}</p>
                    <p className={contact_list__number}>{contact.number}</p>
                  </div>

                  <button
                    className={contact_list__button}
                    onClick={() => deleteItemContact(contact.id)}
                  >
                    🗑️
                  </button>
                </li>
              );
            })}
          </ul>
        ))
      : (content = (
          <h2 className={contact_list__notification}>No contacts!</h2>
        ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section className={container}>{content}</section>;
}

export default ContactList;
