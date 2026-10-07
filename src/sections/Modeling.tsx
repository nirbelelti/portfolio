import {KeyboardEvent, useRef, useState} from 'react';
import Icon from '../components/Icon.tsx';
import ImageDialog from '../components/ImageDialog.tsx';
import Section from '../components/Section.tsx';
import {ModelView, modelViews, tracedUseCase} from '../content/modeling.ts';
import '../styles/Modeling.css';

const tabId = (view: ModelView) => `model-tab-${view.id}`;
const panelId = (view: ModelView) => `model-panel-${view.id}`;

const keyboardSteps: Record<string, (index: number) => number> = {
    ArrowDown: (index) => index + 1,
    ArrowRight: (index) => index + 1,
    ArrowUp: (index) => index - 1,
    ArrowLeft: (index) => index - 1,
    Home: () => 0,
    End: () => modelViews.length - 1,
};

const Modeling = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const moveFocusWithKeyboard = (event: KeyboardEvent) => {
        const step = keyboardSteps[event.key];
        if (!step) return;

        event.preventDefault();
        const next = (step(activeIndex) + modelViews.length) % modelViews.length;
        setActiveIndex(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <Section
            id="modeling"
            label="Modeling"
            title={<>I model the system <em>before</em> I build it</>}
            intro="A complete UML model of a toll road management system, built by a project team in DTU’s System Integration course (02291) and awarded the top grade. Six views, each answering a different question about the same system."
        >
            <div className="model" data-reveal>
                <div className="model__nav">
                    <div className="model__tabs" role="tablist" aria-label="Model views" onKeyDown={moveFocusWithKeyboard}>
                        {modelViews.map((view, index) => (
                            <button
                                key={view.id}
                                ref={(element) => {
                                    tabRefs.current[index] = element;
                                }}
                                type="button"
                                role="tab"
                                id={tabId(view)}
                                aria-controls={panelId(view)}
                                aria-selected={index === activeIndex}
                                tabIndex={index === activeIndex ? 0 : -1}
                                className={`model__tab ${view.tracesUseCase ? 'is-traced' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="model__tab-number" aria-hidden="true">{index + 1}</span>
                                <span className="model__tab-label">{view.label}</span>
                                <span className="model__tab-kind">{view.kind}</span>
                            </button>
                        ))}
                    </div>
                    <p className="model__thread-note">
                        Views 4–6 follow one requirement, <strong>{tracedUseCase}</strong>, from interaction to
                        constraint to acceptance test. Those three are my own work.
                    </p>
                </div>

                {modelViews.map((view, index) => (
                    <div
                        key={view.id}
                        role="tabpanel"
                        id={panelId(view)}
                        aria-labelledby={tabId(view)}
                        hidden={index !== activeIndex}
                        className="model__panel"
                    >
                        <div className="model__explanation">
                            <p className="label">
                                {view.kind}
                                {view.tracesUseCase && ` · ${tracedUseCase}`}
                            </p>
                            <h3 className="model__question">{view.question}</h3>
                            <p className="model__answer">{view.answer}</p>
                        </div>
                        <ImageDialog
                            title={`${view.kind} — ${view.label}`}
                            src={view.image}
                            width={view.width}
                            height={view.height}
                            alt={view.alt}
                            triggerClassName="model__diagram"
                            triggerLabel={`View the ${view.kind.toLowerCase()} full size`}
                        >
                            <img src={view.image} width={view.width} height={view.height} alt="" loading="lazy" decoding="async"/>
                            <span className="model__zoom" aria-hidden="true">
                                <Icon name="expand"/>
                                Full size
                            </span>
                        </ImageDialog>
                    </div>
                ))}
            </div>
            <p className="model__takeaway prose" data-reveal>
                The habit carries into everyday work: agree on interfaces first, write the invariants down, and
                define acceptance criteria before the implementation starts.
            </p>
        </Section>
    );
};

export default Modeling;
