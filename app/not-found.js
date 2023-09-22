import Image from 'next/image';
import main404 from '../public/img/zabor404.png';
export default function NotFound() {
  return (
    <div className="w-screen h-screen relative max-[745px]:h-[85vh] bg-[#252525]">
      <Image
        className="absolute inset-0 w-full h-full z-0 object-cover"
        alt="забор"
        src={main404}
        placeholder="blur"
        priority
      />

      <div className="flex items-center justify-center h-full max-w-100  m-auto px-10">
        <div className="relative mb-60">
          <h1 className=" text-center font-bold text-whiteFont leading-[8.5rem] max-w-[73.8rem] mb-16 max-[320px]:text-[3rem] max-[320px]:leading-[5rem] max-[525px]:text-[4rem] max-[525px]:leading-[6rem] text-[6.4rem] leading-[8rem]">
            Упс, такой страницы не существует :(
          </h1>
        </div>
      </div>
    </div>
  );
}
