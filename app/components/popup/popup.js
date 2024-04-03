"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SvgCloseIcon from "@/components/assets/close-popup-icon";
import InputMask from "react-input-mask";

const Popup = ({
  onClose,
  popupInnerHeading,
  popupInnerText,
  buttonText,
  activeTabName,
  lengthInput,
  height,
  gap,
  side,
  nameGrid,
  width,
  lagi,
  numberGauge,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nameError, setNameError] = useState(""); // Добавляем состояние для отслеживания отправки формы
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneIncomplete, setIsPhoneIncomplete] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Введите ваше имя"); // Устанавливаем ошибку, если поле имени пустое
      return;
    }

    if (!phone || isPhoneIncomplete) {
      setPhoneError("Введите корректный номер телефона");
      return;
    } else {
      setPhoneError("");
    }

    if (!agreementChecked) {
      setAgreementError("Подтвердите согласие с политикой конфиденциальности");
      return;
    } else {
      setAgreementError(""); // Сброс ошибки, если чекбокс отмечен
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("activeTabName", activeTabName);
      formData.append("lengthInput", lengthInput);
      formData.append("height", height);
      formData.append("gap", gap);
      formData.append("side", side);
      formData.append("nameGrid", nameGrid);
      formData.append("width", width);
      formData.append("lagi", lagi);
      formData.append("numberGauge", numberGauge);

      await fetch("https://xn--80aofhkgcqbkq8h.xn--p1ai/post.php", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // После успешной отправки формы:
      setFormSubmitted(true); // Устанавливаем флаг отправки формы в true
      // Сбрасываем значения полей формы
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Произошла ошибка при отправке данных:", error);
    }
  };

  // Если форма была успешно отправлена, показываем сообщение
  if (formSubmitted) {
    return (
      <>
        <div
          className='fixed top-0 left-0 w-full h-full bg-black opacity-80 z-10'
          onClick={onClose}
        />
        <div className='fixed flex flex-col z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bgwhite rounded-2xl px-14 py-5'>
          <h2 className='text-base'>
            Спасибо за заявку! <br /> Мы свяжемся с вами в ближайшее время!
          </h2>
          <button onClick={onClose}>
            <SvgCloseIcon className='absolute top-[-3.6rem] right-[-4rem] border-none bg-transparent cursor-pointer'></SvgCloseIcon>
          </button>
        </div>
      </>
    );
  }

  // В противном случае показываем форму для заполнения
  return ReactDOM.createPortal(
    <>
      <div
        className='fixed top-0 left-0 w-full h-full bg-black opacity-80 z-10'
        onClick={onClose}
      />

      <form>
        <div className='min-w-[300px] fixed flex flex-col z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bgwhite rounded-2xl px-10 pt-10 pb-12 sm:px-14'>
          <h2 className='text-m font-black mb-7 md:text-l max-w-[240px] leading-[30px]'>
            {popupInnerHeading}
          </h2>
          <p className='text-sm max-w-[23.5rem] mb-12'>{popupInnerText}</p>
          <input
            type='text'
            placeholder={nameError || "Ваше имя"}
            value={name}
            id='name'
            name='name'
            className={`w-full text-sm border-b border-grey bg-transparent mb-8 pb-2 focus:outline-none ${
              nameError ? "placeholder-red-500" : ""
            }`}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <InputMask
            mask='+7 (999) 999-99-99'
            maskChar='_'
            placeholder='+7 (___) ___-__-__'
            id='phone'
            name='phone'
            value={phone}
            className={`w-full text-sm border-b border-grey bg-transparent pb-2 focus:outline-none mb-2 ${
              phoneError ? "placeholder-red-500" : ""
            }`}
            onChange={(e) => {
              const phoneNumber = e.target.value.replace(/[^0-9]/g, "");
              setPhone(phoneNumber);

              // Проверяем, достаточно ли цифр в номере телефона
              setIsPhoneIncomplete(phoneNumber.length < 11);

              // Если введенное значение удовлетворяет требованиям, сбрасываем ошибку
              if (!phoneError) {
                setPhoneError("");
              }
            }}
            required
          />

          {isPhoneIncomplete && (
            <p className='text-black text-sm mt-1'>
              Пожалуйста, введи свой номер телефона
            </p>
          )}
          <div className='mb-12'>
            <div className='flex items-center mt-4 mb-2'>
              <input
                type='checkbox'
                id='agreement'
                className='mr-2'
                checked={agreementChecked}
                onChange={() => setAgreementChecked(!agreementChecked)}
              />
              <label htmlFor='agreement' className='text-sm text-greyFont'>
                Согласен с{" "}
                <a
                  className='text-greyFont underline'
                  href='/privacy/privacy.pdf'
                  alt='alt text'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
            {agreementError && (
              <p className='text-red-500 text-s mt-1'>{agreementError}</p>
            )}
          </div>
          <button
            className='text-m border border-black py-7 transition-all duration-500 ease-in-out hover:bg-yellow'
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
          <button onClick={onClose}>
            <SvgCloseIcon className='sm:top-[-4.6rem] sm:right-[-3.5rem] top-[-4.6rem] right-0 absolute border-none bg-transparent cursor-pointer '></SvgCloseIcon>
          </button>
        </div>
      </form>
    </>,
    document.querySelector("#popup-root")
  );
};

export default Popup;
