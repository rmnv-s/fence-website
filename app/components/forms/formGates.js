import Link from 'next/link';

const FormNaves = () => {
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

export default FormNaves;
