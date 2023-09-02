import Button from '../UI/buttons';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/components/wrapper/wrapper';
import mainPageBG from '../../../public/img/main-bg.jpg';

const HeaderContent = () => {
  return (
    <>
      <div className="w-screen h-screen relative max-[745px]:h-[85vh]">
        {/* Фоновое изображение */}
        <Image
          className="absolute inset-0 w-full h-full z-0"
          alt="забор"
          src={mainPageBG}
          placeholder="blur"
          priority
        />

        {/* <Wrapper> */}
        <div className="flex items-center justify-start h-full max-w-100  m-auto px-10">
          <div className="relative mb-60">
            <h1 className="font-bold text-whiteFont text-[8.4rem] leading-[8.5rem] max-w-[76.8rem] mb-16">
              Установка заборов под ключ
            </h1>
            <p className="text-whiteFont text-l leading-[3.2rem] max-w-[52.9rem] mb-20">
              С нами ваш идеальный забор становится реальностью без лишних хлопот
            </p>
            <Button className="px-10 py-5 text-sm" text="Заказать звонок" />
          </div>
        </div>
        {/* </Wrapper> */}
      </div>
    </>
  );
};

export default HeaderContent;
