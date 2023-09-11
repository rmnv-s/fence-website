'use client';
import React, { useState } from 'react';
import Button from '@/components/UI/buttons';
import Image from 'next/image';
import Link from 'next/link';
import Popup from '@/components/popup/popup';
import Wrapper from '@/components/wrapper/wrapper';
import mainPageBG from '../../public/img/vorotabg.webp';

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
              Ворота
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
    </>
  );
};

export default Vorota;
