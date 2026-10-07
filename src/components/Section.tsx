import {ReactNode} from 'react';
import '../styles/Section.css';

interface SectionProps {
    id: string;
    label: string;
    title: ReactNode;
    intro?: ReactNode;
    children: ReactNode;
}

const Section = ({id, label, title, intro, children}: SectionProps) => {
    const headingId = `${id}-heading`;

    return (
        <section id={id} className="section" aria-labelledby={headingId}>
            <div className="container">
                <header className="section__header" data-reveal>
                    <p className="label">{label}</p>
                    <h2 id={headingId} className="section__title">{title}</h2>
                    {intro && <p className="section__intro prose">{intro}</p>}
                </header>
                {children}
            </div>
        </section>
    );
};

export default Section;
