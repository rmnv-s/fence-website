import Button from '../UI/buttons';
import Image from 'next/image';
import mainPageBG from '../../../public/img/main-bg.jpg';

const HeaderContent = () => {
  return (
    <>
      <div className="w-screen h-screen relative max-[745px]:h-[85vh]">
        <Image
          className="absolute inset-0 w-full h-full z-0"
          alt="забор"
          src={mainPageBG}
          placeholder="blur"
          priority
        />

        <div className="flex items-center justify-start h-full max-w-100  m-auto px-10">
          <div className="relative mb-60">
            <h1 className="font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[6rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem]">
              Установка заборов под ключ
            </h1>
            <p className="text-whiteFont text-l leading-[3.2rem] max-w-[52.9rem] mb-20 max-[320px]:text-[1.8rem]">
              С нами ваш идеальный забор становится реальностью без лишних хлопот
            </p>
            <Button className="px-10 py-5 text-sm" text="Заказать звонок" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
