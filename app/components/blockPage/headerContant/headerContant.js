"use client";
import React, { useState } from "react";
import Button from "../../UI/buttons";
import Image from "next/image";
import Popup from "@/components/popup/popup";
import mainPageBG from "@/public/img/main-bg-1.webp";

const HeaderContent = () => {
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
          <div className='relative mb-60 max-[560px]:mb-0 mt-[180px]'>
            <h1 className='font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[6rem] max-[525px]:leading-[6rem] text-[8.4rem] leading-[9rem] mb-6'>
              Установка заборов под ключ
            </h1>
            <p className='text-whiteFont text-l leading-[3.2rem] max-w-[52.9rem] mb-6 max-[440px]:text-base mb-2 leading-[2.4rem]'>
              С нами ваш идеальный забор становится реальностью без лишних
              хлопот
            </p>
            <Button
              onClick={handleButtonClick}
              className='px-20 py-5 text-m uppercase mt-20 border border-yellow text-whiteFont transition-all duration-500 ease-in-out tracking-wider hover:text-black hover:bg-yellow max-[440px]:mt-0 mb-40'
              text='Заказать'
            />
            {isPopupVisible && (
              <Popup
                popupInnerHeading='Обратный звонок'
                popupInnerText='Заполните заявку и мы с Вами свяжемся в течении 15 минут'
                buttonText='Перезвоните мне'
                onClose={handleClosePopup}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
