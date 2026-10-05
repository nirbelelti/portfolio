import {Link, useLocation} from 'react-router-dom';
import {MouseEvent, RefObject, useEffect, useRef, useState} from "react";

import {Link as ScrollLink} from 'react-scroll';
import * as rdd from 'react-device-detect';
import logo from '../assets/logo.png';

//rdd.isMobile = true; //testing the navbar on mobile view


const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const navbarCollapseRef: RefObject<HTMLDivElement> = useRef(null);


    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));

        const clickedLink = event.currentTarget;
        clickedLink.classList.add('active');

        if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
            navbarCollapseRef.current.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand d-none d-md-inline" href="">
                    <img src={logo} alt="Logo" width="auto" height="80"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/' && 'active'} data-bs-toggle="collapse" data-bs-target="#navbarNav" data-bs-dismiss="navbarNav"`}
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('home')}
                                    onClick={()=>handleNavLinkClick}
                                >
                                    About Me
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/' && 'active'}`} to="/">
                                    About Me
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/technologies' && 'active'}`}
                                    to="technologies"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('technologies')}
                                    onClick={()=>handleNavLinkClick}

                                >
                                    Technologies
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/technologies' && 'active'}`}
                                      to="/technologies">
                                    Technologies
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link `}
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('projects')}
                                    onClick={()=>handleNavLinkClick}

                                >
                                    Demo Projects
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/projects' && 'active'}`} to="/projects">
                                    Demo Projects
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/education' && 'active'}`}
                                    to="education"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('education')}
                                    onClick={()=>handleNavLinkClick}
                                >
                                    Education
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/education' && 'active'}`} to="/education">
                                    Education
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/ux' && 'active'}`}
                                    to="education"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('ux')}
                                    onClick={()=>handleNavLinkClick}
                                >
                                    UX/UI
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link disabled ${activeLink === '/ux' && 'active'}`} to="/ux">
                                    UX/UI
                                </Link>
                            )}                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/modeling' && 'active'}`}
                                    to="modeling"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('modeling')}
                                    onClick={() => handleNavLinkClick}
                                >
                                    System Modeling
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/modeling' && 'active'}`} to="/modeling">
                                    System Modeling
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/ai' && 'active'}`}
                                    to="ai"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('ai')}
                                    onClick={() => handleNavLinkClick}
                                >
                                    AI & Agents
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/ai' && 'active'}`} to="/ai">
                                    AI & Agents
                                </Link>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/employment' && 'active'}`}
                                    to="employment"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('employment')}
                                    onClick={()=>handleNavLinkClick}
                                >
                                    Employment
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/employment' && 'active'}`}
                                      to="/employment">
                                    Employment
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;