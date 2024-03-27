import { useState } from "react";
import Button from "@/components/UI/buttons";
import FormInfoExplanation from "@/components/forms/formInfoExplanation";
import Popup from "@/components/popup/popup";

const FormNaves = () => {
  const [length, setLength] = useState("");
  const [error, setError] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Функция для вычисления суммы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, что length не равно 0 и первая цифра больше 0
    if (!length || length === "0" || length.charAt(0) === "0") {
      setError("Размер навеса должна быть больше 0");
      return;
    } else {
      setError(""); // Очищаем сообщение об ошибке, если валидация прошла успешно
    }
  };
  const calculate = () => {
    if (!length || length === "0" || length.charAt(0) === "0") {
      return;
    }
    setPopupVisible(true);
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
              Размер навеса (кв. м):
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
          <Button
            className='px-12 py-8 text-m border border-solid border-black opacity-70 hover:opacity-100 mt-16'
            type='submit'
            text='Узнать стоимость'
            onClick={calculate}
          />
          {isPopupVisible && (
            <Popup
              popupInnerHeading='Расчитаем навес по Вашим данным'
              popupInnerText='Укажите номер телефона для получения точной стоимости'
              buttonText='Получить расчет'
              onClose={() => setPopupVisible(false)}
            />
          )}
        </form>

        <FormInfoExplanation priceInfoText={false} />
      </div>
    </>
  );
};

export default FormNaves;
