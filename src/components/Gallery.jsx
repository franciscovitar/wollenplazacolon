"use client";
import styles from './Gallery.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/images/Galeria1.jpg',
  '/images/Galeria2.jpg',
  '/images/Galeria3.jpg',
  '/images/Galeria4.jpg',
  '/images/Galeria5.jpg',
  '/images/Galeria6.jpg',
];

export default function Gallery() {
  return (
    <section id="galeria" className={`section ${styles.section}`}>
      <div className="container">
        <motion.h2 className="sectionTitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Galería</motion.h2>
        <motion.p className="sectionSubtitle" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Algunas postales de nuestro espacio.</motion.p>
        <div className={styles.grid}>
          {images.map((src, i) => (
            <motion.div key={src} className={styles.item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className={styles.imageWrap}>
                <Image 
                  src={src} 
                  alt={`Imagen ${i+1} del espacio`} 
                  fill 
                  sizes="(max-width: 900px) 100vw, 33vw" 
                  className={styles.image}
                  quality={75}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
