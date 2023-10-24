'use client';
import React, { useState } from 'react';
import Button from '@/app/components/UI/buttons';
import Image from 'next/image';
import Popup from '@/app/components/popup/popup';
import Wrapper from '@/app/components/wrapper/wrapper';
import mainPageBGEuro from '../../public/img/eurobg.webp';
import euroSh from '../../public/img/euro-sh.webp';

const Euroshtaketnik = () => {
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
                    src={mainPageBGEuro}
                    placeholder="blur"
                    priority
                />

                <div className="flex items-center justify-start h-full max-w-100  m-auto px-10">
                    <div className="relative mb-60 max-[560px]:mb-0 mt-[150px]">
                        <h1 className="font-bold text-whiteFont max-w-[76.8rem] max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[4rem] max-[525px]:leading-[4rem] text-[8.4rem] leading-[9rem] mb-6">
                            Забор из евроштакетника
                        </h1>
                        <p className="text-whiteFont text-m leading-[3.2rem] max-w-[31rem] mb-20 max-[320px]:text-[1.8rem]">
                            Идеальное сочетание стиля <br />и надежности для вашего участка
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
                    <section className="mt-60 mb-60">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <h2 className="text-2xl font-bold mb-12 leading-[4rem]">
                                Евроштакетник – ограда из металлических штакетин.
                            </h2>

                            <p className="text-l leading-[3.2rem] mb-28 col-start-1 col-end-2">
                                Производят их из листовой стали и окрашивают в самые разные цвета.
                                Прочность такой изгороди пропорциональна количеству ребер жесткости,
                                выдавленных на станке, и глубине профилирования.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                            <Image
                                className=""
                                alt="забор из евроштакетника"
                                src={euroSh}
                                placeholder="blur"
                            />

                            <ul className="list-disc ml-6 text-l font-bold leading-[3rem]">
                                Плюсы:
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    проницаемость для воздуха и света
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    отсутствие глубокой тени
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    устойчивость к грибку и насекомым
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    индифферентность к химическим веществам
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    легкость монтажа
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    нетребовательность к уходу
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 mt-40 mb-40">
                            <div className="col-start-1 col-end-">
                                <p className="text-l font-bold leading-[3rem] mb-6">
                                    Евроштакетник различается по форме профиля
                                </p>
                                <p className="text-m mb-9">Они бывают: </p>
                            </div>

                            <ul className="list-disc ml-6 text-l font-bold leading-[3rem] col-start-1 col-end-">
                                <li className="text-m font-medium ml-8  mb-4">
                                    П-образной — выпуклая на лицевую сторону центральная часть с
                                    прямыми боковинами;
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    М-образной — центральная часть выпуклая во внутреннюю сторону,
                                    по бокам дополнительные ребра жесткости;
                                </li>
                                <li className="text-m font-medium ml-8 mt-8 mb-4">
                                    R-образной — радиусный профиль отличается полукруглой формой
                                    сечения, а по краям имеет плоскости, которые усиливают жесткость
                                    планок.
                                </li>
                            </ul>
                        </div>

                        <p className="text-m max-w-[80rem] text-center leading-[2.8rem] m-auto ">
                            Заборы из металлического штакетника пользуются большой популярностью у
                            владельцев дачных домов, коттеджей в черте города. Причиной высокого
                            спроса на заборы из металлоштакетника являются хорошие механические
                            характеристики и отличные декоративные качества.
                        </p>
                    </section>
                </Wrapper>
            </main>
        </>
    );
};

export default Euroshtaketnik;
