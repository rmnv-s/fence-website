'use client';
import React, { useState } from 'react';
import Button from '../UI/buttons';
import Image from 'next/image';
import Popup from '@/components/popup/popup';
import mainPageBG from '../../../public/img/main-bg-1.webp';

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
            <div className="w-screen h-screen relative max-[745px]:h-[100vh]">
                <Image
                    className="absolute inset-0 w-full h-full z-0 object-cover"
                    alt="забор"
                    src={mainPageBG}
                    placeholder="blur"
                    priority
                />

                <div className="flex items-center justify-start h-full max-w-100  m-auto px-10">
                    <div className="relative mb-60 max-[560px]:mb-0 mt-[80px]">
                        <div className="flex justify-between items-center text-[#161616] text-l leading-[3.2rem] max-w-[49rem] mb-20 max-[320px]:text-[1.8rem] uppercase p-12 bg-yellow font-bold max-[425px]:flex-col">
                            <span className="text-[6.3rem] max-[425px]:mb-8"> - 5% </span>
                            <p className="text-center">
                                При заказе забора <br /> до 15 октября
                            </p>
                        </div>
                        <h1 className="font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[6rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem] mb-6">
                            Установка заборов под ключ
                        </h1>
                        <p className="text-whiteFont text-l leading-[3.2rem] max-w-[52.9rem] mb-6 max-[320px]:text-[1.8rem]">
                            С нами ваш идеальный забор становится реальностью без лишних хлопот
                        </p>
                        <Button
                            onClick={handleButtonClick}
                            className="px-20 py-5 text-m uppercase mt-20 border border-yellow text-whiteFont transition-all duration-500 ease-in-out tracking-wider hover:text-black hover:bg-yellow"
                            text="Заказать"
                        />
                        {isPopupVisible && <Popup onClose={handleClosePopup} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderContent;
