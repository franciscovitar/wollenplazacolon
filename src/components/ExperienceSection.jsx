"use client";
import styles from './ExperienceSection.module.scss';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className={`section ${styles.section}`}>
      <div className="container">
        <motion.h2
          className="sectionTitle"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          La experiencia Wöllen
        </motion.h2>
        <motion.p
          className="sectionSubtitle"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Helado suizo artesanal y cafetería premium: sabores clásicos y especiales elaborados con dedicación. Cafés de especialidad, pastelería selecta y un ambiente cálido con detalles modernos.
        </motion.p>

        <div className={styles.grid}>
          <motion.div className={`card ${styles.card}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Helado suizo artesanal</h3>
            <p>Recetas cuidadas, texturas suaves y sabores que resaltan. Deleite real en cada cucharada.</p>
          </motion.div>
          <motion.div className={`card ${styles.card}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Cafetería</h3>
            <p>Café de especialidad en su punto. Acompañados de una selección de pastelería.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
