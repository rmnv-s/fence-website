import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/UI/buttons';
import { formEuroData } from '@/components/utils/formEuroData';

const FormEuro = () => {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('1.5');
  const [side, setSide] = useState('Односторонний');
  const [gap, setGap] = useState('С зазором');
  const [error, setError] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, что length не равно 0 и первая цифра больше 0
    if (!length || length === '0' || length.charAt(0) === '0') {
      setError('Длина забора должна быть больше 0');
      return;
    } else {
      setError(''); // Очищаем сообщение об ошибке, если валидация прошла успешно
    }

    // Находим соответствующий объект в массиве formEuroData
    const selectedOption = formEuroData.find((option) => {
      return option.height === height && option.side === side && option.gap === gap;
    });

    if (selectedOption) {
      // Извлекаем стоимость из выбранного объекта
      const price = selectedOption.price;
      // Вычисляем итоговую стоимость с учетом длины забора
      const totalPrice = price * parseFloat(length);
      // Устанавливаем итоговую стоимость в состояние
      setTotalPrice(totalPrice);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-24">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="length" className="block text-gray-600 mb-2 text-sm">
              Длина забора (метры):
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
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {/* Отображаем сообщение об ошибке */}
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-600 mb-2 text-sm">
              Высота забора:
            </label>
            <select
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-black rounded px-4 py-5 text-m w-full"
              required
            >
              {/* <option value="">Выберите...</option> */}
              <option value="1.5">1.5 м</option>
              <option value="1.7">1.7 м</option>
              <option value="1.8">1.8 м</option>
              <option value="2.0">2.0 м</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="side" className="block text-gray-600 mb-2 text-sm">
              Тип стороны:
            </label>
            <select
              id="side"
              value={side}
              onChange={(e) => setSide(e.target.value)}
              className="border border-black rounded px-4 py-5 text-m w-full"
              required
            >
              {/* <option value="">Выберите...</option> */}
              <option value="Односторонний">Односторонний</option>
              <option value="Двусторонний">Двусторонний</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="gap" className="block text-gray-600 mb-2 text-sm">
              Тип зазора:
            </label>
            <select
              id="gap"
              value={gap}
              onChange={(e) => setGap(e.target.value)}
              className="border border-black rounded px-4 py-5 text-m w-full"
              required
            >
              {/* <option value="">Выберите...</option> */}
              <option value="С зазором">С зазором</option>
              <option value="Шахматка">Шахматка</option>
            </select>
          </div>
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
            За более точным подсчетом стоимости заказа обращайтесь к менеджерам компании
            <Link className="" href="tel:+74951515671">
              по телефону: +7 495 151-56-71
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormEuro;
