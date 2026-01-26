"use client";
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#espacio', label: 'Espacio' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#galeria', label: 'Galería' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="#inicio" className={styles.brand} aria-label="Ir al inicio">
          <img src="/images/Logosinfondo.png" alt="Wöllen" className={styles.logo} />
        </Link>
        <nav className={styles.navDesktop} aria-label="Secciones">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>{item.label}</Link>
          ))}
          <Link href="/carta" className={`${styles.navLink} ${styles.cta}`}>Carta</Link>
        </nav>
        <button
          className={styles.menuBtn}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={styles.navMobile}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/carta" className={`${styles.mobileLink} ${styles.mobileCTA}`} onClick={() => setOpen(false)}>Ver carta</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
