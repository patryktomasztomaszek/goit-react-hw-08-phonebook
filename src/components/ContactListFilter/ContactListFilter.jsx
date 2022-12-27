import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './ContactListFilter.module.scss';

// Component for filter input, and input query update trigger
function ContactListFilter() {
  const dispatch = useDispatch();

  const setFilterQuery = event => {
    const query = event.currentTarget.value;
    dispatch(setFilter(query));
  };

  const { filter, filter__label, filter__input } = styles;

  return (
    <section className={filter}>
      <label className={filter__label} htmlFor="filter">
        Filter contacts by name:
      </label>
      <input
        className={filter__input}
        onChange={setFilterQuery}
        name="filter"
      ></input>
    </section>
  );
}

export default ContactListFilter;
