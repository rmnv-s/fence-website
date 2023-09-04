'use client';
import React, { useState } from 'react';
import Wrapper from '@/components/wrapper/wrapper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SvgArLeft from '@/components/assets/ar-left.icon';
import SvgArRight from '@/components/assets/ar-right.icon';

import Image from 'next/image';
import img1 from '../../../public/img/slider/img-1.jpg';
import img2 from '../../../public/img/slider/img-2.jpg';
import img3 from '../../../public/img/slider/img-3.jpg';
import img4 from '../../../public/img/slider/img-4.jpg';

// Компоненты для кнопок "Previous" и "Next"
const CustomPrevArrow = (props) => (
  <button {...props} className="prev-button" aria-label="Previous" onClick={props.onClick}>
    <SvgArLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="next-button" aria-label="Next" onClick={props.onClick}>
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
      <section className="pt-[10rem] pb-[20rem]">
        <Wrapper>
          <h2 className="text-black mb-24"> Наши работы </h2>

          <div className="relative">
            <div className="flex absolute top-[-9.5rem] right-0 max-[425px]:hidden">
              <div className="prev-button mr-10" onClick={goToPrevSlide}>
                <CustomPrevArrow />
              </div>
              <div className="next-button" onClick={goToNextSlide}>
                <CustomNextArrow />
              </div>
            </div>
            <Slider {...settings} ref={(s) => setSwiper(s)}>
              <div>
                <Image
                  className=""
                  src={img1}
                  layout="responsive"
                  objectFit="contain"
                  alt="картинка"
                />
              </div>
              <div>
                <Image
                  className=""
                  src={img2}
                  layout="responsive"
                  objectFit="contain"
                  alt="картинка"
                />
              </div>
              <div>
                <Image
                  className=""
                  src={img3}
                  layout="responsive"
                  objectFit="contain"
                  alt="картинка"
                />
              </div>
              <div>
                <Image
                  className=""
                  src={img4}
                  layout="responsive"
                  objectFit="contain"
                  alt="картинка"
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
