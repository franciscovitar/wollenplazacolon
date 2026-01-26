"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bgImageDesktop}>
        <Image src="/images/herohorizontal.jpg" alt="Wöllen helado suizo y cafetería" fill sizes="100vw" className={styles.image} priority />
      </div>
      <div className={styles.bgImageMobile}>
        <Image src="/images/herovertical.jpg" alt="Wöllen helado suizo y cafetería" fill sizes="100vw" className={styles.image} priority />
      </div>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.copy}
        >
          <h1 className={styles.title}>Helado suizo artesanal & cafetería frente a Plaza Colón</h1>
          <p className={styles.subtitle}>Un lugar para venir en familia, con amigos o quedarte estudiando/trabajando: WiFi + enchufes + sillas cómodas.</p>
          <div className={styles.actions}>
            <Link href="/carta" className={`btn btnPrimary ${styles.btn}`}>Ver carta digital</Link>
            <Link href="#ubicacion" className={`btn btnSecondary ${styles.btn}`}>Cómo llegar</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
