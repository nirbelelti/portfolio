import {DesignProject} from '../content/interfaces.ts';
import Icon from './Icon.tsx';
import ImageDialog from './ImageDialog.tsx';
import PrototypeLink from './PrototypeLink.tsx';
import ViewStepper from './ViewStepper.tsx';
import '../styles/DesignProjectView.css';

interface DesignProjectViewProps {
    project: DesignProject;
}

const Pictures = ({project}: DesignProjectViewProps) => (
    <ul className="design__pictures">
        {project.pictures?.map((picture) => (
            <li key={picture.caption}>
                <ImageDialog
                    title={`${project.name} — ${picture.caption}`}
                    {...picture}
                    triggerClassName="design__picture"
                    triggerLabel={`View ${project.name} ${picture.caption.toLowerCase()} full size`}
                >
                    <img src={picture.src} width={picture.width} height={picture.height} alt="" loading="lazy" decoding="async"/>
                    <Icon name="expand"/>
                </ImageDialog>
                <p className="design__caption">{picture.caption}</p>
            </li>
        ))}
    </ul>
);

const DesignProjectView = ({project}: DesignProjectViewProps) => (
    <div className="design">
        <header className="design__head">
            <p className="label">{project.course}</p>
            <h4 className="design__title">{project.name} — {project.title}</h4>
            <p className="design__summary">{project.summary}</p>
        </header>
        {project.views && (
            <ViewStepper
                idPrefix={project.id}
                label={`${project.name} design views`}
                views={project.views}
                questionLevel="h5"
                reveal={false}
            />
        )}
        {project.pictures && <Pictures project={project}/>}
        {(project.origin || project.prototypeUrl) && (
            <footer className="design__footer">
                {project.prototypeUrl && <PrototypeLink name={project.name} url={project.prototypeUrl}/>}
                {project.origin && <p className="design__origin">{project.origin}</p>}
            </footer>
        )}
    </div>
);

export default DesignProjectView;
