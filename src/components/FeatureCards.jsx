"use client";
import styles from './FeatureCards.module.scss';
import { motion } from 'framer-motion';
import { FiUsers, FiWifi, FiCpu, FiCoffee } from 'react-icons/fi';

export default function FeatureCards() {
  return (
    <section id="espacio" className={`section ${styles.section}`}>
      <div className="container">
        <motion.h2 className="sectionTitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Un lugar para quedarte</motion.h2>
        <motion.p className="sectionSubtitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Espacio pensado para compartir y también para trabajar/estudiar con comodidad.
        </motion.p>
        <div className={styles.grid}>
          <motion.div className={`card ${styles.card}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.icon}><FiUsers size={24} /></div>
            <h3>Para venir en familia y con amigos</h3>
            <p>Mesas amplias, ambiente cálido y música suave — ideal para compartir momentos.</p>
          </motion.div>
          <motion.div className={`card ${styles.card}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.icon}><FiWifi size={24} /></div>
            <h3>Para trabajar/estudiar</h3>
            <ul className={styles.features}>
              <li>WiFi estable</li>
              <li>Enchufes accesibles</li>
              <li>Sillas cómodas</li>
              <li><span className={styles.inlineIcon}><FiCoffee /></span> Café siempre a mano</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
