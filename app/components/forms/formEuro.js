import { useState } from 'react';

const FormEuro = () => {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('1.5');
  const [side, setSide] = useState('Односторонний');
  const [gap, setGap] = useState('С зазором');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, что length не равно 0 и первая цифра больше 0
    if (!length || length === '0' || length.charAt(0) === '0') {
      setError('Длина забора должна быть больше 0 и начинаться с цифры больше 0');
      return;
    } else {
      setError(''); // Очищаем сообщение об ошибке, если валидация прошла успешно
    }

    // значения length, height, side и gap для выполнения расчетов или другой логики здесь
    // Например, выполнение расчетов на основе выбранных параметров

    console.log('Длина забора (метры):', length);
    console.log('Высота забора:', height);
    console.log('Тип стороны:', side);
    console.log('Тип зазора:', gap);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="length" className="block text-gray-600 mb-2">
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
              setError(''); // Очищаем сообщение об ошибке при вводе правильных данных
            } else {
              setError('Длина забора должна быть числом от 1 до 9999'); // Устанавливаем сообщение об ошибке
            }
          }}
          // className="border border-gray-300 rounded px-2 py-1 w-full"
          className={`border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded px-2 py-1 w-full`}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block text-gray-600 mb-2">
          Высота забора:
        </label>
        <select
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-full"
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
        <label htmlFor="side" className="block text-gray-600 mb-2">
          Тип стороны:
        </label>
        <select
          id="side"
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-full"
          required
        >
          {/* <option value="">Выберите...</option> */}
          <option value="Односторонний">Односторонний</option>
          <option value="Двусторонний">Двусторонний</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="gap" className="block text-gray-600 mb-2">
          Тип зазора:
        </label>
        <select
          id="gap"
          value={gap}
          onChange={(e) => setGap(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-full"
          required
        >
          {/* <option value="">Выберите...</option> */}
          <option value="С зазором">С зазором</option>
          <option value="Шахматка">Шахматка</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Рассчитать
      </button>
    </form>
  );
};

export default FormEuro;
