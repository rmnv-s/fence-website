'use client';
import { useState } from 'react';
import Button from '@/components/UI/buttons';
import Wrapper from '@/components/wrapper/wrapper';
import InputMask from 'react-input-mask';

const FormCall = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
    </section>
  );
};
export default FormCall;
