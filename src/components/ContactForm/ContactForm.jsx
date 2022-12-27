import React from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/phonebookApi';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already existst in Contact Book!`);
    } else if (contacts.some(contact => contact.number === number)) {
      alert(`${number} number already exists in Contact Book!`);
    } else {
      try {
        await addContact({
          name,
          number,
        });
      } catch (error) {
        alert('Something went south... Try again!');
      }
    }
  };

  const { form, form__label, form__input, form__button } = styles;

  return (
    <section>
      <form className={form} onSubmit={onSubmit}>
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

export default ContactForm;
