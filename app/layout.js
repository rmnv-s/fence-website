import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Header from '@/components/header/header';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Стальной забор',
  description: 'Заборы под ключ',

  //   <meta property="og:type" content="website">
  //   <meta property="og:url" content="url">
  //   <meta property="og:title" content="title">
  //   <meta property="og:description" content="description">
  //   <meta property="og:image" content="image">
  //
  //   {/* <!-- Twitter --> */}
  //   <meta property="twitter:card" content="image">
  //   <meta property="twitter:url" content="url">
  //   <meta property="twitter:title" content="title">
  //   <meta property="twitter:description" content="description">
  //   <meta property="twitter:image" content="image">
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
