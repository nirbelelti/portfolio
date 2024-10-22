import {Link, useLocation} from 'react-router-dom';
import {useEffect, useRef, useState, RefObject} from "react";
import {Link as ScrollLink} from 'react-scroll';
import * as rdd from 'react-device-detect';

// rdd.isMobile = true; //testing the navbar on mobile view


const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const navbarCollapseRef: RefObject<HTMLDivElement> = useRef(null);


    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleNavLinkClick = () => {
        if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
            navbarCollapseRef.current.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
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
                                    onSetActive={() => setActiveLink('/')}
                                    onClick={handleNavLinkClick}
                                >
                                    Home
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/' && 'active'}`} to="/">
                                    Home
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
                                    onClick={handleNavLinkClick}

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
                                    onClick={handleNavLinkClick}

                                >
                                    Projects
                                </ScrollLink>
                            ) : (
                                <Link className={`nav-link ${activeLink === '/projects' && 'active'}`} to="/projects">
                                    Projects
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
                                    onSetActive={() => setActiveLink('/education')}
                                    onClick={handleNavLinkClick}
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
                            <a className="nav-link disabled">UX</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link disabled">Planning and Modeling</a>
                        </li>
                        <li className="nav-item mx-2">
                            {rdd.isMobile ? (
                                <ScrollLink
                                    className={`nav-link ${activeLink === '/employment' && 'active'}`}
                                    to="employment"
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('/employment')}
                                    onClick={handleNavLinkClick}
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