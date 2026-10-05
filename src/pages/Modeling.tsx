import { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import '../styles/Modeling.css';

import componentDesign from '../assets/modeling/component_design.png';
import classDesign from '../assets/modeling/class_design.png';
import behaviourDesign from '../assets/modeling/behaviour_design.png';
import sequenceDiagram from '../assets/modeling/validation_use_case_realisation.png';
import oclConstraints from '../assets/modeling/ocl_constraints.png';
import acceptanceTest from '../assets/modeling/acceptance_test.png';

interface DiagramCard {
    src: string;
    badgeLabel: string;
    badgeClass: string;
    title: string;
    description: string;
}

const supportingDiagrams: DiagramCard[] = [
    {
        src: classDesign,
        badgeLabel: 'Class Diagram',
        badgeClass: 'bg-success',
        title: 'TollLaneComputer — Structural Design',
        description: 'Full class model of the toll lane computer including data types, port interfaces, and report structures.',
    },
    {
        src: behaviourDesign,
        badgeLabel: 'State Machine',
        badgeClass: 'bg-warning text-dark',
        title: 'TollEnterpriseServer — Behavioral Model',
        description: 'State machine capturing server responses to ticket checkout, tag validation, and rate update events.',
    },
    {
        src: sequenceDiagram,
        badgeLabel: 'Sequence Diagram',
        badgeClass: 'bg-info text-dark',
        title: 'Update Toll Rate — Use Case Realisation',
        description: 'Actor-driven sequence showing how a rate update propagates from the enterprise manager through the client, server, and all station nodes.',
    },
    {
        src: oclConstraints,
        badgeLabel: 'OCL Constraints',
        badgeClass: 'bg-danger',
        title: 'Formal Invariants & Pre/Post Conditions',
        description: 'Object Constraint Language specifications enforcing rate validity and system-wide station connectivity before and after updates.',
    },
    {
        src: acceptanceTest,
        badgeLabel: 'Acceptance Tests',
        badgeClass: 'bg-dark border border-secondary',
        title: 'UpdateTollRate — Acceptance Scenarios',
        description: 'Action Fixture tests covering the main validation flow and two alternative paths: server unavailability and invalid rate rejection.',
    },
];

const Modeling = () => {
    useEffect(() => {
        document.body.classList.add('robot-bg');
        return () => {
            document.body.classList.remove('robot-bg');
        };
    }, []);

    return (
        <div className="container content">
            <div className="row m-5 mb-0 justify-content-center">
                <h1>System Modeling & <span className="text-primary">UML Design</span></h1>
                <p className="sub-title text-center mt-3">Toll Road Management System — DTU MSc · System Integration (02291) · Visual Paradigm · diagrams.net · <span className="text-warning">Top Grade</span></p>
            </div>

            <div className="row mt-2 ms-5 me-5 mb-5 justify-content-center">
                <div className="col-12 col-md-9">
                    <p>
                        UML is a practical engineering tool for translating requirements into software models,
                        defining component relationships, and communicating architecture before a line of code is written.
                        This case study, produced in <strong>Visual Paradigm</strong> and <strong>diagrams.net</strong> as part of a course project
                        that received a top grade, presents a complete system model of a toll road management platform —
                        spanning architectural structure, class design, behavioral states, interaction sequences,
                        flowcharts, formal OCL constraints, and acceptance criteria.
                        Each view reveals a different dimension of the same system.
                    </p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="bg-black border border-light rounded shadow shadow-lg p-3 p-md-4 diagram-card diagram-fade-in">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="badge bg-primary diagram-badge">Component Diagram</span>
                            <span className="text-white-50" style={{ fontSize: '0.8rem' }}>System Architecture</span>
                        </div>
                        <h5 className="mb-1">System Architecture Overview</h5>
                        <p className="sub-title mb-3">
                            Three-tier architecture: physical toll lane hardware, station servers, and the enterprise backend —
                            modeled as interconnected components with provided and required interfaces.
                        </p>
                        <Zoom>
                            <img
                                src={componentDesign}
                                alt="Component diagram showing the full toll road management system architecture"
                                className="img-fluid rounded"
                                style={{ maxHeight: '520px', width: '100%', objectFit: 'contain', objectPosition: 'top' }}
                            />
                        </Zoom>
                        <div className="mt-2 text-center diagram-hint">
                            <i className="bi bi-zoom-in"></i> Click to enlarge
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5 mt-5">
                <div className="col-12">
                    <div className="progression-strip">
                        <p className="sub-title mb-0 " >
                            Modeling progression:&nbsp;
                           <span className="fw-bold ms-3"  >
                            <span className="text-white m-2 ">Architecture</span> →&nbsp;
                            <span className="text-white m-2">Structure</span> →&nbsp;
                            <span className="text-white m-2">Behavior</span> →&nbsp;
                            <span className="text-white m-2">Interactions</span> →&nbsp;
                            <span className="text-white m-2">Constraints</span> →&nbsp;
                            <span className="text-white m-2">Validation</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row g-3 mb-5">
                {supportingDiagrams.map((diagram) => (
                    <div key={diagram.title} className="col-12 col-md-6 col-lg-4">
                        <div className="bg-black border border-light rounded shadow shadow-lg p-3 h-100 diagram-card diagram-fade-in d-flex flex-column">
                            <span className={`badge ${diagram.badgeClass} diagram-badge mb-2 align-self-start`}>
                                {diagram.badgeLabel}
                            </span>
                            <h6 className="mb-2">{diagram.title}</h6>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center my-2">
                                <Zoom>
                                    <img
                                        src={diagram.src}
                                        alt={diagram.title}
                                        className="img-fluid rounded"
                                        loading="lazy"
                                    />
                                </Zoom>
                            </div>
                            <p className="diagram-hint mt-2 mb-1">{diagram.description}</p>
                            <div className="text-center diagram-hint">
                                <i className="bi bi-zoom-in"></i> Click to enlarge
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modeling;
