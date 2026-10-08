import {designProjects} from '../content/interfaces.ts';
import {useTabFromHash} from '../hooks/useTabFromHash.ts';
import {useTabs} from '../hooks/useTabs.ts';
import DesignProjectView from './DesignProjectView.tsx';
import '../styles/DesignTabs.css';

const panelIds = designProjects.map((project) => project.id);

const DesignTabs = () => {
    const {activeIndex, setActiveIndex, onKeyDown, tabProps} = useTabs(designProjects.length);
    useTabFromHash(panelIds, setActiveIndex);

    return (
        <div className="design-tabs" data-reveal>
            <div className="design-tabs__list" role="tablist" aria-label="Design projects" onKeyDown={onKeyDown}>
                {designProjects.map((project, index) => (
                    <button
                        key={project.id}
                        {...tabProps(index)}
                        id={`${project.id}-tab`}
                        aria-controls={project.id}
                        className="design-tabs__tab"
                    >
                        <span className="design-tabs__name">{project.name}</span>
                        <span className="design-tabs__topic">{project.topic}</span>
                    </button>
                ))}
            </div>
            {designProjects.map((project, index) => (
                <div
                    key={project.id}
                    role="tabpanel"
                    id={project.id}
                    aria-labelledby={`${project.id}-tab`}
                    hidden={index !== activeIndex}
                    className="design-tabs__panel"
                >
                    <DesignProjectView project={project}/>
                </div>
            ))}
        </div>
    );
};

export default DesignTabs;
