"use client";
import Link from 'next/link';
import styles from './CTASection.module.scss';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className={`card ${styles.cta}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>Descubrí la carta completa</h3>
          <p>Helados, cafetería y especiales — todo en un solo lugar.</p>
          <Link href="/carta" className="btn btnPrimary">Ver carta digital</Link>
        </motion.div>
      </div>
    </section>
  );
}
