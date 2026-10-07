import mscDtu from '../assets/certificates/msc-dtu.webp';
import apKea from '../assets/certificates/ap-kea.webp';
import baLander from '../assets/certificates/ba-lander.webp';
import kubernetesNativeTools from '../assets/certificates/kubernetes-native-tools.webp';
import learningTerraform from '../assets/certificates/learning-terraform.webp';
import railsEssentialTraining from '../assets/certificates/rails-essential-training.webp';
import railsActiveRecord from '../assets/certificates/rails-active-record.webp';
import railsStripePayments from '../assets/certificates/rails-stripe-payments.webp';

export interface DocumentImage {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface Degree {
    year: string;
    title: string;
    institution: string;
    focus: string;
    highlights: string[];
    document: DocumentImage;
}

export const degrees: Degree[] = [
    {
        year: '2024',
        title: 'MSc Computer Science & Engineering',
        institution: 'Technical University of Denmark (DTU)',
        focus: 'Computer security',
        highlights: [
            'System security, program analysis, data security and biometric systems',
            'Innovation and startup courses alongside the technical track',
            'Thesis on service technology in cafés and restaurants — awarded the top grade',
        ],
        document: {src: mscDtu, width: 842, height: 597, alt: 'MSc diploma in Computer Science and Engineering from the Technical University of Denmark'},
    },
    {
        year: '2017',
        title: 'AP Degree in Computer Science',
        institution: 'KEA — Copenhagen School of Design and Technology',
        focus: 'Software development',
        highlights: [
            'Databases, system development, programming and networks',
            'Business understanding and systems analysis',
            'Two and a half years, including a 10-week internship',
        ],
        document: {src: apKea, width: 1076, height: 1440, alt: 'AP degree diploma in Computer Science from KEA'},
    },
    {
        year: '2012',
        title: 'BA in Business Administration',
        institution: 'Lander Institute — Jerusalem Academic Center',
        focus: 'Management & marketing',
        highlights: [
            'Leadership and organisational behaviour',
            'Strategic marketing, consumer behaviour and market research',
        ],
        document: {src: baLander, width: 948, height: 1300, alt: 'Letter confirming completion of a BA in Business Administration at the Lander Institute'},
    },
];

export interface Course {
    title: string;
    provider: string;
    year: string;
    certificate: DocumentImage;
}

const linkedInLearning = 'LinkedIn Learning';
const certificateSize = {width: 792, height: 612};

export const courses: Course[] = [
    {
        title: 'Learning Terraform',
        provider: linkedInLearning,
        year: '2022',
        certificate: {src: learningTerraform, ...certificateSize, alt: 'Certificate of completion: Learning Terraform'},
    },
    {
        title: 'Kubernetes Native Tools',
        provider: linkedInLearning,
        year: '2022',
        certificate: {src: kubernetesNativeTools, ...certificateSize, alt: 'Certificate of completion: Kubernetes Native Tools'},
    },
    {
        title: 'Ruby on Rails 5: Get More from ActiveRecord',
        provider: linkedInLearning,
        year: '2019',
        certificate: {src: railsActiveRecord, ...certificateSize, alt: 'Certificate of completion: Ruby on Rails 5, Get More from ActiveRecord'},
    },
    {
        title: 'Adding Stripe Payments to a Rails Application',
        provider: linkedInLearning,
        year: '2018',
        certificate: {src: railsStripePayments, ...certificateSize, alt: 'Certificate of completion: Adding Stripe Payments to Your Ruby on Rails Application'},
    },
    {
        title: 'Ruby on Rails 5 Essential Training',
        provider: linkedInLearning,
        year: '2016',
        certificate: {src: railsEssentialTraining, ...certificateSize, alt: 'Certificate of completion: Ruby on Rails 5 Essential Training'},
    },
];
