import card1 from '../../../public/img/card-img/profnastil.webp';
import card2 from '../../../public/img/card-img/euro.webp';
import card3 from '../../../public/img/card-img/rabiza.webp';
import card4 from '../../../public/img/card-img/vorota.webp';
import card5 from '../../../public/img/card-img/naves.webp';

export const cardsData = [
  {
    id: 'e1',
    title: 'Заборы<br>из профнастила',
    img: card1,
    price: 1600,
    link: '/profnastil',
  },
  {
    id: 'e2',
    title: 'Заборы<br>из евроштакетника',
    img: card2,
    price: 1900,
    link: '/euroshtaketnik',
  },
  {
    id: 'e3',
    title: 'Заборы<br>из сетки рабицы',
    img: card3,
    price: 680,
    link: '/setka',
  },
  {
    id: 'e4',
    title: 'Ворота автоматические, распашные, откатные',
    img: card4,
    price: 75000,
    link: '/vorota',
  },
  {
    id: 'e5',
    title: 'Навесы',
    img: card5,
    price: 4400,
    link: '/naves',
  },
];

export const formattedCardsData = cardsData.map((item) => ({
  ...item,
  title: item.title.replace(/<br>/g, '\n'),
}));
