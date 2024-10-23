import gmailLogo from '../assets/ToolsLogos/gmail-logo.svg';
import gitLogo from '../assets/ToolsLogos/github-logo.png';
import linkedinLogo from '../assets/ToolsLogos/linkedin-logo.png';
import LinkWithImage from "./LinkWithImage";


const Footer = () => {
    return (
            <footer className="footer fixed-bottom bg-dark text-white text-center py-3 mt-5  ">
                <div className="row justify-content-center">
                    <div className="col-2 col-md-1   text-center">
                        <LinkWithImage
                            href={"https://www.linkedin.com/in/nir-belelti"}
                            target={"_blank"} src={linkedinLogo}
                            additionClass={"footer-image"}
                            alt="github"/>
                    </div>
                    <div className="col-2 col-md-1 text-center">
                        <LinkWithImage
                            href={"mailto: nirbelelti@gmail.com"}
                            src={gmailLogo} alt="gmail"
                            additionClass={"footer-image"}
                        />
                    </div>
                    <div className="col-2 col-md-1 text-center">
                        <LinkWithImage
                            href={"https://github.com/nirbelelti"}
                            target={"_blank"} src={gitLogo} additionClass={"footer-image"}
                            alt="github"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 text-white-50">
                        <p>&copy; 2024 All rights reserved.</p>
                    </div>
                </div>
            </footer>
            );
            }

            export default Footer;