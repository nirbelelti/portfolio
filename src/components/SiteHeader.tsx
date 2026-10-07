import {useEffect, useState} from 'react';
import {navSections, profile} from '../content/profile.ts';
import {useActiveSection} from '../hooks/useActiveSection.ts';
import {useScrollState} from '../hooks/useScrollState.ts';
import Icon from './Icon.tsx';
import '../styles/SiteHeader.css';

const observedSectionIds = ['top', ...navSections.map((section) => section.id), 'contact'];

const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isScrolled, isScrollingDown} = useScrollState();
    const activeId = useActiveSection(observedSectionIds);

    useEffect(() => {
        if (!isMenuOpen) return;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', closeOnEscape);

        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    const currentIf = (id: string) => (activeId === id ? 'location' : undefined);

    const className = [
        'site-header',
        isScrolled && 'is-scrolled',
        isScrollingDown && !isMenuOpen && 'is-hidden',
        isMenuOpen && 'is-open',
    ].filter(Boolean).join(' ');

    return (
        <header className={className}>
            <div className="site-header__bar container">
                <a href="#top" className="site-header__brand" onClick={closeMenu}>
                    {profile.name}
                </a>
                <nav id="site-nav" className="site-header__nav" aria-label="Sections">
                    <ul className="site-header__links">
                        {navSections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="site-header__link"
                                    aria-current={currentIf(section.id)}
                                    onClick={closeMenu}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                        <li className="site-header__menu-only">
                            <a
                                href="#contact"
                                className="site-header__link"
                                aria-current={currentIf('contact')}
                                onClick={closeMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#contact"
                    className="button button--primary site-header__cta"
                    aria-current={currentIf('contact')}
                    onClick={closeMenu}
                >
                    Contact
                </a>
                <button
                    type="button"
                    className="site-header__menu-button"
                    aria-expanded={isMenuOpen}
                    aria-controls="site-nav"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <Icon name={isMenuOpen ? 'close' : 'menu'}/>
                    <span>Menu</span>
                </button>
            </div>
        </header>
    );
};

export default SiteHeader;
