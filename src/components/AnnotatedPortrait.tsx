import {CSSProperties, useState} from 'react';
import {portraitNotes} from '../content/profile.ts';
import portrait480 from '../assets/portrait/portrait-480.webp';
import portrait960 from '../assets/portrait/portrait-960.webp';
import '../styles/AnnotatedPortrait.css';

const VIEWBOX_HEIGHT = 90;
const LABEL_X = 61;
const ELBOW_X = 56;
const LABEL_BASELINE_OFFSET = 2.4;

const toViewBoxY = (percent: number) => (percent / 100) * VIEWBOX_HEIGHT;

const leaderPath = ({anchor, labelY}: (typeof portraitNotes)[number]) => {
    const endY = toViewBoxY(labelY + LABEL_BASELINE_OFFSET);
    return `M ${anchor.x} ${toViewBoxY(anchor.y)} L ${ELBOW_X} ${endY} L ${LABEL_X} ${endY}`;
};

const AnnotatedPortrait = () => {
    const [highlighted, setHighlighted] = useState<number | null>(null);

    const stateFor = (index: number) => (highlighted === index ? 'is-highlighted' : '');
    const orderStyle = (index: number) => ({'--order': index}) as CSSProperties;

    return (
        <figure className="portrait">
            <img
                className="portrait__drawing"
                src={portrait480}
                srcSet={`${portrait480} 480w, ${portrait960} 960w`}
                sizes="(min-width: 64em) 19rem, 42vw"
                width={480}
                height={743}
                alt="Pen-and-ink portrait of Nir Belelti"
            />
            <svg className="portrait__leaders" viewBox={`0 0 100 ${VIEWBOX_HEIGHT}`} aria-hidden="true">
                {portraitNotes.map((note, index) => (
                    <path
                        key={note.kicker}
                        className={`portrait__leader ${stateFor(index)}`}
                        style={orderStyle(index)}
                        d={leaderPath(note)}
                        pathLength={1}
                    />
                ))}
            </svg>
            {portraitNotes.map((note, index) => (
                <span
                    key={note.kicker}
                    className={`portrait__dot ${stateFor(index)}`}
                    style={{...orderStyle(index), left: `${note.anchor.x}%`, top: `${note.anchor.y}%`}}
                    aria-hidden="true"
                />
            ))}
            <figcaption className="portrait__notes">
                <ul>
                    {portraitNotes.map((note, index) => (
                        <li
                            key={note.kicker}
                            className={`portrait__note ${stateFor(index)}`}
                            style={{...orderStyle(index), top: `${note.labelY}%`}}
                        >
                            <a
                                href={note.href}
                                onMouseEnter={() => setHighlighted(index)}
                                onMouseLeave={() => setHighlighted(null)}
                                onFocus={() => setHighlighted(index)}
                                onBlur={() => setHighlighted(null)}
                            >
                                <span className="label">{note.kicker}</span>
                                <span className="portrait__note-text">{note.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </figcaption>
        </figure>
    );
};

export default AnnotatedPortrait;
