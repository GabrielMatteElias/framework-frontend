import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.search_form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.search_input}
        placeholder={placeholder || "Buscar..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.search_button}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
