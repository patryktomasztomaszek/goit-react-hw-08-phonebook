import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

function ContactForm({ addContact }) {
  // CSS classes => style variables
  const { form, form__label, form__input, form__button } = styles;

  return (
    <section>
      <form className={form} onSubmit={addContact}>
        <label className={form__label} htmlFor="name">
          Name
        </label>
        <input
          className={form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={form__label}> Number</label>
        <input
          className={form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={form__button}>Add contact</button>
      </form>
    </section>
  );
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
