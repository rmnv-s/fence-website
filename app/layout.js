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
    siteName: 'Стальной забор',
    images: [
      {
        url: './MetaTagsZabor.jpg',
        width: 1200,
        height: 628,
        alt: 'Стальной забор',
      },
    ],

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Заборы под ключ | Стальной узор',
    description: 'Строительство заборов под ключ из качественных материалов от производителяt',

    images: [
      {
        url: '/MetaTagsZabor.jpg',
        width: 1200,
        height: 628,
        alt: 'Стальной забор',
      },
    ],
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
