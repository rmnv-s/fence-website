import Link from 'next/link';
const FormInfoExplanation = ({ showParagraph = true }) => {
  return (
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
  );
};

export default FormInfoExplanation;
