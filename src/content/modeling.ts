import componentDesign from '../assets/modeling/component_design.webp';
import classDesign from '../assets/modeling/class_design.webp';
import behaviourDesign from '../assets/modeling/behaviour_design.webp';
import sequenceDiagram from '../assets/modeling/validation_use_case_realisation.webp';
import oclConstraints from '../assets/modeling/ocl_constraints.webp';
import acceptanceTest from '../assets/modeling/acceptance_test.webp';

export interface ModelView {
    id: string;
    label: string;
    kind: string;
    question: string;
    answer: string;
    image: string;
    width: number;
    height: number;
    alt: string;
    tracesUseCase: boolean;
}

export const tracedUseCase = 'Update toll rate';

export const modelViews: ModelView[] = [
    {
        id: 'architecture',
        label: 'Architecture',
        kind: 'Component diagram',
        question: 'What are the parts, and how do they connect?',
        answer: 'Three tiers — toll-lane hardware, station servers and the enterprise backend — that only talk through declared ports and interfaces.',
        image: componentDesign,
        width: 1554,
        height: 1900,
        alt: 'Component diagram. Toll lane devices (ticket reader, antenna, barrier, printer, card reader, touch screen) connect to a toll lane computer, which connects to a toll station server, which connects to a toll enterprise server alongside a bank and a web server.',
        tracesUseCase: false,
    },
    {
        id: 'structure',
        label: 'Structure',
        kind: 'Class diagram',
        question: 'What does a lane computer own and expose?',
        answer: 'The TollLaneComputer’s operations, one interface per device port, and the report structures it sends upstream.',
        image: classDesign,
        width: 1600,
        height: 1673,
        alt: 'Class diagram of the TollLaneComputer with its operations, device port interfaces, vehicle type, credit card information and a report collection of toll tag and single ticket reports.',
        tracesUseCase: false,
    },
    {
        id: 'behaviour',
        label: 'Behaviour',
        kind: 'State machine',
        question: 'How does the server react to events?',
        answer: 'From idle, the server handles ticket checkout, tag checkout and tag validation — and always returns to idle with a definite answer.',
        image: behaviourDesign,
        width: 1448,
        height: 630,
        alt: 'State machine with an idle state and transitions to ticket checked out, tag checked out and validating tag; validation returns tagOk or tagNotOk to the lane computer.',
        tracesUseCase: false,
    },
    {
        id: 'interactions',
        label: 'Interactions',
        kind: 'Sequence diagram',
        question: 'How does a rate change travel through the system?',
        answer: 'A manager enters a new rate. The enterprise server validates it, then either returns an error or pushes it to every station server and confirms.',
        image: sequenceDiagram,
        width: 1600,
        height: 1051,
        alt: 'Sequence diagram for Update Toll Rate between the enterprise manager, enterprise client, enterprise server and station server, with an alternative fragment for an invalid rate.',
        tracesUseCase: true,
    },
    {
        id: 'constraints',
        label: 'Constraints',
        kind: 'OCL',
        question: 'What must always be true?',
        answer: 'A rate is never negative, every station must be running before an update, and afterwards every station holds the new rate.',
        image: oclConstraints,
        width: 1586,
        height: 792,
        alt: 'OCL constraints: every toll station must be running, the new rate must be zero or more, and after the update every station has the new rate.',
        tracesUseCase: true,
    },
    {
        id: 'validation',
        label: 'Validation',
        kind: 'Acceptance tests',
        question: 'How do we know it works?',
        answer: 'Fixture tables cover the main scenario and both failure paths: a station server offline, and an invalid negative rate.',
        image: acceptanceTest,
        width: 1448,
        height: 1844,
        alt: 'Acceptance test fixture tables for Update rate: a main scenario, a scenario where station servers are not connected, and a scenario with a negative rate.',
        tracesUseCase: true,
    },
];
