export const profile = {
    name: 'Nir Belelti',
    role: 'Software engineer',
    location: 'Copenhagen, Denmark',
    email: 'nirbelelti@gmail.com',
    siteUrl: 'https://nirbelelti.github.io/portfolio/',
    links: {
        linkedin: 'https://www.linkedin.com/in/nir-belelti',
        github: 'https://github.com/nirbelelti',
        source: 'https://github.com/nirbelelti/portfolio',
    },
};

export interface NavSection {
    id: string;
    label: string;
}

export const navSections: NavSection[] = [
    {id: 'capabilities', label: 'Capabilities'},
    {id: 'work', label: 'Work'},
    {id: 'modeling', label: 'Modeling'},
    {id: 'ai', label: 'AI'},
    {id: 'experience', label: 'Experience'},
    {id: 'education', label: 'Education'},
];

export interface Fact {
    label: string;
    value: string;
    wide?: boolean;
}

export const atAGlance: Fact[] = [
    {label: 'Role', value: 'Full-stack software engineer'},
    {label: 'Based in', value: 'Copenhagen, Denmark'},
    {label: 'Building software since', value: '2016'},
    {label: 'Languages', value: 'English, Danish, Hebrew'},
    {label: 'Core stack', value: 'Ruby on Rails · PostgreSQL · Hotwire · Python · Java', wide: true},
];

export interface PortraitNote {
    kicker: string;
    text: string;
    href: string;
    anchor: { x: number; y: number };
    labelY: number;
}

export const portraitNotes: PortraitNote[] = [
    {kicker: 'Education', text: 'MSc, DTU — computer security', href: '#education', anchor: {x: 27, y: 15}, labelY: 12},
    {kicker: 'Method', text: 'Models the system before building it', href: '#modeling', anchor: {x: 36, y: 30}, labelY: 40},
    {kicker: 'Experience', text: 'Seven years building a MedTech SaaS', href: '#experience', anchor: {x: 44, y: 66}, labelY: 68},
];
