import Project from "./Project.tsx";
import Thumbnail from "./Thumbnail.tsx";

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    alt?: string;
    link: string;
}

interface ProjectsGroupProps {
    group_icon: string;
    icon_alt: string;
    projects: ProjectProps[];
}


const ProjectsGroup = ({group_icon, icon_alt, projects}:ProjectsGroupProps) => {
  return (
    <>
        <div className="row justify-content-center">
            <div className="col-10">
                <div className="col-3 col-md-1 mt-5">
                    <Thumbnail src={group_icon} alt={icon_alt}/>
                </div>
            </div>
        </div>
        {projects.length === 0 && <div className="row">No projects to show</div>}
        {projects.map((project, index) => (
                <div key={index} className="row justify-content-center mb-5">
                    <div  className="col-10 col-md-8 text-start">
                        <Project name={project.name}
                                 description={project.description}
                                 tags={project.technologies}
                                 src={project.image}
                                 alt={project.name}
                                 link={project.link}
                        />
                    </div>
                </div>
            )
        )
        }

    </>
  );
}

export default ProjectsGroup;