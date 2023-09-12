import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Header from '@/components/header/header';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Стальной забор',
  description: 'Заборы под ключ | Стальной узор',

  openGraph: {
    title: 'Заборы под ключ | Стальной узор',
    description: 'Строительство заборов под ключ из качественных материалов от производителя.',
    url: '',
    siteName: '',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],

    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Contact />
        <Footer />
        <div id="popup-root"></div>
      </body>
    </html>
  );
}
