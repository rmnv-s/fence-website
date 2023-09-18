'use client';
import React, { useState } from 'react';
import Button from '@/components/UI/buttons';
import Image from 'next/image';
import Link from 'next/link';
import Popup from '@/components/popup/popup';
import Wrapper from '@/components/wrapper/wrapper';
import SvgPhohIconYellow from '@/components/assets/phone-yellow.icon';
import mainPageBGProf from '../../public/img/prof-bg.jpg';
import figure from '../../public/img/profnastil/figure.jpg';
import c8 from '../../public/img/profnastil/с8.jpg';
import c20 from '../../public/img/profnastil/с20.jpg';
import c21 from '../../public/img/profnastil/с21.jpg';
import color from '../../public/img/profnastil/color.jpg';
import baner from '../../public/img/profnastil/banner-profnastil-img.png';

const Profnastil = () => {
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
          className="absolute inset-0 w-full h-full z-0 object-cover"
          alt="забор"
          src={mainPageBGProf}
          placeholder="blur"
          priority
        />

        <div className="flex items-center justify-start h-full max-w-100  m-auto px-10">
          <div className="relative mb-60">
            <h1 className="font-bold text-whiteFont leading-[8.5rem] max-w-[76.8rem] mb-16 max-[320px]:text-[3.8rem] max-[320px]:leading-[5rem] max-[525px]:text-[4.5rem] max-[525px]:leading-[6rem]  text-[8.4rem] leading-[9rem]">
              Забор из профнастила
            </h1>
            <p className="text-whiteFont text-m leading-[3.2rem] max-w-[52.9rem] mb-20 max-[320px]:text-[1.8rem]">
              Забор из профнастила состоит из: <br /> Столбы, как правило это профильная труба 60 на
              60 мм, лаги – профильная труба сечением 40 на 20 мм, профлист.
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
            <div className="">
              <h2 className="text-2xl font-bold mb-12">Что такое профнастил?</h2>
              <p className="text-m mb-28">
                Профнастил (профлист) – это оцинкованный лист толщиной от 0,4 до 1,0 мм, покрыт
                полиэстером.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-24 sm:grid-cols-2">
              <Image className="" alt="описание штакетников" src={figure} placeholder="blur" />

              <ul className="list-disc ml-6 text-l font-bold ">
                Профлист бывает двух типов:
                <li className="text-m font-medium ml-8 mt-8 mb-4"> c односторонним покрытием </li>
                <li className="text-m font-medium ml-8"> с двусторонним покрытием </li>
              </ul>

              <p className="text-l leading-[3.5rem]">
                Профлист имеет различные варианты рефления. <br />
                Для заборов из профнастила чаще всего используют: С8, С20 и С21.
              </p>
              <Image className="" alt="описание штакетников" src={c8} placeholder="blur" />

              <Image className="" alt="описание штакетников" src={c20} placeholder="blur" />
              <Image className="" alt="описание штакетников" src={c21} placeholder="blur" />

              <p className="text-l leading-[3.5rem]">
                Самым распространненым вариантом для забора из профнастила является профлист с
                односторонним покрытием, с высотой листа 2 метра.
              </p>
              <Image className="" alt="описание штакетников" src={color} placeholder="blur" />
            </div>
          </section>
        </Wrapper>

        <section className="bg-black my-28">
          <Wrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center pt-9">
              <div>
                <p className="text-xl text-whiteFont mb-12 leading-[3.5rem]">
                  Закажите забор из профнастила прямо сейчас по телефону
                </p>
                <Link
                  className="flex text-m text-yellow text-xl"
                  href="tel:+79680385550"
                  target="_blank"
                >
                  <SvgPhohIconYellow className="mr-2" />
                  +7 495 151-56-71
                </Link>
              </div>
              <Image className="" alt="описание штакетников" src={baner} placeholder="blur" />
            </div>
          </Wrapper>
        </section>

        <Wrapper>
          <section className="my-60">
            <div className="">
              <h2 className="text-2xl font-bold mb-12">Особенности</h2>
            </div>

            <div className="grid grid-cols-1 gap-24 text-whiteFont mb-60 sm:grid-cols-2">
              <div className="bg-black py-16 px-12 ">
                <ul className="list-disc ml-6 text-l font-bold mb-12">
                  Плюсы:
                  <li className="text-m font-medium ml-8 mt-8 mb-4"> долговечность </li>
                  <li className="text-m font-medium ml-8">
                    более эстетичный вид по сравнению с обычным деревянным забором
                  </li>
                </ul>
                <p className="text-l leading-[3.5rem]">
                  Такой забор обязательно понравится тем, кто желает защитить свой участок от
                  посторонних глаз соседей.
                </p>
              </div>

              <div className="bg-black py-16 px-12">
                <ul className="list-disc ml-6 text-l font-bold leading-[3rem]">
                  Минусы:
                  <li className="text-m font-medium ml-8 mt-8 mb-4">
                    {' '}
                    уступает по красоте забору из металлического штакетника и, конечно, секционному
                    забору с элементами ковки;{' '}
                  </li>
                  <li className="text-m font-medium ml-8">
                    низкая светопропускаемость и продуваемость, что при определенном географическом
                    положении может приводить к заболачиванию огораживаемой территории.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-m max-w-[80rem] text-center leading-[2.8rem] m-auto ">
              Во многих садовых товариществах запрещается установка сплошных (не просматриваемых)
              заборов между соседними примыкаемыми участками (межевые заборы), в этом случае забор
              из профнастила не приемлем, в остальном данный забор сочетает прекрасные
              эксплуатационные качества и отностительно небольшую стоимость.
            </p>
          </section>
        </Wrapper>
      </main>
    </>
  );
};

export default Profnastil;
