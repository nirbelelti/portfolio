import Icon from '../components/Icon.tsx';
import Section from '../components/Section.tsx';
import TagList from '../components/TagList.tsx';
import {earlierRoles, Role, roles, studyBreak} from '../content/experience.ts';
import '../styles/Experience.css';

const RoleEntry = ({role}: { role: Role }) => (
    <li id={role.id} className="timeline__entry" data-reveal>
        <p className="timeline__period">{role.period}</p>
        <article className="role" aria-labelledby={`${role.id}-title`}>
            <header className="role__head">
                <h3 id={`${role.id}-title`} className="role__title">{role.title}</h3>
                <p className="role__organisation">
                    {role.organisationUrl
                        ? <a href={role.organisationUrl} target="_blank" rel="noreferrer">{role.organisation}</a>
                        : role.organisation}
                </p>
            </header>
            <p className="role__context">{role.context}</p>
            <ul className="role__highlights">
                {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <TagList tags={role.stack} label={`${role.organisation} focus areas`}/>
        </article>
    </li>
);

const StudyBreak = () => (
    <li className="timeline__entry timeline__entry--break" data-reveal>
        <p className="timeline__period">{studyBreak.period}</p>
        <p className="timeline__break">
            <a href={studyBreak.href}>{studyBreak.text}</a>
        </p>
    </li>
);

const EarlierRoles = () => (
    <li className="timeline__entry" data-reveal>
        <p className="timeline__period">2001 — 2013</p>
        <details className="earlier">
            <summary>
                <span>
                    <span className="role__title">Before software</span>
                    <span className="earlier__teaser">Operations, teams and a garage floor — twelve years that shaped how I work with people.</span>
                </span>
                <Icon name="chevron"/>
            </summary>
            <ul className="earlier__list">
                {earlierRoles.map((role) => (
                    <li key={role.organisation} className="earlier__role">
                        <p className="label">{role.period}</p>
                        <h4 className="earlier__title">{role.title} · {role.organisation}</h4>
                        <p className="earlier__summary">{role.summary}</p>
                    </li>
                ))}
            </ul>
        </details>
    </li>
);

const [currentRole, ...previousRoles] = roles;

const Experience = () => (
    <Section id="experience" label="Experience" title="Where I’ve done the work">
        <ol className="timeline">
            <RoleEntry role={currentRole}/>
            <StudyBreak/>
            {previousRoles.map((role) => <RoleEntry key={role.id} role={role}/>)}
            <EarlierRoles/>
        </ol>
    </Section>
);

export default Experience;
