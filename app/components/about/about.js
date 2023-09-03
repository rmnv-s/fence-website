import Wrapper from '@/components/wrapper/wrapper';
import aboutUsImage from '../../../public/img/about-us.png';
import Image from 'next/image';
const About = () => {
  return (
    <>
      <Wrapper>
        <section className="grid grid-cols-1 md:grid-cols-2 items-center py-80 gap-10">
          <div className="flex justify-center md:justify-end">
            <Image
              className=""
              src={aboutUsImage}
              width={568}
              height={568}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2 className="text-black mb-14 leading-[4.2rem] font-bold max-[995px]:text-xl max-[425px]:mb-12 max-[320px]:text-[2.5rem] max-[320px]:leading-[3.2rem]">
              Наша история <br /> и профессионализм
            </h2>
            <p className="text-black text-[2.1rem] leading-[3.5rem] font-normal max-[995px]:text-m max-[995px]:leading-[2.5rem]">
              Компания "Стальной Узор" – это источник надежности и профессионализма в мире установки
              заборов. Мы специализируемся на создании и установке качественных заборов под ключ,
              которые не только обеспечивают безопасность и конфиденциальность, но и придают вашему
              пространству неповторимый характер и стиль.
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default About;
