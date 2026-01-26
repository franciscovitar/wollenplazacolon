import '../styles/globals.scss';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Wöllen — Helado suizo artesanal y cafetería',
  description: 'Helado suizo artesanal & cafetería frente a Plaza Colón (Nicolás Avellaneda 230). Un lugar para venir en familia, con amigos o quedarte estudiando/trabajando: WiFi + enchufes + sillas cómodas.',
  openGraph: {
    title: 'Wöllen — Helado suizo artesanal y cafetería',
    description: 'Frente a Plaza Colón — Nicolás Avellaneda 230, Córdoba.',
    url: 'https://example.com',
    siteName: 'Wöllen',
    images: [
      { url: '/images/placeholder-hero.svg', width: 1200, height: 630, alt: 'Wöllen' }
    ],
    locale: 'es_AR',
    type: 'website'
  },
  icons: {
    icon: '/favicon.png'
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
