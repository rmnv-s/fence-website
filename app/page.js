import HeaderContent from '@/components/headerContant/headerContant';
import About from '@/components/about/about';
import Cards from './cards/cards';

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main className="text-2xl text-fontWhite z-10">
        <About />
        <Cards />
      </main>
    </>
  );
}
