import { useEffect } from 'react';
import '../styles/AIEngineering.css';

interface PipelineStep {
    icon: string;
    label: string;
    role: 'Human' | 'AI' | 'Both';
    roleClass: string;
}

const pipelineSteps: PipelineStep[] = [
    { icon: 'bi-lightbulb',     label: 'Intent',         role: 'Human', roleClass: 'role-human' },
    { icon: 'bi-diagram-3',     label: 'Architecture',   role: 'Human', roleClass: 'role-human' },
    { icon: 'bi-robot',         label: 'Agent',          role: 'AI',    roleClass: 'role-ai'    },
    { icon: 'bi-code-slash',    label: 'Implementation', role: 'AI',    roleClass: 'role-ai'    },
    { icon: 'bi-check2-circle', label: 'Testing',        role: 'Both',  roleClass: 'role-both'  },
    { icon: 'bi-eye',           label: 'Review',         role: 'Human', roleClass: 'role-human' },
];

interface Principle {
    icon: string;
    title: string;
    body: string;
}

const principles: Principle[] = [
    {
        icon: 'bi-funnel',
        title: 'Minimize LLM calls',
        body: 'Prefer deterministic logic where an LLM adds no value. Reserve model calls for tasks that genuinely require language understanding or generation.',
    },
    {
        icon: 'bi-pencil-square',
        title: 'Iterate on prompts',
        body: 'Treat prompts as code — design, test, and refine them. A well-engineered prompt is more reliable than a larger model with a vague one.',
    },
    {
        icon: 'bi-arrow-repeat',
        title: 'Cache reusable context',
        body: 'Avoid re-sending static context on every request. Persist decisions in memory files; load only what the current task actually needs.',
    },
    {
        icon: 'bi-sliders',
        title: 'Right model for the task',
        body: 'Use capable models where quality matters; use smaller, faster, cheaper models for classification, routing, or low-stakes generation.',
    },
    {
        icon: 'bi-search',
        title: 'Optimize retrieval first',
        body: 'Before scaling model complexity, improve retrieval quality. Better context beats a larger model processing poor context.',
    },
    {
        icon: 'bi-speedometer2',
        title: 'Balance latency, quality, cost',
        body: 'Every AI system operates under real constraints. Design with all three in mind from the start, not as an afterthought.',
    },
    {
        icon: 'bi-graph-up',
        title: 'Measure and optimize continuously',
        body: 'Track token usage, latency, and output quality in production. What gets measured gets improved — and degradation is caught before users notice.',
    },
    {
        icon: 'bi-tools',
        title: 'Build reusable abstractions',
        body: 'Package recurring agent workflows as skills and automations. A pattern used twice is worth extracting; used ten times it becomes infrastructure.',
    },
    {
        icon: 'bi-activity',
        title: 'Design for observability',
        body: 'AI systems fail silently. Instrument outputs, monitor drift, and set up automated health checks so the system remains trustworthy over time.',
    },
];

