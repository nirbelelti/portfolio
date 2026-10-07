import ProjectCard from '../components/ProjectCard.tsx';
import Section from '../components/Section.tsx';
import {projects} from '../content/projects.ts';
import '../styles/SelectedWork.css';

const featuredProjects = projects.filter((project) => project.featured);
const moreProjects = projects.filter((project) => !project.featured);

const SelectedWork = () => (
    <Section
        id="work"
        label="Work"
        title="Selected work"
        intro="Personal projects with public code. Each one starts from a concrete problem and shows how I approached it."
    >
        <div className="work__featured">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project}/>)}
        </div>
        <h3 className="work__subheading label">More projects</h3>
        <div className="work__more">
            {moreProjects.map((project) => <ProjectCard key={project.id} project={project}/>)}
        </div>
    </Section>
);

export default SelectedWork;
