import AboutMe from "./pages/AboutMe.tsx";
import Technologies from "./pages/Technologies.tsx";
import Projects from "./pages/Projects.tsx";
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Ux from "./pages/Ux.tsx";
import Modeling from "./pages/Modeling.tsx";
import AIEngineering from "./pages/AIEngineering.tsx";

const MobileScrollMainComponent = () => {
    return (
        <>
            <section id="home">
                <AboutMe/>
            </section>
            <section id="technologies">
                <Technologies/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="education">
                <Education/>
            </section>
            <section id="employment">
                <Employment/>
            </section>
            <section id="ux">
                <Ux/>
            </section>
            <section id="modeling">
                <Modeling/>
            </section>
            <section id="ai">
                <AIEngineering/>
            </section>
        </>
    );
}

export default MobileScrollMainComponent;