const AIEngineering = () => {
    useEffect(() => {
        document.body.classList.add('robot-bg');
        return () => {
            document.body.classList.remove('robot-bg');
        };
    }, []);

    return (
        <div className="container content">
            <div className="row mt-5 mb-2">
                <h1>AI Engineering & <span className="text-primary">Agentic Workflows</span></h1>
                <p className="sub-title">Building practical AI systems — fast, reliable, and economically sensible</p>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-9">
                    <p>
                        I design and build AI-powered systems across the full stack, including LLM-integrated
                        applications, RAG pipelines, self-hosted local models, and agentic coding workflows.
                        I approach each project as a senior engineer rather than just a prompt user. I apply
                        the same engineering standards I would use for any production software: thoughtful
                        architecture, measurable trade-offs, and a commitment to quality from design through
                        review. While AI enhances what I can deliver, it does not replace the critical
                        judgment that guides my work.
                    </p>
                </div>
            </div>

            {/* Agentic Development Cycle */}
            <div className="row mb-2">
                <div className="col-12">
                    <h4>Agentic Development Cycle</h4>
                    <p className="sub-title mb-3" style={{ fontSize: '0.9rem' }}>
                        Where AI agents fit in a disciplined engineering workflow
                    </p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-12">
                    <div className="ai-pipeline">
                        {pipelineSteps.map((step) => (
                            <div key={step.label} className="pipeline-step">
                                <i className={`bi ${step.icon} pipeline-icon`}></i>
                                <span className="pipeline-label">{step.label}</span>
                                <span className={`pipeline-role ${step.roleClass}`}>{step.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12">
                    <div className="d-flex gap-3 mt-2" style={{ fontSize: '0.75rem' }}>
                        <span><span className="text-primary">■</span>&nbsp;Human</span>
                        <span><span className="text-success">■</span>&nbsp;AI Agent</span>
                        <span><span className="text-warning">■</span>&nbsp;Both</span>
                    </div>
                </div>
            </div>

            {/* Three capability cards */}
            <div className="row g-4 mb-5">

                {/* LLM Application Development */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="bg-black border border-light rounded shadow shadow-lg p-4 h-100 capability-card">
                        <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-cpu text-primary me-2" style={{ fontSize: '1.4rem' }}></i>
                            <h5 className="mb-0">LLM Applications</h5>
                        </div>
                        <p style={{ fontSize: '0.9rem' }}>
                            Built real-time AI applications using the Gemini API on Rails 7.2 and self-hosted
                            local LLMs via <strong>Gemma</strong> and LangChain in Python — cloud APIs for
                            production quality, local models for privacy and cost efficiency.
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            Applied Python NLP techniques for RAG chunking strategies using NLTK (tokenization,
                            stemming, lemmatization, stopword filtering) and pandas. Integrated{' '}
                            <strong>MCP (Model Context Protocol)</strong> to extend LLM capabilities with
                            structured tool and data access. Practised iterative prompt engineering to produce
                            reliable, cost-efficient output. Advanced AI and ML knowledge through
                            dedicated online courses.
                        </p>
                        <div className="mt-auto pt-3">
                            {['Gemini API', 'Gemma', 'Local LLM', 'LangChain', 'Qdrant', 'RAG', 'MCP',
                              'Ruby on Rails', 'Python', 'NLTK', 'pandas', 'NLP', 'Prompt Engineering'].map(tag => (
                                <span
                                    key={tag}
                                    className="badge bg-dark border border-secondary rounded-pill me-1 mb-1"
                                    style={{ fontSize: '0.72rem' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Agentic Engineering */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="bg-black border border-light rounded shadow shadow-lg p-4 h-100 capability-card">
                        <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-robot text-primary me-2" style={{ fontSize: '1.4rem' }}></i>
                            <h5 className="mb-0">Agentic Engineering</h5>
                        </div>
                        <p style={{ fontSize: '0.9rem' }}>
                            AI coding agents handle implementation and exploratory tasks — scaffolding,
                            refactoring, test generation. I define the architecture, write acceptance criteria,
                            and own the review. This portfolio was built using parallel agentic workflows
                            under human-directed architecture.
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            Reduce agent token usage through structured <strong>markdown memory files</strong> —
                            persisting project context, decisions, and standards across sessions so agents
                            load only what each task needs. Combined with deliberate chat strategies,
                            this cuts redundant context and keeps agents focused.
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            Build and maintain <strong>reusable skills and automations</strong> that agents
                            invoke across projects — common workflows (verify, review, deploy) become
                            callable skills rather than re-explained instructions.
                        </p>
                        <div className="mt-auto pt-3">
                            {['Agent-driven development', 'Memory files', 'Token efficiency',
                              'Reusable skills', 'Automations', 'Parallel workflows', 'Architecture ownership'].map(tag => (
                                <span
                                    key={tag}
                                    className="badge bg-dark border border-secondary rounded-pill me-1 mb-1"
                                    style={{ fontSize: '0.72rem' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Monitoring & Maintenance */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="bg-black border border-light rounded shadow shadow-lg p-4 h-100 capability-card">
                        <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-activity text-primary me-2" style={{ fontSize: '1.4rem' }}></i>
                            <h5 className="mb-0">Monitoring & Maintenance</h5>
                        </div>
                        <p style={{ fontSize: '0.9rem' }}>
                            AI systems require the same operational discipline as any other software.
                            Track token usage, latency, and output quality to identify where optimisations
                            have the most impact and catch cost or quality regressions before they reach users.
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            Set up <strong>automated maintenance workflows</strong> — scheduled health checks,
                            performance benchmarks, and alert hooks — so system degradation is detected
                            continuously rather than discovered in production.
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            Apply continuous optimization cycles: measure outputs, analyse failure modes,
                            refine prompts or retrieval, and validate the improvement. AI systems
                            are never finished — they are maintained.
                        </p>
                        <div className="mt-auto pt-3">
                            {['Observability', 'Cost monitoring', 'Continuous optimization',
                              'Automated workflows', 'Health checks', 'Performance tracking', 'Alerting'].map(tag => (
                                <span
                                    key={tag}
                                    className="badge bg-dark border border-secondary rounded-pill me-1 mb-1"
                                    style={{ fontSize: '0.72rem' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Engineering principles — 9 in a 3×3 grid */}
            <div className="row mb-3">
                <div className="col-12">
                    <h4>Engineering for Production AI</h4>
                    <p className="sub-title mb-4" style={{ fontSize: '0.9rem' }}>
                        AI systems must be designed with the same engineering discipline as any other system
                    </p>
                </div>
            </div>

            <div className="row g-3 mb-5">
                {principles.map((p) => (
                    <div key={p.title} className="col-12 col-md-6 col-lg-4">
                        <div className="principle-card h-100">
                            <div className="d-flex align-items-center mb-1">
                                <i className={`bi ${p.icon} principle-icon`}></i>
                                <span className="principle-title">{p.title}</span>
                            </div>
                            <p className="principle-body">{p.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIEngineering;
