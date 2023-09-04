import HeaderContent from '@/components/headerContant/headerContant';
import About from '@/components/about/about';
import Cards from './cards/cards';
import Works from '@/components/works/works';

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main className="text-2xl text-fontWhite z-10">
        <About />
        <Cards />
        <Works />
      </main>
    </>
  );
}
