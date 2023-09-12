import Wrapper from '@/components/wrapper/wrapper';
import Link from 'next/link';
import SvgPhoneFooterIcon from '@/components/assets/phone-footer.icon';
import SvgMailFooterIcon from '@/components/assets/mail-footer.icon';
import SvgLocationFooterIcon from '@/components/assets/location-phone.icon';

const Contact = () => {
  return (
    <section className="bg-black text-whiteFont py-28">
      <Wrapper>
        <h2 className="text-2xl mb-20">Контакты</h2>

        <ul className="flex justify-between flex-wrap gap-8 ">
          <li className="">
            <Link className="flex text-m items-center" href="tel:+79680385550">
              <SvgPhoneFooterIcon className="mr-4" />
              +7 968 038-55-50
            </Link>
          </li>
          <li className="">
            <Link className="flex text-m items-center" href="mailto:stalnoyzabor@gmail.com">
              <SvgMailFooterIcon className="mr-4" />
              stalnoyzabor@gmail.com
            </Link>
          </li>

          <li className="">
            <Link className="flex text-m items-center" href="#">
              <SvgLocationFooterIcon className="mr-4" />
              Москва, Варшавское ш. д.123
            </Link>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Contact;
