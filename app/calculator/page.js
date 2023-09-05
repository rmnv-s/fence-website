import Image from 'next/image';
import Wrapper from '@/components/wrapper/wrapper';
import Tabs from '@/components/UI/tabs';

import calculatorPageBG from '../../public/img/calculator-bg.png';

const Calculator = () => {
  return (
    <>
      <div className="bg-black">
        <Wrapper>
          <div className="grid grid-cols-1 min-h-[90vh] gap-24 justify-end items-center sm:grid-cols-2 gap-8">
            <div className="">
              <h1 className="font-bold text-whiteFont text-[4.2rem] leading-[5.2rem] mb-16 sm:mb-24 sm:text-[7.4rem] sm:leading-[9rem] ">
                Калькулятор забора онлайн
              </h1>
              <p className="text-whiteFont text-l leading-[3.2rem] max-w-[52.9rem] mb-20 max-[320px]:text-[1.8rem]">
                Онлайн-расчет может оценить примерную стоимость всей конструкции. Это удобный способ
                быстро узнать стоимость по Вашим параметрам.
              </p>
            </div>

            <Image className="hidden sm:block" alt="калькулятор" src={calculatorPageBG} priority />
          </div>
        </Wrapper>
        <Tabs />
      </div>
    </>
  );
};

export default Calculator;
