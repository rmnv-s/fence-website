import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Стальной забор',
  description: 'Заборы под ключ',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
