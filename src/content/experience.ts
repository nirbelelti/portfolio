export interface Role {
    id: string;
    period: string;
    title: string;
    organisation: string;
    organisationUrl?: string;
    context: string;
    highlights: string[];
    stack: string[];
}

export const roles: Role[] = [
    {
        id: 'experience-freelance',
        period: '2023 — now',
        title: 'Freelance software engineer & consultant',
        organisation: 'Self-employed',
        context: 'Commercial web development, security consulting and temporary team engagements.',
        highlights: [
            'Deliver commercial websites and web applications for clients across several sectors',
            'Apply strict authentication, authorisation and data-protection standards on every project',
            'Design reusable component architectures, using AI-assisted workflows to speed up delivery',
            'Join hired teams as a senior engineer, where fast onboarding and clear communication matter',
        ],
        stack: ['Full-stack web', 'Security', 'AI-assisted delivery'],
    },
    {
        id: 'experience-brain-plus',
        period: '2016 — 2023',
        title: 'Full-stack developer',
        organisation: 'Brain Plus',
        organisationUrl: 'https://www.brain-plus.com/',
        context: 'MedTech startup. Seven years, from backend developer to leading the backend of a new product.',
        highlights: [
            'Started on backend development, API support and database management',
            'Helped turn the internal platform into a SaaS product for therapists: authorisation, a licence webshop, user-performance analysis and an analytics dashboard',
            'Led backend development of a new product, built as microservices on Open Telekom Cloud',
            'Set up CI/CD with Semaphore and GitHub Actions, and ran infrastructure with Terraform, Kubernetes and Helm',
            'Drew on a business background to improve UX and help shape sales and revenue strategy',
        ],
        stack: ['Microservices', 'APIs', 'Open Telekom Cloud', 'Terraform', 'Kubernetes', 'Helm', 'CI/CD'],
    },
];

export const studyBreak = {
    period: '2023 — 2024',
    text: 'Full-time MSc at the Technical University of Denmark',
    href: '#education',
};

export interface EarlierRole {
    period: string;
    title: string;
    organisation: string;
    summary: string;
}

export const earlierRoles: EarlierRole[] = [
    {
        period: '2012 — 2013',
        title: 'Team leader & campaign site supervisor',
        organisation: 'Super Push — Publicis Groupe',
        summary: 'Led a team of advertising field agents, keeping daily operations, resources and motivation on track.',
    },
    {
        period: '2011 — 2012',
        title: 'Quality assurance',
        organisation: 'I.N.T Integrico',
        summary: 'Product inspection, production protocol compliance, shipment tracking and logistics improvements.',
    },
    {
        period: '2001 — 2011',
        title: 'Chief operating officer',
        organisation: 'Amin Car Services',
        summary: 'Worked up from the front office to COO of the family car-service business — 25 people across service advisory, sales, customer relations and the garage floor.',
    },
];
