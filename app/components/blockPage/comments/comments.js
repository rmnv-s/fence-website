import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";
import avatar from "@/public/img/comment-avatar.png";
import avatar1 from "@/public/img/comment-avatar-1.png";
import avatar2 from "@/public/img/comment-avatar-2.png";
const Comments = () => {
  return (
    <>
      <section className='pt-[10rem] pb-[20rem]'>
        <Wrapper>
          <h2 className='text-black mb-24 leading-[4.2rem]'>
            Отзывы о нашей работе
          </h2>
          <div className='flex overflow-x-auto'>
            <ul className='flex space-x-[20px] md:space-x-[60px]'>
              <li className='px-[4.5rem] py-16 bg-black text-whiteFont rounded-[2rem] flex-shrink-0 w-[300px] md:w-[570px]'>
                <div className='flex items-center mb-8'>
                  <Image className='mr-14' src={avatar} alt='аватар' />
                  <h3 className='text-l'>Илья Антонов</h3>
                </div>
                <p className='text-base'>
                  Профессионализм, внимание к деталям и исключительный подход к
                  работе поразили меня с самого начала. Ребята быстро и
                  качественно реализовали мои пожелания, даже добавив некоторые
                  улучшения, о которых я и не подумал бы. Огромное спасибо за
                  вашу работу и отношение к клиентам! Буду рекомендовать вас
                  всем знакомым!
                </p>
              </li>

              <li className='px-[4.5rem] py-16 bg-black text-whiteFont rounded-[2rem] flex-shrink-0 w-[300px] md:w-[570px]'>
                <div className='flex items-center mb-8'>
                  <Image className='mr-14' src={avatar1} alt='аватар' />
                  <h3 className='text-l'> Дмитрий Сергеев </h3>
                </div>
                <p className='text-base'>
                  Я был приятно удивлен, как быстро и профессионально мои
                  требования были учтены и реализованы. Мой новый забор просто
                  великолепен и полностью соответствует моим ожиданиям. Внимание
                  к деталям и качество работы меня поразили. Спасибо за отличное
                  выполнение проекта!
                </p>
              </li>

              <li className='px-[4.5rem] py-16 bg-black text-whiteFont rounded-[2rem] flex-shrink-0 w-[300px] md:w-[570px] '>
                <div className='flex items-center mb-8'>
                  <Image className='mr-14' src={avatar2} alt='аватар' />
                  <h3 className='text-l'>Мария Игнатьева</h3>
                </div>
                <p className='text-base'>
                  Оперативное выполнение всех моих пожеланий и оригинальные
                  идеи, предложенные командой, сделали этот процесс
                  увлекательным. Спасибо вам за профессионализм и заботу!"
                </p>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Comments;
