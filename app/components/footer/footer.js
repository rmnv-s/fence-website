import Wrapper from '@/components/wrapper/wrapper';
import Link from 'next/link';

import SvgPhoneFooterIcon from '@/components/assets/phone-footer.icon';
import SvgMailFooterIcon from '@/components/assets/mail-footer.icon';

const Footer = () => {
  return (
    <footer className="bg-black text-whiteFont py-28">
      <Wrapper>
        <h2 className="text-2xl mb-20">Контакты</h2>

        <ul className="flex justify-between flex-wrap flex-col-reverse gap-8 items-start  md:flex-row md:items-center">
          <li className="">
            <p className="text-[16px] py-10 text-white opacity-75"> © 2015-2023 Стальной узор </p>
          </li>
          <li className="">
            <Link className="flex text-m items-center" href="tel:+74951515671" target="_blank">
              <SvgPhoneFooterIcon className="mr-4" />
              +7 495 151-56-71
            </Link>
          </li>
          <li className="">
            <Link
              className="flex text-m items-center"
              href="mailto:stalnuzor@gmail.com"
              target="_blank"
            >
              <SvgMailFooterIcon className="mr-4" />
              stalnuzor@gmail.com
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
