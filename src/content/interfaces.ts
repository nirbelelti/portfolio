import capishUserStories from '../assets/interfaces/capish-user-stories.webp';
import capishHome from '../assets/interfaces/capish-home.webp';
import capishBadge from '../assets/interfaces/capish-badge.webp';
import capishAdmin from '../assets/interfaces/capish-admin.webp';
import begreenLanding from '../assets/interfaces/begreen-landing.webp';
import begreenHomeStatistics from '../assets/interfaces/begreen-home-statistics.webp';
import begreenScanning from '../assets/interfaces/begreen-scanning.webp';
import xmedicusJournal from '../assets/interfaces/xmedicus-journal.webp';
import {Picture, StepperView} from './types.ts';

export interface CaptionedPicture extends Picture {
    caption: string;
}

export interface DesignProject {
    id: string;
    name: string;
    topic: string;
    title: string;
    course: string;
    summary: string;
    origin?: string;
    prototypeUrl?: string;
    views?: StepperView[];
    pictures?: CaptionedPicture[];
}

const communityTemplateOrigin = 'Built on a Figma Community template and heavily adapted.';

export const designRole = 'Team course projects: I led the design and built most of the components, the clickable prototypes and high-fidelity prototype videos.';

const capish: DesignProject = {
    id: 'capish',
    name: 'Capish',
    topic: 'Kitchen onboarding',
    title: 'Gamified onboarding for commercial kitchens',
    course: 'Digital Learning Technology & Entrepreneurship',
    summary: 'New kitchen staff must learn hygiene, safety and routines fast — and managers need to know they have. Capish turns onboarding into short courses, tests and badges, with a progress view for the manager.',
    origin: communityTemplateOrigin,
    prototypeUrl: 'https://www.figma.com/proto/jEbK5r9ASiRNIiLupPb2h8/Employee-Dashboard?node-id=462-3920&p=f&scaling=min-zoom&content-scaling=fixed&page-id=201%3A2253&starting-point-node-id=462%3A3920',
    views: [
        {
            id: 'users',
            label: 'Users',
            kind: 'User stories',
            question: 'Who is it for, and what do they need?',
            answer: 'Two users with different goals: managers who must know their staff are trained, and new employees who want to know what to learn — and what it takes to get promoted.',
            src: capishUserStories,
            width: 845,
            height: 1500,
            alt: 'User stories on sticky notes. Manager stories include reviewing employee progress and adding to the library; employee stories include tracking progress and knowing what is needed for a promotion.',
        },
        {
            id: 'learning',
            label: 'Learning',
            kind: 'Mobile app',
            question: 'What does a new employee see first?',
            answer: 'Today’s learning goal, the next course to start, and a learning plan split into kitchen topics — hygiene, safety, storage and daily routines.',
            src: capishHome,
            width: 429,
            height: 873,
            alt: 'Mobile home screen: minutes learned today against a 60-minute goal, a hygiene course card, a learning plan and progress through five topics.',
        },
        {
            id: 'motivation',
            label: 'Motivation',
            kind: 'Gamification',
            question: 'Why would they keep going?',
            answer: 'Finished topics earn badges — like “Dishwasher Pro” for hygiene — and a team billboard shows everyone’s learning time for the day.',
            src: capishBadge,
            width: 429,
            height: 873,
            alt: 'Mobile screen congratulating the user on earning the Dishwasher Pro badge for mastering hygiene in the kitchen.',
        },
        {
            id: 'oversight',
            label: 'Oversight',
            kind: 'Admin panel',
            question: 'What does the manager need?',
            answer: 'One overview of every employee’s progress through the onboarding topics, who is behind schedule, and how the team is pacing overall.',
            src: capishAdmin,
            width: 1200,
            height: 660,
            alt: 'Admin panel listing employees with their role, progress through five onboarding topics, start date and mentor, next to an overall progress burndown chart.',
        },
    ],
};

const begreen: DesignProject = {
    id: 'begreen',
    name: 'BeGreen',
    topic: 'Food waste',
    title: 'Turning near-expiry groceries into discounts',
    course: 'UX Design Prototyping',
    summary: 'A mobile app and landing page that help shoppers find discounted groceries close to their expiry date, saving money and reducing food waste. Each pair shows the first version next to the refined one.',
    pictures: [
        {
            src: begreenLanding,
            width: 984,
            height: 385,
            caption: 'Landing page',
            alt: 'BeGreen landing page: the first version with an illustrated grocery cart, and the refined version with a cleaner layout, app store buttons and a services row.',
        },
        {
            src: begreenHomeStatistics,
            width: 1922,
            height: 870,
            caption: 'Home and statistics',
            alt: 'BeGreen app home and statistics screens: first versions with heavy green panels, and refined versions with a food-saved chart, discounts and a comparison with other users.',
        },
        {
            src: begreenScanning,
            width: 930,
            height: 892,
            caption: 'Scanning',
            alt: 'BeGreen scanning screen: the first version with yellow price tags, and the refined version with clearer typography and green discount labels.',
        },
    ],
};

const xmedicus: DesignProject = {
    id: 'xmedicus',
    name: 'XMedicus',
    topic: 'Medical co-pilot',
    title: 'A co-pilot for medical journals',
    course: 'Innovation in Engineering',
    summary: 'Product design for a medical journal co-pilot: a patient’s journal, lab results, scans and last appointment in one view, alongside consultation and appointment metrics.',
    origin: communityTemplateOrigin,
    prototypeUrl: 'https://www.figma.com/proto/4qJavCTFdfjBdTihDBxuuo/Medical-Healthcare-Dashboard--Community-?node-id=1-402&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A402',
    pictures: [
        {
            src: xmedicusJournal,
            width: 1600,
            height: 1200,
            caption: 'Patient journal',
            alt: 'XMedicus dashboard with Journal, Overview, Analytics and CoPilot tabs, showing a patient profile, recent lab results, last appointment, heart rate chart and consultation metrics.',
        },
    ],
};

export const designProjects: DesignProject[] = [capish, begreen, xmedicus];
