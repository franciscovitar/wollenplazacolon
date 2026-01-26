"use client";
import styles from './LocationMap.module.scss';
import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <section id="ubicacion" className={`section ${styles.section}`}>
      <div className="container">
        <motion.h2 className="sectionTitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Ubicación</motion.h2>
        <motion.p className="sectionSubtitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Frente a Plaza Colón — Nicolás Avellaneda 230, Córdoba.
        </motion.p>
        <motion.div className={styles.mapWrap} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <iframe
            title="Mapa de Wöllen"
            className={styles.map}
            src="https://www.google.com/maps?q=Nicol%C3%A1s+Avellaneda+230,+C%C3%B3rdoba&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
