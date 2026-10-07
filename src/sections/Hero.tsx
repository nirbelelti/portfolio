import AnnotatedPortrait from '../components/AnnotatedPortrait.tsx';
import AtAGlance from '../components/AtAGlance.tsx';
import Icon from '../components/Icon.tsx';
import {profile} from '../content/profile.ts';
import '../styles/Hero.css';

const Hero = () => (
    <section id="top" className="hero" aria-labelledby="hero-heading">
        <div className="container hero__layout">
            <div className="hero__text">
                <h1 id="hero-heading">
                    <span className="hero__name label">
                        {profile.name} — software engineer, Copenhagen
                    </span>
                    <span className="visually-hidden">: </span>
                    <span className="hero__claim">
                        Engineering today’s software with <em>tomorrow</em> in mind.
                    </span>
                </h1>
                <div className="hero__lead">
                    <p>
                        I’m a full-stack engineer with a strong focus on backend development. I learn quickly, work
                        in short iterations, and sketch the system before I build it, so it stays flexible as
                        requirements change.
                    </p>
                    <p>
                        I’ve worked as a professional software developer since 2016 and moved to freelancing in
                        2023. I hold an MSc in Computer Science and Engineering from DTU, specialising in security,
                        and a BA in Business Administration — a mix of technical and business thinking I bring to
                        every problem.
                    </p>
                </div>
                <div className="hero__actions">
                    <a className="button button--primary" href="#work">
                        See selected work
                        <Icon name="arrow-right"/>
                    </a>
                    <a className="button" href={`mailto:${profile.email}`}>
                        <Icon name="mail"/>
                        Email me
                    </a>
                </div>
            </div>
            <AnnotatedPortrait/>
        </div>
        <div className="container">
            <AtAGlance/>
        </div>
    </section>
);

export default Hero;
