import Image from 'next/image';
import HeaderContent from '@/components/headerContant/headerContant';

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main className="text-2xl text-fontWhite z-10"> Hello </main>
    </>
  );
}
