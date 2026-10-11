import SiteHeader from './components/SiteHeader.tsx';
import Footer from './components/Footer.tsx';
import Hero from './sections/Hero.tsx';
import Capabilities from './sections/Capabilities.tsx';
import SelectedWork from './sections/SelectedWork.tsx';
import Modeling from './sections/Modeling.tsx';
import AIPractice from './sections/AIPractice.tsx';
import Experience from './sections/Experience.tsx';
import Education from './sections/Education.tsx';
import Contact from './sections/Contact.tsx';
import {useLegacyHashRedirect} from './hooks/useLegacyHashRedirect.ts';
import {useRevealOnScroll} from './hooks/useRevealOnScroll.ts';
import {useOpenDetailsWhilePrinting} from './hooks/useOpenDetailsWhilePrinting.ts';

const App = () => {
    useLegacyHashRedirect();
    useRevealOnScroll();
    useOpenDetailsWhilePrinting();

    return (
        <>
            <a className="skip-link" href="#main">Skip to content</a>
            <SiteHeader/>
            <main id="main">
                <Hero/>
                <Capabilities/>
                <SelectedWork/>
                <Modeling/>
                <AIPractice/>
                <Experience/>
                <Education/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
