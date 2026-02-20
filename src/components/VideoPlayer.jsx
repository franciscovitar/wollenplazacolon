"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function VideoPlayer({ video, onClose }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const requestFullscreen = async () => {
      if (containerRef.current && !isFullscreen) {
        try {
          if (containerRef.current.requestFullscreen) {
            await containerRef.current.requestFullscreen();
            setIsFullscreen(true);
          }
        } catch (err) {
          console.log('Fullscreen not available:', err);
        }
      }
    };

    requestFullscreen();

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        onClose();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [video]);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleClose = async () => {
    if (isFullscreen && document.fullscreenElement) {
      await document.exitFullscreen();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          ref={containerRef}
          className={styles.videoContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <video
            ref={videoRef}
            className={styles.video}
            loop={false}
            autoPlay
            onEnded={handleVideoEnded}
            playsInline
          >
            <source src={`/videostv/${video.videoFile}.mp4`} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          
          {!isFullscreen && (
            <motion.button
              className={styles.closeBtn}
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={32} />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
