import styles from './CategoryChips.module.scss';

export default function CategoryChips({ categories, active, onSelect }) {
  return (
    <div className={styles.chipsContainer}>
      <button
        className={`${styles.chip} ${active === 'todos' ? styles.active : ''}`}
        onClick={() => onSelect('todos')}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.chip} ${active === category ? styles.active : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
