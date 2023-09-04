import { cardsData } from '../../components/assets/cardsData';
import Wrapper from '../../components/wrapper/wrapper';

const Page = ({ params }) => {
  const item = cardsData.find((item) => item.id === params.slug);

  return (
    <>
      <section className="bg-black pt-[7.5rem] pb-[20rem]">
        <Wrapper>
          <h1 className="text-white">{item.title}</h1>
          <p className="text-white">{item.price}</p>
        </Wrapper>
      </section>
    </>
  );
};

export default Page;
