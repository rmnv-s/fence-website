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
      <div className="grid grid-cols-1  md:grid-cols-2 gap-24 mt-20">
        <ul className="">
          <li className="grid grid-cols-1 md:grid-cols-2  border-b border-t border-black py-10">
            <p className="text-base font-normal">Откатные механические ворота с установкой</p>
            <span className="text-m font-bold justify-self-start md:justify-self-end mt-4">
              от 75 000 ₽
            </span>
          </li>

          <li className="grid grid-cols-1 md:grid-cols-2  border-b border-black py-10">
            <p className="text-base font-normal">Автоматезированные ворота с установкой</p>
            <span className="text-m font-bold justify-self-start md:justify-self-end mt-4">
              от 110 000 ₽
            </span>
          </li>

          <li className="grid grid-cols-1 md:grid-cols-2 border-b border-black py-10">
            <p className="text-base font-normal">Калитка под врезной замок</p>
            <span className="text-m font-bold justify-self-start md:justify-self-end mt-4">
              от 7 500 ₽
            </span>
          </li>

          <li className="grid grid-cols-1 md:grid-cols-2 border-b border-black py-10">
            <p className="text-base font-normal">Ворота с калиткой (стандартный комплект)</p>
            <span className="text-m font-bold justify-self-start md:justify-self-end mt-4">
              от 13 500 ₽
            </span>
          </li>

          <li className="grid grid-cols-1 md:grid-cols-2 border-b border-black py-10">
            <p className="text-base font-normal">Ворота и калитка в раме комплекте </p>
            <span className="text-m font-bold justify-self-start md:justify-self-end mt-4">
              от 17 800 ₽
            </span>
          </li>
        </ul>

        <div>
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
