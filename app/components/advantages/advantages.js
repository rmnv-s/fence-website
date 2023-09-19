import Wrapper from '@/components/wrapper/wrapper';
import SvgLove from '@/components/assets/love.icon';

const advantages = [
  {
    title: 'Индивидуальный подход',
    subtitle:
      'Мы понимаем, что каждый клиент уникален, поэтому создаем заборы, полностью соответствующие вашим потребностям и предпочтениям. С нами вы получите забор, который будет идеально вписываться в дизайн вашего дома.',
  },
  {
    title: 'Качество и надежность',
    subtitle:
      'Мы используем только высококачественные материалы и современное оборудование. Все работы выполняются опытными профессионалами, гарантируя долговечность и надежность вашего забора.',
  },
  {
    title: 'Под ключ',
    subtitle:
      'Мы берем на себя все этапы работы - от проектирования и выбора материалов до установки и обслуживания. Вам не придется беспокоиться о деталях, мы берем всю ответственность на себя.',
  },
  {
    title: 'Конкурентоспособные цены',
    subtitle:
      'Мы предлагаем отличное соотношение цены и качества. Наша цель - сделать качественные заборы доступными для каждого клиента за счет гибкого подхода к каждому проекту.',
  },
  {
    title: 'Сроки выполнения',
    subtitle:
      'Мы стремимся соблюдать установленные сроки работ, чтобы вы могли наслаждаться результатом своевременно.',
  },
  {
    title: <SvgLove />,
    subtitle: 'С нетерпением ждем возможности воплотить ваши идеи в жизнь.',
  },
];

const Advantages = () => {
  return (
    <section className="bg-bgwhite  pt-28 pb-40">
      <Wrapper>
        <h2 className="text-2xl mb-20 leading-[3.2rem]">Наши преимущества</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {advantages.map((item, index) => (
            <li className="leading-[2.5rem]" key={index}>
              <h3 className="text-m font-bold mb-8">{item.title}</h3>
              <p className="text-base font-normal"> {item.subtitle}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Advantages;
