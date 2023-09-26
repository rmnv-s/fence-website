'use client';
import Image from 'next/image';
import Link from 'next/link';

const CardItem = ({ id, img, title, price, link }) => {
  return (
    <>
      <li className="bg-white px-8 pt-8 pb-10 flex flex-col">
        {/* <div className=""> */}
        <h3 className="text-[2rem] text-black uppercase font-bold  mb-[1rem]"> {title} </h3>
        <p className="text-m text-black font-medium mb-8 flex flex-1 flex-shrink-1 flex-grow-1">
          {' '}
          Цена: от {price} ₽
        </p>
        <Image className="mb-8 object-contain w-full" src={img} alt={title} />
        {/* </div> */}
        <div className="flex flex-col">
          <Link
            className="text-m font-bold mb-12 max-w-[103px] opacity-70 hover:opacity-100"
            // href={`/cards/${id}`}
            // href="#"
            href={link}
          >
            Подробнее
          </Link>
          <Link
            className="text-m uppercase border border-solid border-black text-center py-8 transition-all duration-500 ease-in-out hover:bg-yellow"
            href="/calculator"
          >
            {/* Заказать */}
            Расчитать
          </Link>
        </div>
      </li>
    </>
  );
};

export default CardItem;
