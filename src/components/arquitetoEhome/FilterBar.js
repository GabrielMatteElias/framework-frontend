import React from 'react';
import styles from './FilterBar.module.css';

const FilterBar = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className={styles.filter_bar}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`${styles.filter_button} ${selectedFilter === filter.id ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
