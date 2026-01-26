"use client";
import styles from './Footer.module.scss';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.block}>
          <img src="/images/Logosinfondo.png" alt="Wöllen" className={styles.logo} />
          <p className={styles.muted}>Helado suizo artesanal & cafetería frente a Plaza Colón — Nicolás Avellaneda 230.</p>
        </div>
        <div className={styles.block}>
          <h4>Horario</h4>
          <p className={styles.muted}>Todos los días — 10:00 a 22:00 hs</p>
        </div>
        <div className={styles.block}>
          <h4>Redes</h4>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.social}><FiInstagram /></a>
            <a href="#" aria-label="Facebook" className={styles.social}><FiFacebook /></a>
            <a href="#" aria-label="WhatsApp" className={styles.social}><FaWhatsapp /></a>
          </div>
          <a href="#" className={`btn btnSecondary`} style={{ marginTop: 10 }}>Escribinos por WhatsApp</a>
        </div>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Wöllen — Córdoba, Argentina. Creado por <a href="https://www.genovasite.com/" target="_blank" rel="noopener noreferrer" className={styles.genovaLink}>Genova | Agencia de desarrollo web y manejo de redes</a>.</div>
    </footer>
  );
}
