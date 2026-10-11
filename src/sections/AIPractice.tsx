import Section from '../components/Section.tsx';
import TagList from '../components/TagList.tsx';
import Icon from '../components/Icon.tsx';
import {practices, principles, workflow} from '../content/ai.ts';
import '../styles/AIPractice.css';

const AIPractice = () => (
    <Section
        id="ai"
        label="AI"
        title="AI in practice — with the engineering left in"
        intro="From personal projects and my daily workflow. I use AI to deliver more, and keep the judgement — architecture, acceptance criteria and review — with me."
    >
        <div className="workflow" data-reveal>
            <h3 className="label">How I work with coding agents</h3>
            <ol className="workflow__steps">
                {workflow.map((step) => (
                    <li key={step.label} className={`workflow__step workflow__step--${step.owner.toLowerCase()}`}>
                        <span className="workflow__label">{step.label}</span>
                        <span className="workflow__owner">{step.owner}</span>
                    </li>
                ))}
            </ol>
        </div>

        <div className="practices">
            {practices.map((practice) => (
                <article key={practice.title} className="practice" data-reveal>
                    <h3 className="practice__title">{practice.title}</h3>
                    <p className="practice__body">{practice.body}</p>
                    <TagList tags={practice.tags} label={`${practice.title} topics`}/>
                </article>
            ))}
        </div>

        <details className="principles" data-reveal>
            <summary>
                Nine principles I apply to production AI
                <Icon name="chevron"/>
            </summary>
            <dl className="principles__list">
                {principles.map((principle) => (
                    <div key={principle.title} className="principle">
                        <dt>{principle.title}</dt>
                        <dd>{principle.body}</dd>
                    </div>
                ))}
            </dl>
        </details>
    </Section>
);

export default AIPractice;
