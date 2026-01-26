"use client";
import Link from 'next/link';
import styles from './page.module.scss';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { categories, items } from '../../data/menuPlaceholder';

export default function CartaPage() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(categories[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(it => it.category === active && (
      !q || it.name.toLowerCase().includes(q) || it.description.toLowerCase().includes(q)
    ));
  }, [query, active]);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img src="/images/Logosinfondo.png" alt="Wöllen" className={styles.logo} />
          <Link href="/" className="btn btnSecondary">Volver al inicio</Link>
        </div>
      </header>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <motion.h1 className={styles.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Carta Digital</motion.h1>
          <div className={styles.controls}>
            <label className="visuallyHidden" htmlFor="search">Buscar</label>
            <input
              id="search"
              type="text"
              placeholder="Buscar productos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.search}
            />
          </div>

          <div className={styles.tabs} role="tablist" aria-label="Categorías">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                className={`${styles.tab} ${active === cat.id ? styles.tabActive : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className={styles.listWrap}>
            {filtered.length === 0 && (
              <p className={styles.empty}>Sin resultados en esta categoría.</p>
            )}
            <ul className={styles.list}>
              {filtered.map((it) => (
                <motion.li key={it.id} className={`card ${styles.item}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <div className={styles.itemHead}>
                    <h3 className={styles.itemTitle}>{it.name}</h3>
                    <span className={styles.price}>${it.price.toLocaleString('es-AR')}</span>
                  </div>
                  <p className={styles.desc}>{it.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
