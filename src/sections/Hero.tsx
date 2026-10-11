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
                        Building software that <em>adapts</em> as products evolve.
                    </span>
                </h1>
                <div className="hero__lead">
                    <p>
                        I’m a full-stack engineer with a strong focus on backend development. I sketch the system
                        before I build it and work in short iterations, so software stays adaptable as the product
                        grows and changes.
                    </p>
                    <p>
                        Since 2016 I’ve built software products, including seven years on a MedTech SaaS, and I’ve
                        been freelancing since 2023. I hold an MSc in Computer Science and Engineering from DTU,
                        specialising in security, and a BA in Business Administration. That combination shapes how I
                        work: with attention to the architecture, the people using the product, and the business
                        problem it needs to solve.
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
