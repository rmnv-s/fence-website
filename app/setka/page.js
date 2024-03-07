"use client";
import React, { useState } from "react";
import Button from "@/components/UI/buttons";
import Image from "next/image";

import Popup from "@/components/popup/popup";
import Wrapper from "@/components/wrapper/wrapper";
import mainPageBGSetka from "../../public/img/3Dbg.webp";
import rabizaSetka from "../../public/img/rabiza.webp";
import threeD from "../../public/img/3D.webp";

const Setka = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmitPopup = (data) => {
    console.log("Submitted data:", data);
    // Здесь можете добавить логику для обработки отправки данных
  };
  return (
    <>
      <div className='w-screen h-screen relative max-[745px]:h-[100vh]'>
        <Image
          className='absolute inset-0 w-full h-full z-0 object-cover'
          alt='забор'
          src={mainPageBGSetka}
          placeholder='blur'
          priority
        />

        <div className='flex items-center justify-start h-full max-w-100  m-auto px-10'>
          <div className='relative mb-60 max-[560px]:mb-0 mt-[150px]'>
            <h1 className='font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[6rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem] mb-6'>
              Забор 3D <br /> или сетки рабицы
            </h1>
            <p className='text-whiteFont text-m leading-[3.2rem] max-w-[41rem] mb-20 max-[320px]:text-[1.8rem]'>
              Доступные решения для безопасности <br /> и эстетики вашего
              участка
            </p>
            <Button
              onClick={handleButtonClick}
              className='px-10 py-5 text-sm border border-yellow text-whiteFont transition-all duration-500 ease-in-out tracking-wider hover:text-black hover:bg-yellow max-[440px]:mt-0 mb-40'
              text='Заказать звонок'
            />
            {isPopupVisible && (
              <Popup onClose={handleClosePopup} onSubmit={handleSubmitPopup} />
            )}
          </div>
        </div>
      </div>

      <main className=' z-10'>
        <Wrapper>
          <section className='mt-60 mb-40'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <h2 className='text-2xl font-bold mb-12 leading-[4rem]'>
                Заборы 3D
              </h2>

              <p className='text-l leading-[3.2rem] mb-28 col-start-1 col-end-2'>
                Заборы из 3D панелей используются для ограждения садовых
                участков, детских площадок, теннисных кортов, административных
                зданий.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-24'>
              <Image
                className=''
                alt='забор из евроштакетника'
                src={threeD}
                placeholder='blur'
              />

              <ul className='list-disc ml-6 text-m font-bold leading-[3rem] md:text-l'>
                Панельные ограждения изготавливаются из сварной сетки —
                оцинкованной или с полимерным напылением. Благодаря V- образному
                рифлению проволок достигается эффект объема, обеспечивается
                конструкционная жесткость секций.
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  3 мм — временные, подходят для установки вокруг стройплощадок
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  4 мм — надежные/стандарт, используются для спортплощадок,
                  школ, детских садов, дачных участков, загородных домов
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  5 мм — прочные/премиум, применяются для установки вокруг
                  заповедных зон, режимных объектов, промзон, аэропортов, трасс,
                  магистралей
                </li>
              </ul>
            </div>
          </section>

          <section className='mt-60 mb-60'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <h2 className='text-2xl font-bold mb-12 leading-[4rem]'>
                Заборы из сетки рабица
              </h2>

              <p className='text-l leading-[3.2rem] mb-28 col-start-1 col-end-2'>
                Заборы из рабицы используются для ограждения садовых или дачных
                участков. Они отличаются надежностью, прочностью, не создают
                тени, не мешают свободному прохождению воздуха
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-24'>
              <ul className='list-disc ml-6 text-m font-bold leading-[3rem] md:text-l'>
                Забор из рабицы представляет собой вертикальные опоры с
                растянутой между ними сеткой. Каждая опора оснащена 4 крюками,
                которые идут сверху вниз на одинаковом расстоянии друг от друга.
                Крючки нужны для навешивания и фиксации полотна.
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  Без протяжки арматуры. Проволочное полотно растягивается между
                  столбами, а затем фиксируется крюками.
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  С одной протяжкой. Горизонтальный арматурный прут продевается
                  через ячейки полотна каждого пролета, приваривается к столбам.
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  С двумя протяжками. В этом случае используется два ряда
                  стальной арматуры. Она проходит на расстоянии 15-30 см от
                  верхнего и нижнего края сетки.
                </li>
              </ul>
              <Image
                className=''
                alt='забор из евроштакетника'
                src={rabizaSetka}
                placeholder='blur'
              />
            </div>
          </section>
        </Wrapper>
      </main>
    </>
  );
};

export default Setka;
