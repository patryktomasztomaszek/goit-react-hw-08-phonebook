import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListFilter.module.scss';

// Component for filter input, and input query update trigger
function ContactListFilter({ updateFilter }) {
  // CSS classes => style variables
  const { filter, filter__label, filter__input } = styles;

  return (
    <section className={filter}>
      <label className={filter__label} htmlFor="filter">
        Filter contacts by name:
      </label>
      <input
        className={filter__input}
        onChange={updateFilter}
        name="filter"
      ></input>
    </section>
  );
}

ContactListFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default ContactListFilter;
