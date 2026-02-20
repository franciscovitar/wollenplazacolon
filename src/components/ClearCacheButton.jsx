"use client";
import { useState } from 'react';
import styles from './ClearCacheButton.module.scss';
import { FiRefreshCw } from 'react-icons/fi';

export default function ClearCacheButton() {
  const [loading, setLoading] = useState(false);

  const handleClearCache = async () => {
    setLoading(true);
    try {
      // Limpiar localStorage y sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      // Desregistrar service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          await registration.unregister();
        }
      }

      // Limpiar todas las cachés del navegador
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      }

      // Recarga forzada sin caché
      window.location.reload(true);
    } catch (err) {
      console.error('Error al limpiar caché:', err);
      window.location.reload(true);
    }
  };

  return (
    <button
      className={styles.btn}
      onClick={handleClearCache}
      disabled={loading}
      aria-label="Borrar caché y recargar"
    >
      <FiRefreshCw size={18} className={loading ? styles.spin : ''} />
      <span>{loading ? 'Reiniciando...' : 'Borrar caché'}</span>
    </button>
  );
}
