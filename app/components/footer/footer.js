import Wrapper from '@/components/wrapper/wrapper';
import Link from 'next/link';
import SvgInstZaborIcon from '@/components/assets/inst.icon';
import SvgVkZaborIcon from '@/components/assets/vk.icon';

const Footer = () => {
  return (
    <footer className="bg-black pb-4">
      <Wrapper>
        <div className="flex justify-between items-center max-[425px]:flex-col max-[425px]:mb-4">
          <p className="text-[16px] py-10 text-white opacity-75"> © 2015-2023 Стальной забор </p>
          <ul className="flex items-center">
            <li>
              <Link className="" href="#">
                <SvgInstZaborIcon />
              </Link>
            </li>
            <li className="ml-8">
              <Link className="" href="#">
                <SvgVkZaborIcon className="" />
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
