import Link from "next/link";
const FormInfoExplanation = ({ showParagraph = true }) => {
  return (
    <div>
      <p className='text-base leading-10 md:text-m '>
        Дополнительную информацию по расценкам вы можете узнать у менеджера
        компании по телефону
        <Link className='' href='tel:+74951515671'>
          : +7 495 151-56-71
        </Link>
      </p>
    </div>
  );
};

export default FormInfoExplanation;
