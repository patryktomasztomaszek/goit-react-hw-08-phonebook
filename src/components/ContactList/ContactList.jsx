import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

// Component for contacts data rendering
function ContactList({ contacts, deleteContact }) {
  // CSS classes => style variables
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

  return (
    <section className={container}>
      {/* Checking if contact data is empty */}
      {contacts.length !== 0 ? (
        // If not, displaying contact list
        <ul className={contact_list}>
          {/* Mapping props data for every unique contact */}
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={contact_list__item}>
                <div className={contact_list__info}>
                  <p className={contact_list__name}>{contact.name}</p>
                  <p className={contact_list__number}>{contact.number}</p>
                </div>

                {/* Button (trigger) for contact deleting via looking for included valid id */}
                <button
                  className={contact_list__button}
                  onClick={() => deleteContact(contact.id)}
                >
                  🗑️
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        // If empty, return proper info
        <h2 className={contact_list__notification}>No contacts!</h2>
      )}
    </section>
  );
}

// Checking proptypes
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
