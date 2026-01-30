"use client";
import Link from 'next/link';
import styles from './page.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import MenuSearch from '../../components/MenuSearch';
import CategoryChips from '../../components/CategoryChips';
import MenuList from '../../components/MenuList';

export default function CartaPage() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/menu');

        if (!response.ok) {
          throw new Error('Error al cargar el menú');
        }

        const data = await response.json();
        setMenuData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching menu:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Orden personalizado de categorías
  const categoryOrder = [
    'Cafetería',
    'Desayunos',
    'Desayunos & Meriendas Premium',
    'Sandwiches',
    'Bebidas',
    'Adicionales',
    'Delikatessen',
    'Heladería',
    'Postres Individuales',
    'Tortas & Postres Para Llevar',
    'Postres Helados',
  ];

  // Get unique categories
  const categories = useMemo(() => {
    if (!menuData?.items) return [];
    const unique = new Set(menuData.items.map((item) => item.categoria));
    return Array.from(unique).sort(
      (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
    );
  }, [menuData]);

  // Filter and group items
  const filteredAndGrouped = useMemo(() => {
    if (!menuData?.items) return {};

    const q = query.trim().toLowerCase();

    const filtered = menuData.items.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' || item.categoria === activeCategory;
      const matchesSearch =
        !q ||
        item.producto.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    // Group by categoria > subcategoria
    const grouped = filtered.reduce((acc, item) => {
      if (!acc[item.categoria]) {
        acc[item.categoria] = {};
      }
      if (!acc[item.categoria][item.subcategoria]) {
        acc[item.categoria][item.subcategoria] = [];
      }
      acc[item.categoria][item.subcategoria].push(item);
      return acc;
    }, {});

    // Ordenar categorías según categoryOrder
    const sortedGrouped = {};
    categoryOrder.forEach((cat) => {
      if (grouped[cat]) {
        sortedGrouped[cat] = grouped[cat];
      }
    });

    return sortedGrouped;
  }, [menuData, query, activeCategory]);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img
            src="/images/Logosinfondo.png"
            alt="Wöllen"
            className={styles.logo}
          />
          <Link href="/" className="btn btnSecondary">
            Volver al inicio
          </Link>
        </div>
      </header>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Carta Digital
          </motion.h1>

          {loading && (
            <div className={styles.stateMessage}>
              <p>Cargando menú...</p>
            </div>
          )}

          {error && (
            <div className={styles.errorMessage}>
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && menuData && (
            <>
              <MenuSearch onSearch={setQuery} />
              <CategoryChips
                categories={categories}
                active={activeCategory}
                onSelect={setActiveCategory}
              />

              {Object.keys(filteredAndGrouped).length === 0 ? (
                <div className={styles.emptyMessage}>
                  <p>No hay productos que coincidan con tu búsqueda.</p>
                </div>
              ) : (
                <MenuList groupedItems={filteredAndGrouped} />
              )}

              <div className={styles.lastUpdate}>
                <small>
                  Actualizado:{' '}
                  {new Date(menuData.updatedAt).toLocaleString('es-AR')}
                </small>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
