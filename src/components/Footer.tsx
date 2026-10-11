import {profile} from '../content/profile.ts';
import '../styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p>
                Prerendered React, no trackers.{' '}
                <a href={profile.links.source} target="_blank" rel="noreferrer">Source on GitHub</a>
            </p>
        </div>
    </footer>
);

export default Footer;
