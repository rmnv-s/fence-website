import SvgZaborLogo from '@/app/components/assets/logo.icon';
import SvgCatalogZaborIcon from '@/app/components/assets/catalog.icon';
import SvgCalculatorZaborIcon from '@/app/components/assets/calculator.icon';
import SvgPhoneZaborIcon from '@/app/components/assets/phone.icon';
import SvgContactMenu from '@/app/components/assets/contactMenu.icon';
import Wrapper from '@/app/components/wrapper/wrapper';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="bg-black ">
            <header className="bg-black h-36 w-full fixed z-10 max-[810px]:h-[10.5rem]">
                <Wrapper>
                    <div className="flex justify-between relative z-10 items-end pt-6 pb-6 flex-wrap max-[768px]:flex-col max-[768px]:items-start ">
                        <Link href="/">
                            <SvgZaborLogo className="" />
                        </Link>

                        <nav className="max-[809px]:mt-6">
                            <ul className="flex text-whiteFont">
                                <div className="flex max-[375px]:mt-0 gap-4 max-[440px]:gap-2">
                                    <li className="mr-12">
                                        <Link
                                            className="flex text-m smooth-scroll max-[440px]:text-sm"
                                            href="/#catalog"
                                        >
                                            <SvgCatalogZaborIcon className="mr-2 max-[768px]:mr-0 max-[440px]:hidden" />
                                            Каталог
                                        </Link>
                                    </li>
                                    <li className="mr-12">
                                        <Link
                                            className="flex text-m max-[440px]:text-sm"
                                            href="/calculator"
                                        >
                                            <SvgCalculatorZaborIcon className="mr-2 max-[768px]:mr-0 max-[440px]:hidden" />
                                            Калькулятор
                                        </Link>
                                    </li>

                                    <li className="mr-12">
                                        <Link
                                            className="flex text-m smooth-scroll max-[440px]:text-sm"
                                            href="/#contacts"
                                        >
                                            <SvgContactMenu className="mr-2 max-[768px]:mr-0 max-[440px]:hidden" />
                                            Контакты
                                        </Link>
                                    </li>
                                </div>

                                <li className="max-[768px]:absolute right-0 top-16 max-[340px]:top-[4.5rem]">
                                    <Link
                                        className="flex text-m max-[440px]:text-sm"
                                        href="tel:+74951515671"
                                        target="_blank"
                                    >
                                        <SvgPhoneZaborIcon className="mr-2" />
                                        +7 495 151-56-71
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="text-whiteFont flex absolute right-0 top-[1.3rem] text-sm ">
                            <p className="mr-4"> пн-вс: </p>
                            <span className="text-yellow"> 09:00 – 21:00 </span>
                        </div>
                    </div>
                </Wrapper>
            </header>
        </div>
    );
}
