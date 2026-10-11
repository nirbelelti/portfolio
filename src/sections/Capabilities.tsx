import Section from '../components/Section.tsx';
import TagList from '../components/TagList.tsx';
import {capabilities, otherTools} from '../content/capabilities.ts';
import '../styles/Capabilities.css';

const Capabilities = () => (
    <Section
        id="capabilities"
        label="Capabilities"
        title="What I’m good at — and where it comes from"
        intro="Each area notes whether the experience comes from professional work, personal projects or study, with links to the evidence."
    >
        <ul className="capabilities">
            {capabilities.map((capability) => (
                <li key={capability.title} className="capability" data-reveal>
                    <div className="capability__lead">
                        <h3 className="capability__title">{capability.title}</h3>
                        <p className="capability__summary">{capability.summary}</p>
                    </div>
                    <TagList tags={capability.stack} label={`${capability.title} tools`}/>
                    <div className="capability__meta">
                        <p className="label">{capability.basis.join(' · ')}</p>
                        <ul className="capability__evidence" aria-label={`Evidence for ${capability.title}`}>
                            {capability.evidence.map((item) => (
                                <li key={item.href + item.label}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
        <p className="capabilities__other" data-reveal>
            <span className="label">Also worked with</span>
            {otherTools.join(', ')}
        </p>
    </Section>
);

export default Capabilities;
