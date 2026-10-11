import DesignTabs from '../components/DesignTabs.tsx';
import Section from '../components/Section.tsx';
import ViewStepper from '../components/ViewStepper.tsx';
import {designRole} from '../content/interfaces.ts';
import {modelViews, tracedUseCase} from '../content/modeling.ts';
import '../styles/Modeling.css';

const SystemsTrack = () => (
    <div className="track">
        <header className="track__header" data-reveal>
            <p className="label">Systems · UML</p>
            <h3 className="track__title">Toll road management system</h3>
            <p className="track__intro">
                A complete UML model built by a project team in DTU’s System Integration course (02291) and
                awarded the top grade. Six views, each answering a different question about the same system.
            </p>
        </header>
        <ViewStepper
            idPrefix="model"
            label="Model views"
            views={modelViews}
            note={<>
                Views 4–6 follow one requirement, <strong>{tracedUseCase}</strong>, from interaction to constraint
                to acceptance test. Those three are my own work.
            </>}
        />
        <p className="track__takeaway" data-reveal>
            The habit carries into everyday work: agree on interfaces first, write the invariants down, and
            define acceptance criteria before the implementation starts.
        </p>
    </div>
);

const InterfacesTrack = () => (
    <div id="interfaces" className="track">
        <header className="track__header" data-reveal>
            <p className="label">Interfaces · Figma</p>
            <h3 className="track__title">Clickable prototypes before code</h3>
            <p className="track__intro">{designRole}</p>
        </header>
        <DesignTabs/>
    </div>
);

const Modeling = () => (
    <Section
        id="modeling"
        label="Modeling"
        title={<>I model <em>before</em> I build</>}
        intro="Two kinds of model, made while change is still cheap: the system’s architecture in UML, and the user’s experience as clickable prototypes in Figma."
    >
        <SystemsTrack/>
        <InterfacesTrack/>
    </Section>
);

export default Modeling;
