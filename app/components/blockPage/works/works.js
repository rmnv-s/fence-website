"use client";
import React, { useState } from "react";
import Wrapper from "@/components/wrapper/wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SvgArLeft from "@/components/assets/ar-left.icon";
import SvgArRight from "@/components/assets/ar-right.icon";

import Image from "next/image";
import img1 from "@/public/img/slider/img-1.webp";
import img2 from "@/public/img/slider/img-2.webp";
import img3 from "@/public/img/slider/img-3.webp";
import img4 from "@/public/img/slider/img-4.webp";

import img5 from "@/public/img/slider/img-5.webp";
import img6 from "@/public/img/slider/img-6.webp";
import img7 from "@/public/img/slider/img-7.webp";
import img8 from "@/public/img/slider/img-8.webp";
import img9 from "@/public/img/slider/img-9.webp";
import img10 from "@/public/img/slider/img-10.webp";
import img11 from "@/public/img/slider/img-11.webp";
import img12 from "@/public/img/slider/img-12.webp";

import imgNaves from "@/public/img/slider/naves.webp";
import imgNaves1 from "@/public/img/slider/naves-1.webp";

// Компоненты для кнопок "Previous" и "Next"
const CustomPrevArrow = (props) => (
  <button
    {...props}
    className='prev-button'
    aria-label='Previous'
    onClick={props.onClick}
  >
    <SvgArLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className='next-button'
    aria-label='Next'
    onClick={props.onClick}
  >
    <SvgArRight />
  </button>
);

const Works = () => {
  const [swiper, setSwiper] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Функция для переключения на предыдущий слайд
  const goToPrevSlide = () => {
    if (swiper) {
      swiper.slickPrev();
    }
  };

  // Функция для переключения на следующий слайд
  const goToNextSlide = () => {
    if (swiper) {
      swiper.slickNext();
    }
  };

  return (
    <>
      <section className='pt-[10rem] pb-[5rem]'>
        <Wrapper>
          <h2 className='text-black mb-24'> Наши работы </h2>

          <div className='relative'>
            <div className='flex absolute top-[-9.5rem] right-0 max-[425px]:hidden'>
              <div className='prev-button mr-10' onClick={goToPrevSlide}>
                <CustomPrevArrow />
              </div>
              <div className='next-button' onClick={goToNextSlide}>
                <CustomNextArrow />
              </div>
            </div>
            <Slider {...settings} ref={(s) => setSwiper(s)}>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img1}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img2}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img3}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img4}
                  alt='картинка'
                />
              </div>

              <div>
                <Image
                  className='object-contain w-full'
                  src={imgNaves}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={imgNaves1}
                  alt='картинка'
                />
              </div>

              <div>
                <Image
                  className='object-contain w-full'
                  src={img5}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img6}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img7}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img8}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img9}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img10}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img11}
                  alt='картинка'
                />
              </div>
              <div>
                <Image
                  className='object-contain w-full'
                  src={img12}
                  alt='картинка'
                />
              </div>
            </Slider>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Works;
