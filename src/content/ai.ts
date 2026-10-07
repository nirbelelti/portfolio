export type Owner = 'Human' | 'Agent' | 'Both';

export interface WorkflowStep {
    label: string;
    owner: Owner;
}

export const workflow: WorkflowStep[] = [
    {label: 'Intent', owner: 'Human'},
    {label: 'Architecture', owner: 'Human'},
    {label: 'Agent plan', owner: 'Agent'},
    {label: 'Implementation', owner: 'Agent'},
    {label: 'Testing', owner: 'Both'},
    {label: 'Review', owner: 'Human'},
];

export interface Practice {
    title: string;
    body: string;
    tags: string[];
}

export const practices: Practice[] = [
    {
        title: 'LLM applications',
        body: 'Real-time AI features on Rails 7.2 with the Gemini API, and self-hosted models (Gemma) with LangChain in Python where privacy or cost matter. RAG pipelines with Qdrant, NLTK-based chunking, and MCP for structured tool access.',
        tags: ['Gemini API', 'Gemma', 'LangChain', 'Qdrant', 'RAG', 'MCP', 'NLTK', 'pandas'],
    },
    {
        title: 'Agentic development',
        body: 'Coding agents handle scaffolding, refactoring and test generation; I own the architecture, the acceptance criteria and the review. Project memory files and reusable skills keep agents focused and token use down.',
        tags: ['Memory files', 'Reusable skills', 'Parallel workflows', 'Code review'],
    },
    {
        title: 'Operating AI systems',
        body: 'Treat AI features like any other production code: track token usage, latency and output quality, automate health checks and benchmarks, and change prompts or retrieval only against a measured baseline.',
        tags: ['Observability', 'Cost monitoring', 'Health checks', 'Evaluation'],
    },
];

export interface Principle {
    title: string;
    body: string;
}

export const principles: Principle[] = [
    {title: 'Minimise LLM calls', body: 'Use deterministic logic where a model adds nothing; reserve calls for real language understanding or generation.'},
    {title: 'Treat prompts as code', body: 'Design, test and refine them. A well-engineered prompt beats a bigger model with a vague one.'},
    {title: 'Cache reusable context', body: 'Don’t resend static context. Persist decisions in memory files and load only what the task needs.'},
    {title: 'Right model for the task', body: 'Capable models where quality matters; smaller, faster ones for routing, classification and low-stakes output.'},
    {title: 'Fix retrieval first', body: 'Better context beats a larger model reading poor context.'},
    {title: 'Balance latency, quality and cost', body: 'Design for all three from the start, not as an afterthought.'},
    {title: 'Measure continuously', body: 'Track tokens, latency and quality in production so degradation is caught before users notice.'},
    {title: 'Extract reusable workflows', body: 'A pattern used twice is worth extracting; used ten times, it becomes infrastructure.'},
    {title: 'Design for observability', body: 'AI systems fail quietly. Instrument outputs and monitor drift so the system stays trustworthy.'},
];
