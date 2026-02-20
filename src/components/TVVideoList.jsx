"use client";
import { useState } from 'react';
import styles from './TVVideoList.module.scss';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import { tvVideos } from '@/data/tvVideos';
import { motion } from 'framer-motion';

export default function TVVideoList() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClose = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className={styles.videoListSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {tvVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onPlay={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo} 
          onClose={handleVideoClose}
        />
      )}
    </>
  );
}
