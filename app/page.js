import HeaderContent from '@/components/headerContant/headerContant';
import About from '@/components/about/about';
import Contacts from '@/components/contacts/contacts';
import Cards from './cards/cards';
import Works from '@/components/works/works';
import Comments from '@/components/comments/comments';

export default function Home() {
    return (
        <>
            <HeaderContent />
            <main className="text-2xl text-fontWhite z-10">
                <About />
                <Cards />
                <Contacts />
                <Works />
                <Comments />
            </main>
        </>
    );
}
