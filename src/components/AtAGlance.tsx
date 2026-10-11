import {atAGlance} from '../content/profile.ts';
import '../styles/AtAGlance.css';

const AtAGlance = () => (
    <div className="glance">
        <h2 className="visually-hidden">At a glance</h2>
        <dl className="glance__facts">
            {atAGlance.map((fact) => (
                <div key={fact.label} className={`glance__fact ${fact.wide ? 'glance__fact--wide' : ''}`}>
                    <dt className="label">{fact.label}</dt>
                    <dd>{fact.value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

export default AtAGlance;
