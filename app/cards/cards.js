import { formattedCardsData } from '../components/assets/cardsData';
import Wrapper from '@/components/wrapper/wrapper';

import CardItem from './card-item';

const Cards = () => {
  return (
    <>
      <section className="bg-black pt-[7.5rem] pb-[20rem]">
        <Wrapper>
          <h2 className="text-whiteFont mb-20">Каталог продукции</h2>
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {formattedCardsData.map((card) => (
                <CardItem
                  key={card.slug}
                  id={card.id}
                  img={card.img}
                  title={card.title}
                  price={card.price}
                />
              ))}
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Cards;
