import HeaderContent from '@/app/components/headerContant/headerContant';
import About from '@/app/components/about/about';
import Contacts from '@/app/components/contacts/contacts';
import Cards from './cards/cards';
import Works from '@/app/components/works/works';
import Comments from '@/app/components/comments/comments';

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
