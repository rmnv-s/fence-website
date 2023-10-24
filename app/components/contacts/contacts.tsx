import Wrapper from '@/app/components/wrapper/wrapper';
import SvgLove from '@/app/components/assets/love.icon';
import Link from 'next/link';
import SvgWhatsapp from '@/app/components/assets/whatsapp.icon';
import SvgTelegram from '@/app/components/assets/telegram.icon';
import SvgMailRed from '@/app/components/assets/mail-contact.icon';
const advantages = [
    {
        title: <SvgLove />,
        subtitle: 'С нетерпением ждем возможности воплотить ваши идеи в жизнь.',
    },
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
];

const Contacts = () => {
    return (
        <section id="contacts" className="bg-bgwhite  pt-40 pb-40">
            <Wrapper>
                <h2 className="text-2xl mb-20 leading-[3.2rem]">Контакты</h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    <li className="leading-[2.5rem] relative">
                        <Link
                            className="text-m font-bold mb-12"
                            href="tel:+74951515671"
                            target="_blank"
                        >
                            Teл.: +7 495 151-56-71
                        </Link>
                        <div className="">
                            <p className="text-base font-normal mt-8 opacity-50">
                                {' '}
                                пн-вс: 09:00 – 21:00
                            </p>
                            <Link
                                className="text-base font-normal opacity-50"
                                href="mailto:stalnuzor@gmail.com"
                                target="_blank"
                            >
                                stalnuzor@gmail.com
                            </Link>

                            <div className="social flex absolute top-[5.2rem] max-[1145px]:flex-col right-12 max-[375px]:right-6">
                                <Link
                                    className=""
                                    href="https://wa.me/+79779289130"
                                    target="_blank"
                                >
                                    <SvgWhatsapp className="mr-4 mb-4 max-[375px]:mr-0" />
                                </Link>
                                <Link className="" href="https://t.me/+79779289130" target="_blank">
                                    <SvgTelegram className="mr-4 mb-4 max-[375px]:mr-0" />
                                </Link>
                                <Link
                                    className=""
                                    href="mailto:stalnuzor@gmail.com"
                                    target="_blank"
                                >
                                    <SvgMailRed className="mr-4 max-[375px]:mr-0" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-base font-normal mt-16 max-[1145px]:max-w-[20rem]">
                            С нетерпением ждем возможности воплотить ваши идеи в жизнь.
                        </p>
                    </li>

                    <li className="leading-[2.5rem]">
                        <h3 className="text-m font-bold mb-8">Индивидуальный подход</h3>
                        <p className="text-base font-normal">
                            Мы понимаем, что каждый клиент уникален, поэтому создаем заборы,
                            полностью соответствующие вашим потребностям и предпочтениям. С нами вы
                            получите забор, который будет идеально вписываться в дизайн вашего дома.
                        </p>
                    </li>
                    <li className="leading-[2.5rem]">
                        <h3 className="text-m font-bold mb-8">Качество и надежность</h3>
                        <p className="text-base font-normal">
                            Мы используем только высококачественные материалы и современное
                            оборудование. Все работы выполняются опытными профессионалами,
                            гарантируя долговечность и надежность вашего забора.
                        </p>
                    </li>
                    <li className="leading-[2.5rem]">
                        <h3 className="text-m font-bold mb-8">Под ключ</h3>
                        <p className="text-base font-normal">
                            Мы берем на себя все этапы работы - от проектирования и выбора
                            материалов до установки и обслуживания. Вам не придется беспокоиться о
                            деталях, мы берем всю ответственность на себя.
                        </p>
                    </li>
                    <li className="leading-[2.5rem]">
                        <h3 className="text-m font-bold mb-8">Конкурентоспособные цены</h3>
                        <p className="text-base font-normal">
                            Мы предлагаем отличное соотношение цены и качества. Наша цель - сделать
                            качественные заборы доступными для каждого клиента за счет гибкого
                            подхода к каждому проекту.
                        </p>
                    </li>
                    <li className="leading-[2.5rem]">
                        <h3 className="text-m font-bold mb-8">Сроки выполнения</h3>
                        <p className="text-base font-normal">
                            Мы стремимся соблюдать установленные сроки работ, чтобы вы могли
                            наслаждаться результатом своевременно.
                        </p>
                    </li>
                </ul>
            </Wrapper>
        </section>
    );
};

export default Contacts;
