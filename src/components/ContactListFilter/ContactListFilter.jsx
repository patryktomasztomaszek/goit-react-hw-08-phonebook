import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/slices/filterSlice';
import styles from './ContactListFilter.module.scss';

// Component for filter input, and input query update trigger
function ContactListFilter() {
  const { filter, filter__label, filter__input } = styles;

  const dispatch = useDispatch();

  const onChange = event => {
    const query = event.currentTarget.value;
    dispatch(updateFilter(query));
  };

  return (
    <section className={filter}>
      <label className={filter__label} htmlFor="filter">
        Filter contacts by name:
      </label>
      <input
        className={filter__input}
        onChange={onChange}
        name="filter"
      ></input>
    </section>
  );
}

export default ContactListFilter;
