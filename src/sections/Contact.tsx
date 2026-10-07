import CopyEmailButton from '../components/CopyEmailButton.tsx';
import Icon from '../components/Icon.tsx';
import PrintResumeButton from '../components/PrintResumeButton.tsx';
import {profile} from '../content/profile.ts';
import '../styles/Contact.css';

const Contact = () => (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
        <div className="container contact__inner" data-reveal>
            <p className="label">Contact</p>
            <h2 id="contact-heading" className="contact__title">Let’s talk about what you’re building.</h2>
            <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="contact__actions">
                <CopyEmailButton email={profile.email}/>
                <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    <Icon name="linkedin"/>
                    LinkedIn
                </a>
                <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
                    <Icon name="github"/>
                    GitHub
                </a>
                <PrintResumeButton/>
            </div>
        </div>
    </section>
);

export default Contact;
