import HeaderContent from "@/components/blockPage/headerContant/headerContant";
import About from "@/components/blockPage/about/about";
import Contacts from "@/components/blockPage/contacts/contacts";
import Cards from "./cards/cards";
import Works from "@/components/blockPage/works/works";
import Comments from "@/components/blockPage/comments/comments";

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main className='text-2xl text-fontWhite z-10'>
        <About />
        <Cards />
        <Contacts />
        <Works />
        <Comments />
      </main>
    </>
  );
}
