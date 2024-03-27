"use client";
import React, { useState } from "react";
import Button from "@/components/UI/buttons";
import Image from "next/image";
import Popup from "@/components/popup/popup";
import Wrapper from "@/components/wrapper/wrapper";
import mainPageBG from "../../../public/img/vorotabg.webp";
import vorota from "../../../public/img/vorota.webp";

const Vorota = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div className='w-screen h-screen relative max-[745px]:h-[100vh]'>
        <Image
          className='absolute inset-0 w-full h-full z-0 object-cover'
          alt='забор'
          src={mainPageBG}
          placeholder='blur'
          priority
        />

        <div className='flex items-center justify-start h-full max-w-100  m-auto px-10'>
          <div className='relative mb-60 max-[560px]:mb-0 mt-[150px]'>
            <h1 className='font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[6rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem] mb-6'>
              Ворота
            </h1>
            <p className='text-whiteFont text-m leading-[3.2rem] max-w-[41rem] mb-20 max-[320px]:text-[1.8rem]'>
              Aвтоматические, распашные, откатные
            </p>
            <Button
              onClick={handleButtonClick}
              className='px-10 py-5 text-sm border border-yellow text-whiteFont transition-all duration-500 ease-in-out tracking-wider hover:text-black hover:bg-yellow max-[440px]:mt-0 mb-40'
              text='Заказать звонок'
            />
            {isPopupVisible && <Popup onClose={handleClosePopup} />}
          </div>
        </div>
      </div>

      <main className=' z-10'>
        <Wrapper>
          <section className='mt-60 mb-60'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <h2 className='text-l font-bold mb-12 leading-[4rem] sm:text-2xl'>
                Откатные ворота
              </h2>

              <p className='text-m leading-[3.2rem] mb-28 col-start-1 col-end-2 sm:text-l'>
                Ворота этого типа, с калиткой или без нее, можно увидеть на
                дачных участках, территориях загородных домов, складских и
                коммерческих помещений, объектов промышленного назначения.
                Откатные ворота для дачи или коттеджа открывают проем для въезда
                машины путем сдвигания створки вбок. Установка автоматики
                позволяет сделать ворота более удобными в использовании.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-24'>
              <Image
                className=''
                alt='забор из евроштакетника'
                src={vorota}
                placeholder='blur'
              />

              <ul className='list-disc ml-6 text-l font-bold leading-[3rem]'>
                Основные элементы конструкции:
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  Каркас. Для его изготовления используется швеллер для
                  направляющей балки, профтруба 60х30 мм и 40х20 мм — для рамы,
                  труба 40х20 мм — для откосов
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  Роликовый механизм. Опорная балка с роликами принимает на себя
                  серьезные вертикальные и горизонтальные нагрузки — ветровую,
                  снеговую, вес самой конструкции. Для ее установки заливают
                  бетонную тумбу размером 2х1,5 м, на которую и монтируют сам
                  роликовый механизм.
                </li>
                <li className='text-m font-medium ml-8 mt-8 mb-4'>
                  Двигатель. Раздвижные ворота для дачи или частного дома
                  комплектуются итальянским двигателем Came
                </li>
              </ul>
            </div>
          </section>
        </Wrapper>
      </main>
    </>
  );
};

export default Vorota;
