'use client';
import React, { useState } from 'react';
import Wrapper from '@/components/wrapper/wrapper';
import FormEuro from '@/components/forms/formEuro';

const Tabs = () => {
  const tabTitles = ['Профнастил', 'Штакетник', 'Сетка Рабица', 'Откатные ворота', 'Навесы'];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContents = [
    // Здесь вы можете поместить контент для каждого таба
    <div key={0}>Содержимое для Tab 1</div>,
    <div key={1}>
      <FormEuro />
    </div>,
    <div key={2}>Содержимое для Tab 3</div>,
    <div key={3}>Содержимое для Tab 4</div>,
    <div key={4}>Содержимое для Tab 5</div>,
  ];

  return (
    <section className="bg-white py-[12.5rem]">
      <Wrapper>
        <h2 className="text-black mb-24 text-xl leading-[4.2rem] font-bold">Калькулятор</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 ">
          {tabTitles.map((title, index) => (
            <button
              key={index}
              className={`text-black focus:outline-none text-base lg:text-m py-8 ${
                activeTab === index ? 'bg-yellow' : 'bg-gray-200'
              } ${
                index !== tabTitles.length - 1
                  ? 'border-b border-black md:border-r border-black md:border-b-0'
                  : ''
              } `}
              onClick={() => handleTabClick(index)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="mt-24 text-m font-bold uppercase"> Параметры </h3>
          <div className="mt-4">{tabContents[activeTab]}</div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Tabs;
