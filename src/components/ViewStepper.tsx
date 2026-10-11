import {ReactNode} from 'react';
import {StepperView} from '../content/types.ts';
import {useTabs} from '../hooks/useTabs.ts';
import Icon from './Icon.tsx';
import ImageDialog from './ImageDialog.tsx';
import '../styles/ViewStepper.css';

interface ViewStepperProps {
    idPrefix: string;
    label: string;
    views: StepperView[];
    note?: ReactNode;
    questionLevel?: 'h4' | 'h5';
    reveal?: boolean;
}

const ViewStepper = ({idPrefix, label, views, note, questionLevel: Question = 'h4', reveal = true}: ViewStepperProps) => {
    const {activeIndex, onKeyDown, tabProps} = useTabs(views.length);

    const tabId = (view: StepperView) => `${idPrefix}-tab-${view.id}`;
    const panelId = (view: StepperView) => `${idPrefix}-panel-${view.id}`;

    return (
        <div className="stepper" data-reveal={reveal || undefined}>
            <div className="stepper__nav">
                <div className="stepper__tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
                    {views.map((view, index) => (
                        <button
                            key={view.id}
                            {...tabProps(index)}
                            id={tabId(view)}
                            aria-controls={panelId(view)}
                            className={`stepper__tab ${view.highlight ? 'is-highlighted' : ''}`}
                        >
                            <span className="stepper__tab-number" aria-hidden="true">{index + 1}</span>
                            <span className="stepper__tab-label">{view.label}</span>
                            <span className="stepper__tab-kind">{view.kind}</span>
                        </button>
                    ))}
                </div>
                {note && <p className="stepper__note">{note}</p>}
            </div>

            {views.map((view, index) => (
                <div
                    key={view.id}
                    role="tabpanel"
                    id={panelId(view)}
                    aria-labelledby={tabId(view)}
                    hidden={index !== activeIndex}
                    className="stepper__panel"
                >
                    <div className="stepper__explanation">
                        <p className="label">
                            {view.kind}
                            {view.highlight && ` · ${view.highlight}`}
                        </p>
                        <Question className="stepper__question">{view.question}</Question>
                        <p className="stepper__answer">{view.answer}</p>
                    </div>
                    <ImageDialog
                        title={`${view.kind} — ${view.label}`}
                        src={view.src}
                        width={view.width}
                        height={view.height}
                        alt={view.alt}
                        triggerClassName="stepper__picture"
                        triggerLabel={`View the ${view.kind.toLowerCase()} full size`}
                    >
                        <img src={view.src} width={view.width} height={view.height} alt="" loading="lazy" decoding="async"/>
                        <span className="stepper__zoom" aria-hidden="true">
                            <Icon name="expand"/>
                            Full size
                        </span>
                    </ImageDialog>
                </div>
            ))}
        </div>
    );
};

export default ViewStepper;
