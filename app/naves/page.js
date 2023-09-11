'use client';
import React, { useState } from 'react';
import Button from '@/components/UI/buttons';
import Image from 'next/image';
import Link from 'next/link';
import Popup from '@/components/popup/popup';
import Wrapper from '@/components/wrapper/wrapper';
import mainPageBG from '../../public/img/navesbg.webp';

const Naves = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

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
            <h1 className="font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[4.5rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem]">
              Навесы
            </h1>
            <p className="text-whiteFont text-m leading-[3.2rem] max-w-[41rem] mb-20 max-[320px]:text-[1.8rem]">
              Aвтоматические, распашные, откатные
            </p>
            <Button
              onClick={handleButtonClick}
              className="px-10 py-5 text-sm"
              text="Заказать звонок"
            />
            {isPopupVisible && <Popup onClose={handleClosePopup} />}
          </div>
        </div>
      </div>

      <main className=" z-10">
        <Wrapper>
          <section className="mt-60">
            <div className="grid grid-cols-2">
              <h2 className="text-2xl font-bold mb-12 leading-[4rem]">
                Мы специализируемся на изготовлении навесов для частных коттеджей, дач и загородных
                домов.
              </h2>

              <p className="text-l leading-[3.2rem] mb-28 col-start-1 col-end-2">
                Наши навесы доступны в различных вариантах, призванных обеспечивать надежную защиту
                от природных воздействий, таких как погодные условия, солнце и дождь.
              </p>
            </div>
          </section>
        </Wrapper>
      </main>
    </>
  );
};

export default Naves;
