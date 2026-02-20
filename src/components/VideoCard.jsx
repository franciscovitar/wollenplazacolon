"use client";
import Image from 'next/image';
import styles from './VideoCard.module.scss';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function VideoCard({ video, onPlay }) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => onPlay(video)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onPlay(video);
        }
      }}
    >
      <div className={styles.thumbnailContainer}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className={styles.thumbnail}
          quality={75}
        />
        <div className={styles.playOverlay}>
          <FiPlay size={48} />
        </div>
      </div>
      <div className={styles.content}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </motion.div>
  );
}
