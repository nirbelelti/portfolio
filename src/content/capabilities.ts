export type Basis = 'Professional' | 'Projects' | 'Study';

export interface Evidence {
    label: string;
    href: string;
}

export interface Capability {
    title: string;
    summary: string;
    stack: string[];
    basis: Basis[];
    evidence: Evidence[];
}

export const capabilities: Capability[] = [
    {
        title: 'Product engineering',
        summary: 'Taking a feature from data model to interface — and caring how it feels to use.',
        stack: ['Ruby on Rails', 'Hotwire', 'React', 'TypeScript', 'PostgreSQL'],
        basis: ['Professional'],
        evidence: [
            {label: 'Brain Plus SaaS', href: '#experience-brain-plus'},
            {label: 'Freelance work', href: '#experience-freelance'},
        ],
    },
    {
        title: 'Backend & APIs',
        summary: 'REST APIs, background processing, and domain logic kept out of the controllers.',
        stack: ['Ruby on Rails 5–7.2', 'PostgreSQL', 'Redis', 'Sidekiq', 'Rails engines', 'Quarkus', 'Flask'],
        basis: ['Professional', 'Projects'],
        evidence: [
            {label: 'Payments engine', href: '#rails-payments-engine'},
            {label: 'Revocable JWT auth', href: '#flask-jwt-auth'},
        ],
    },
    {
        title: 'Frontend',
        summary: 'Hotwire for server-rendered Rails interfaces; React and TypeScript for richer clients.',
        stack: ['Turbo', 'Stimulus', 'React', 'TypeScript', 'JavaScript', 'SCSS'],
        basis: ['Professional', 'Projects'],
        evidence: [
            {label: 'Real-time AI chat', href: '#rails-ai-chatbot'},
            {label: 'This site', href: '#portfolio-site'},
        ],
    },
    {
        title: 'Product & UX design',
        summary: 'User stories, wireframes and clickable prototypes in Figma — testing the experience before it is built.',
        stack: ['Figma', 'User stories', 'Wireframes', 'Clickable prototypes', 'Prototype videos'],
        basis: ['Professional', 'Study'],
        evidence: [
            {label: 'Capish onboarding', href: '#interfaces'},
            {label: 'BeGreen iterations', href: '#begreen'},
        ],
    },
    {
        title: 'Infrastructure & delivery',
        summary: 'Containers, infrastructure as code and CI/CD — including a microservice backend on Open Telekom Cloud.',
        stack: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'Semaphore', 'Jenkins', 'AWS', 'Heroku'],
        basis: ['Professional', 'Projects'],
        evidence: [
            {label: 'Brain Plus backend', href: '#experience-brain-plus'},
            {label: 'Terraform on OTC', href: '#terraform-otc'},
        ],
    },
    {
        title: 'Security',
        summary: 'An MSc specialisation in computer security, applied to authentication, authorisation and data protection in client work.',
        stack: ['Authentication', 'Authorisation', 'JWT', 'Hashing & salting', 'Secure design'],
        basis: ['Professional', 'Study'],
        evidence: [
            {label: 'MSc at DTU', href: '#education'},
            {label: 'Revocable JWT auth', href: '#flask-jwt-auth'},
        ],
    },
    {
        title: 'Engineering practice',
        summary: 'Test-first development, explicit design patterns, and models that make intent reviewable.',
        stack: ['TDD', 'RSpec', 'Capybara', 'Cucumber', 'JUnit', 'RuboCop', 'UML & OCL'],
        basis: ['Professional', 'Projects', 'Study'],
        evidence: [
            {label: 'Microservices, test-first', href: '#java-microservices-tdd'},
            {label: 'System modeling', href: '#modeling'},
        ],
    },
    {
        title: 'AI & LLM applications',
        summary: 'LLM features held to normal engineering constraints: retrieval quality, latency and cost.',
        stack: ['Gemini API', 'Gemma (local)', 'LangChain', 'Qdrant', 'RAG', 'MCP'],
        basis: ['Projects'],
        evidence: [
            {label: 'Real-time AI chat', href: '#rails-ai-chatbot'},
            {label: 'AI in practice', href: '#ai'},
        ],
    },
];

export const otherTools = [
    'Java & Spring Boot', 'Python', 'C++', 'Arduino (LoRaWAN, MQTT)', 'Angular', 'jQuery',
    'CoffeeScript', 'MySQL', 'MongoDB', 'SQLite', 'Azure',
];
