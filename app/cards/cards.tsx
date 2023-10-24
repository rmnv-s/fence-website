import { formattedCardsData } from '../components/assets/cardsData';
import Wrapper from '@/app/components/wrapper/wrapper';
import CardItem from './card-item';

const Cards = () => {
    return (
        <>
            <section id="catalog" className="bg-black pt-[9.5rem] pb-[20rem]">
                <Wrapper>
                    <h2 className="text-whiteFont mb-20 leading-[3.2rem]">Каталог продукции</h2>
                    <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {formattedCardsData.map((card) => (
                                <CardItem
                                    key={card.id}
                                    id={card.id}
                                    img={card.img}
                                    title={card.title}
                                    price={card.price}
                                    link={card.link}
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
