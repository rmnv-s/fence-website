import SvgZaborLogo from '@/components/assets/logo.icon';
import SvgCatalogZaborIcon from '@/components/assets/catalog.icon';
import SvgCalculatorZaborIcon from '@/components/assets/calculator.icon';
import SvgPhoneZaborIcon from '@/components/assets/phone.icon';
import Wrapper from '@/components/wrapper/wrapper';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="bg-black ">
      <Wrapper>
        <header className="flex justify-between relative z-10 items-center pt-6 flex-wrap max-[745px]:flex-col max-[745px]:items-start max-[745px]:gap-12">
          <Link href="/">
            <SvgZaborLogo className="" />
          </Link>

          <nav className="">
            <ul className="flex text-whiteFont">
              <div className="flex max-[745px]:flex-col-reverse max-[745px]:gap-6 max-[375px]:mt-14">
                <li className="mr-12">
                  <Link className="flex text-m" href="/#catalog">
                    <SvgCatalogZaborIcon className="mr-2" />
                    Каталог
                  </Link>
                </li>
                <li className="mr-12">
                  <Link className="flex text-m" href="/calculator">
                    <SvgCalculatorZaborIcon className="mr-2" />
                    Калькулятор забора
                  </Link>
                </li>
              </div>

              <li className="max-[745px]:absolute right-0 top-14 max-[375px]:left-0 max-[375px]:top-[90px]">
                <Link className="flex text-m" href="tel:+79680385550">
                  <SvgPhoneZaborIcon className="mr-2" />
                  +7 968 038-55-50
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Wrapper>
    </div>
  );
}
