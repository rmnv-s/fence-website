import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/UI/buttons';

const FormNaves = () => {
  const [length, setLength] = useState('');

  const [error, setError] = useState('');

  const [totalPrice, setTotalPrice] = useState(0);

  // Функция для вычисления суммы
  const calculateTotalPrice = () => {
    // Преобразуйте введенное значение в число и умножьте на 4400
    const price = parseFloat(length) * 4400;
    // Обновите состояние суммы
    setTotalPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, что length не равно 0 и первая цифра больше 0
    if (!length || length === '0' || length.charAt(0) === '0') {
      setError('Размер навеса должна быть больше 0');
      return;
    } else {
      setError(''); // Очищаем сообщение об ошибке, если валидация прошла успешно
    }

    calculateTotalPrice();
  };

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-24">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="length" className="block text-gray-600 mb-2 text-sm">
              Размер навеса (кв. м):
            </label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => {
                const inputValue = e.target.value.trim(); // Удаляем начальные и конечные пробелы
                const isValidInput = /^\d{0,4}$/.test(inputValue); // Проверяем, что ввод состоит только из не более чем 4 цифр

                if (isValidInput) {
                  setLength(inputValue);
                }
              }}
              className={`border ${
                error ? 'border-red-500' : 'border-black'
              } rounded px-4 py-5 text-m w-full`}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{' '}
          {/* Отображаем сообщение об ошибке */}
          {/* ......... */}
          <Button
            className="px-12 py-8 text-m border border-solid border-black opacity-70 hover:opacity-100 mt-16"
            type="submit"
            text="Расчитать стоимость"
          />
          <div className="mt-10">
            <p className="uppercase text-m mb-4"> Итого: </p>
            <span className="uppercase text-l font-bold"> {totalPrice} ₽</span>
          </div>
        </form>

        <div>
          <p className="text-base leading-10 md:text-m mb-5 mt-5 ">
            Цены в калькуляторе носят информационный характер.
          </p>
          <p className="text-base leading-10 md:text-m ">
            За более точным подсчетом стоимости заказа обращайтесь к менеджерам компании <br />
            <Link className="" href="tel:+79680385550">
              по телефону: +7 968 038-55-50
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormNaves;
