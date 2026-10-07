export interface Project {
    id: string;
    kicker: string;
    title: string;
    problem: string;
    approach: string;
    details: string[];
    outcome: string;
    stack: string[];
    repo: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'rails-payments-engine',
        kicker: 'Payments API · Ruby on Rails',
        title: 'A payments engine that lives outside the app',
        problem: 'Organisations need to initiate payments, manage them and issue refunds — without payment logic spreading through the host application.',
        approach: 'Payment handling lives in a mountable Rails Engine, with a Facade keeping business logic out of the controllers.',
        details: [
            'REST endpoints to initiate and manage payments and to process refunds',
            'The engine is isolated from the main app, so it can be versioned and reused on its own',
            'A Facade layer separates domain logic from HTTP concerns',
            'Built test-first with RSpec and FactoryBot on PostgreSQL',
        ],
        outcome: 'One payment module that can move between projects without duplicated code, while the host app stays thin.',
        stack: ['Ruby on Rails', 'Rails Engine', 'PostgreSQL', 'RSpec', 'FactoryBot', 'REST'],
        repo: 'https://github.com/nirbelelti/PaymentsDemoApp',
        featured: true,
    },
    {
        id: 'rails-ai-chatbot',
        kicker: 'LLM application · Rails 7.2',
        title: 'Real-time AI chat that never blocks',
        problem: 'LLM responses are slow. A chat interface that waits for them synchronously feels broken.',
        approach: 'Turbo updates the conversation live while Sidekiq workers handle the Gemini API calls and persistence in the background.',
        details: [
            'Devise authentication in front of every conversation',
            'Gemini API client configured once, in an initializer',
            'Turbo Streams and Stimulus update messages without page reloads',
            'Sidekiq jobs take API calls and conversation storage off the request cycle',
            'Specs written in RSpec',
        ],
        outcome: 'The interface stays responsive while slow, external work happens asynchronously.',
        stack: ['Rails 7.2', 'Turbo', 'Stimulus', 'Sidekiq', 'Devise', 'Gemini API', 'RSpec'],
        repo: 'https://github.com/nirbelelti/RailsAIChatBot',
        featured: true,
    },
    {
        id: 'java-microservices-tdd',
        kicker: 'Distributed systems · Java',
        title: 'Message-driven microservices, built test-first',
        problem: 'Services that only talk through a message broker are hard to reason about — and to test — as one system.',
        approach: 'Stand-alone Quarkus services communicate over RabbitMQ, and Cucumber scenarios describe the behaviour before it is implemented.',
        details: [
            'Each service is independent and handles its own web requests with Quarkus',
            'Inter-service communication goes through RabbitMQ',
            'Facade, Adapter and Singleton patterns keep boundaries explicit',
            'Every service is containerised with Docker; Docker Compose runs the whole system',
        ],
        outcome: 'Behaviour is specified as executable scenarios, and the full system runs locally through Docker Compose.',
        stack: ['Java', 'Quarkus', 'RabbitMQ', 'Cucumber', 'Docker Compose', 'Maven'],
        repo: 'https://github.com/nirbelelti/JavaMicroservicesSimulation',
        featured: true,
    },
    {
        id: 'flask-jwt-auth',
        kicker: 'Security · Python',
        title: 'JWT authentication you can actually revoke',
        problem: 'Stateless tokens are convenient, but hard to shut off when something goes wrong.',
        approach: 'Tokens are tracked in Redis, which allows aggressive refreshing and real revocation. Passwords are salted and hashed.',
        details: [
            'Flask API structured with MVC and a Facade',
            'Salted, hashed password storage',
            'Redis-backed token store for validation, refresh and revocation',
            'SQLAlchemy over SQLite, tested with unittest',
        ],
        outcome: 'Token-based authentication that can be revoked on demand.',
        stack: ['Python', 'Flask', 'JWT', 'Redis', 'SQLAlchemy'],
        repo: 'https://github.com/nirbelelti/python-secure-flask-api-jwt-demo',
        featured: false,
    },
    {
        id: 'terraform-otc',
        kicker: 'Infrastructure as code',
        title: 'An Open Telekom Cloud environment in Terraform',
        problem: 'A Kubernetes environment set up by hand is hard to review and harder to reproduce.',
        approach: 'The environment — network, cluster, DNS, load balancer and registry — is declared in Terraform.',
        details: [
            'VPC, CCE cluster, DNS, load balancer and SWR container registry',
            'Provisions Linux nodes and generates the kubeconfig',
            'Configuration and secrets kept in an encrypted S3 bucket',
        ],
        outcome: 'An environment that is reviewed like code and recreated on demand.',
        stack: ['Terraform', 'Open Telekom Cloud', 'Kubernetes', 'S3'],
        repo: 'https://github.com/nirbelelti/OTC_terraform_cloud_configuration',
        featured: false,
    },
    {
        id: 'kubernetes-helm',
        kicker: 'Deployment · Kubernetes',
        title: 'A Helm chart with configuration in one place',
        problem: 'Kubernetes manifests repeat the same values across many files.',
        approach: 'A Helm chart centralises deployment and service settings in values.yaml.',
        details: [
            'Deploys an Nginx application to Minikube',
            'Edit values.yaml to reconfigure — or deploy a different app — without touching templates',
        ],
        outcome: 'Deployments are reconfigured from a single file.',
        stack: ['Kubernetes', 'Helm', 'Docker', 'Minikube'],
        repo: 'https://github.com/nirbelelti/k8s-deployment-helm',
        featured: false,
    },
    {
        id: 'portfolio-site',
        kicker: 'This site · React',
        title: 'This portfolio',
        problem: 'A portfolio should be evidence too: fast, accessible and readable before any JavaScript runs.',
        approach: 'React and TypeScript, prerendered to static HTML at build time, with no UI framework.',
        details: [
            'Content lives in typed modules, separate from presentation',
            'Native dialog, details and IntersectionObserver instead of UI libraries',
            'Follows the system colour scheme and reduced-motion settings, and prints as a résumé',
            'Built with agentic coding workflows, under my architecture and review',
        ],
        outcome: 'The page arrives as plain HTML; JavaScript only adds interaction.',
        stack: ['React', 'TypeScript', 'Vite', 'CSS'],
        repo: 'https://github.com/nirbelelti/portfolio',
        featured: false,
    },
];
