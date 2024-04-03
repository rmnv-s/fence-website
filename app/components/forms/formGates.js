import FormInfoExplanation from "@/components/forms/formInfoExplanation";

const navesData = [
  {
    name: "Откатные механические ворота с установкой",
    price: "от 75 000 ₽",
  },
  {
    name: "Автоматезированные ворота с установкой",
    price: "от 11 000 ₽",
  },
  {
    name: "Калитка под врезной замок",
    price: "от 7 500 ₽",
  },
  {
    name: "Ворота с калиткой (стандартный комплект)",
    price: "от 13 500 ₽",
  },
  {
    name: "Ворота и калитка в раме комплекте",
    price: "от 17 800 ₽",
  },
];

const FormNaves = () => {
  return (
    <>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-24 mt-20'>
        <ul className=''>
          {navesData.map((data, index) => {
            return (
              <li
                key={index}
                className='grid grid-cols-1 md:grid-cols-2 border-b border-black py-10'
              >
                <p className='text-base font-normal'>{data.name}</p>
                <span className='text-m font-bold justify-self-start md:justify-self-end mt-4'>
                  {data.price}
                </span>
              </li>
            );
          })}
        </ul>
        <FormInfoExplanation priceInfoText={false} />
      </div>
    </>
  );
};

export default FormNaves;
