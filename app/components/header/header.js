import SvgZaborLogo from '@/components/assets/logo.icon';
import SvgCatalogZaborIcon from '@/components/assets/catalog.icon';
import SvgCalculatorZaborIcon from '@/components/assets/calculator.icon';
import SvgPhoneZaborIcon from '@/components/assets/phone.icon';
import SvgContactMenu from '@/components/assets/contactMenu.icon';
import Wrapper from '@/components/wrapper/wrapper';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-black ">
      <Wrapper>
        <header className="flex justify-between relative z-10 items-end pt-6 pb-6 flex-wrap max-[745px]:flex-col max-[745px]:items-start max-[745px]:gap-12">
          <Link href="/">
            <SvgZaborLogo className="" />
          </Link>

          <nav className="max-[809px]:mt-6">
            <ul className="flex text-whiteFont">
              <div className="flex max-[745px]:flex-col-reverse max-[745px]:gap-6 max-[375px]:mt-14">
                <li className="mr-12">
                  <Link className="flex text-m smooth-scroll" href="/#catalog">
                    <SvgCatalogZaborIcon className="mr-2" />
                    Каталог
                  </Link>
                </li>
                <li className="mr-12">
                  <Link className="flex text-m" href="/calculator">
                    <SvgCalculatorZaborIcon className="mr-2" />
                    Калькулятор
                  </Link>
                </li>

                <li className="mr-12">
                  <Link className="flex text-m smooth-scroll" href="/#footer">
                    <SvgContactMenu className="mr-2" />
                    Контакты
                  </Link>
                </li>
              </div>

              <li className="max-[745px]:absolute right-0 top-14 max-[375px]:left-0 max-[375px]:top-[90px]">
                <Link className="flex text-m" href="tel:+74951515671" target="_blank">
                  <SvgPhoneZaborIcon className="mr-2" />
                  +7 495 151-56-71
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-whiteFont flex absolute right-0 top-[1.3rem] text-sm max-[340px]:flex-col">
            <p className="mr-4"> пн-вс: </p>
            <span className="text-yellow"> 09:00 – 21:00 </span>
          </div>
        </header>
      </Wrapper>
    </div>
  );
}
