'use client';
import { useState } from 'react';
import Button from '@/components/UI/buttons';
import Wrapper from '@/components/wrapper/wrapper';
import SvgCloseIcon from '@/components/assets/close-popup-icon';
import InputMask from 'react-input-mask';

const FormCall = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Добавляем состояние для успешной отправки

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('entry.2005620554', name);
      formData.append('entry.1166974658', phone);

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfAjDIJ9JtO2iLLVvsA84ggFlTfAuF61gBzAwYZOL7rYy9AAQ/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );

      // После успешной отправки формы:
      setFormSubmitted(true); // Устанавливаем флаг отправки формы в true
      // Сбрасываем значения полей формы
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Произошла ошибка при отправке данных:', error);
    }
  };
  const closeMessage = () => {
    setFormSubmitted(false); // Скрываем сообщение
  };
  return (
    <section className="bg-bgwhite py-[12.5rem]">
      <Wrapper>
        <div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-l font-black mb-7">Остались вопросы?</h2>
            <p className="text-sm  mb-12">Свяжитесь с нами и мы ответим на них.</p>
            <div className="grid rid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  className="w-full text-sm border border-grey bg-transparent  px-4 focus:outline-none py-6"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar="_"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  className="w-full text-sm border border-grey bg-transparent px-4 focus:outline-none py-6"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {phone && (
                  <p className="text-greyFont text-sm mt-1 absolute bottom-[-2.2rem]">
                    Пожалуйста, введи свой номер телефона
                  </p>
                )}
              </div>
              <Button
                className="max-h-[5.3rem] py-6 text-sm mt-10 md:mt-0"
                type="submit"
                text="Перезвоните мне"
              />
            </div>
          </form>
        </div>
      </Wrapper>
      {/* Отображаем сообщение при успешной отправке формы поверх формы */}
      {formSubmitted && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-10"
            onClick={closeMessage}
          />
          <div className="fixed flex flex-col z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bgwhite rounded-2xl px-14 py-5">
            <h2 className="text-base">
              Спасибо за заявку! <br /> Мы свяжемся с вами в ближайшее время!
            </h2>
            <button onClick={closeMessage}>
              <SvgCloseIcon className="absolute top-[-3.6rem] right-[-4rem] border-none bg-transparent cursor-pointer"></SvgCloseIcon>
            </button>
          </div>
        </>
      )}
    </section>
  );
};
export default FormCall;
