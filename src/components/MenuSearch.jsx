import { useState } from 'react';
import styles from './MenuSearch.module.scss';

export default function MenuSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
      {query && (
        <button onClick={handleClear} className={styles.clearBtn}>
          ✕
        </button>
      )}
      <div className={styles.icon}>🔍</div>
    </div>
  );
}
