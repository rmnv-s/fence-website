import { useState } from "react";

import Button from "@/components/UI/buttons";
import { formRabizaData } from "@/components/data/formRabizaData";
import FormInfoExplanation from "@/components/forms/formInfoExplanation";
import Popup from "@/components/popup/popup";

const FormRabiza = () => {
  const [length, setLength] = useState("");
  const [nameGrid, setNameGrid] = useState("Рабица");
  const [height, setHeight] = useState("1.5");

  const [error, setError] = useState("");

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [activeTabName, setActiveTabName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, что length не равно 0 и первая цифра больше 0
    if (!length || length === "0" || length.charAt(0) === "0") {
      setError("Длина забора должна быть больше 0");
      return;
    } else {
      setError(""); // Очищаем сообщение об ошибке, если валидация прошла успешно
    }

    // Находим соответствующий объект в массиве formEuroData
    const selectedOption = formRabizaData.find((option) => {
      // return option.height === height && option.side === side && option.gap === gap;
      return option.name === name && option.height === height;
    });

    if (selectedOption) {
    }
  };

  const calculate = () => {
    if (!length || length === "0" || length.charAt(0) === "0") {
      return;
    }
    setPopupVisible(true);
    setActiveTabName("Рабица / 3D");
  };
  return (
    <>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-24'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='length'
              className='block text-gray-600 mb-2 text-sm'
            >
              Длина забора (метры):
            </label>
            <input
              type='number'
              id='length'
              value={length}
              onChange={(e) => {
                const inputValue = e.target.value.trim(); // Удаляем начальные и конечные пробелы
                const isValidInput = /^\d{0,4}$/.test(inputValue); // Проверяем, что ввод состоит только из не более чем 4 цифр

                if (isValidInput) {
                  setLength(inputValue);
                }
              }}
              className={`border ${
                error ? "border-red-500" : "border-black"
              } rounded px-4 py-5 text-m w-full`}
              required
            />
          </div>
          {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}{" "}
          {/* Отображаем сообщение об ошибке */}
          {/* ......... */}
          <div className='mb-4'>
            <label
              htmlFor='nameGrid'
              className='block text-gray-600 mb-2 text-sm'
            >
              Наименование:
            </label>
            <select
              id='nameGrid'
              value={nameGrid}
              onChange={(e) => setNameGrid(e.target.value)}
              className='border border-black rounded px-4 py-5 text-m w-full'
              required
            >
              {/* <option value="">Выберите...</option> */}
              <option value='Рабица'> Рабица </option>
              <option value='3D'> 3D </option>
            </select>
          </div>
          {/* ......... */}
          <div className='mb-4'>
            <label
              htmlFor='height'
              className='block text-gray-600 mb-2 text-sm'
            >
              Высота забора:
            </label>
            <select
              id='height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className='border border-black rounded px-4 py-5 text-m w-full'
              required
            >
              {/* <option value="">Выберите...</option> */}
              <option value='1.5'>1.5 м</option>
              <option value='1.8'>1.8 м</option>
              <option value='2.0'>2.0 м</option>
            </select>
          </div>
          {/* ......... */}
          <Button
            className='px-12 py-8 text-m border border-solid border-black opacity-70 hover:opacity-100 mt-16'
            type='submit'
            text='Узнать стоимость'
            onClick={calculate}
          />
          {isPopupVisible && (
            <Popup
              popupInnerHeading='Расcчитаем забор по Вашим данным'
              popupInnerText='Укажите номер телефона для получения точной стоимости'
              buttonText='Получить расчет'
              lengthInput={length}
              height={height}
              nameGrid={nameGrid}
              onClose={() => setPopupVisible(false)}
            />
          )}
        </form>

        <FormInfoExplanation priceInfoText={false} />
      </div>
    </>
  );
};

export default FormRabiza;
