import '../styles/Certificate.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface certificateProps {
    name: string;
    date: string;
    description: string;
    src: string;
    logo: string;
    alt: string;
}


const Certificate = ({name, date, description, src, alt, logo}: certificateProps) => {
    return (
        <>
            <div className="row justify-content-center ">
                <div className="col-md-10 col-12 rounded shadow shadow-lg bg-black border border-light ">
                    <div className="row justify-content-end ">
                        <div className="col text-end align-text-top ">
                            <strong className="d-none d-md-inline">Compilation:</strong> &nbsp; {date}
                        </div>
                    </div>
                    <div className="row p-2 p-md-5">
                        <div className="col">
                            <div className="row justify-content-center justify-content-md-start">
                                <div className="col-md-1 col-3 fade-in mt-md-5 mb-2 mb-md-0">
                                    <img
                                        alt={"certificate issuer logo"}
                                        src={logo}
                                        className="shadow shadow-lg img-fluid"
                                    />
                                </div>
                            </div>

                            <div className="row text-center">
                                <h2 className="text-center">{name}</h2>
                            </div>
                            <div className="row">
                                <div className="col text-start">
                                    {description}
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="col text-center ">
                                    <Zoom>
                                        <img
                                            alt={alt}
                                            src={src}
                                            width="auto"
                                            height="160"
                                            className="shadow shadow-lg"
                                        />
                                    </Zoom>
                                    <span><i className="bi bi-zoom-in"> Click to enlarge</i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Certificate;