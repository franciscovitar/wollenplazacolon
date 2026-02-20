import TVHero from '@/components/TVHero';
import TVVideoList from '@/components/TVVideoList';
import ClearCacheButton from '@/components/ClearCacheButton';
import styles from './page.module.scss';

export const metadata = {
  title: 'Wöllen TV - Videos',
  description: 'Mira nuestros videos en pantalla',
};

export default function TVPage() {
  return (
    <div className={styles.tvPage}>
      <TVHero />
      <TVVideoList />
      <ClearCacheButton />
    </div>
  );
}
