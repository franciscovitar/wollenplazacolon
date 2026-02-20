"use client";
import Image from 'next/image';
import styles from './TVHero.module.scss';
import { motion } from 'framer-motion';

export default function TVHero() {
  return (
    <section className={styles.tvHero}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Videos de Teles</h1>
        </motion.div>
        <motion.div 
          className={styles.heroBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/images/herohorizontal.jpg" 
            alt="Wöllen Helado Suizo" 
            fill 
            className={styles.image}
            priority
            quality={75}
          />
        </motion.div>
      </div>
    </section>
  );
}
