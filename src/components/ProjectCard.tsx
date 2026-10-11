import {Project} from '../content/projects.ts';
import Icon from './Icon.tsx';
import TagList from './TagList.tsx';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const headingId = `${project.id}-title`;
    const variant = project.featured ? 'project--featured' : 'project--compact';

    return (
        <article id={project.id} className={`project ${variant}`} aria-labelledby={headingId} data-reveal>
            <header className="project__head">
                <p className="label">{project.kicker}</p>
                <h3 id={headingId} className="project__title">{project.title}</h3>
            </header>
            <dl className="project__story">
                <div>
                    <dt className="label">Problem</dt>
                    <dd>{project.problem}</dd>
                </div>
                <div>
                    <dt className="label">Approach</dt>
                    <dd>{project.approach}</dd>
                </div>
                {project.featured && (
                    <div className="project__outcome">
                        <dt className="label">Outcome</dt>
                        <dd>{project.outcome}</dd>
                    </div>
                )}
            </dl>
            <details className="project__details">
                <summary>
                    Engineering details
                    <Icon name="chevron"/>
                </summary>
                <ul className="project__detail-list">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                {!project.featured && <p className="project__compact-outcome">{project.outcome}</p>}
            </details>
            <footer className="project__footer">
                <TagList tags={project.stack} label={`${project.title} stack`}/>
                <a className="text-button project__repo" href={project.repo} target="_blank" rel="noreferrer">
                    Code on GitHub
                    <Icon name="arrow-up-right"/>
                    <span className="visually-hidden">(opens in a new tab)</span>
                </a>
            </footer>
        </article>
    );
};

export default ProjectCard;
