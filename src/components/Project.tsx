import github from '../assets/ToolsLogos/github-logo.png';

interface projectProps {
    name: string;
    description: string;
    src?: string;
    alt?: string;
    link?: string;
    tags?: string[];
}


const Project = ({name, description, src, alt, link, tags}: projectProps) => {
    return (
        <>
            <div className="row mb-1">
                <div className="col">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="row mb-3">
                {src && <div className="col-2 col-md-1 "><img src={src} alt={alt} className="img-fluid"/></div>}
                <div className="col">
                    <p>{description}</p>
                </div>
            </div>
            {link && <div className="row justify-content-center mb-3">
                <div className="row">
                    <div className="col">
                        <h6>View the repository on GitHub:</h6>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center m-0  m-md-2 ">
                        <a href={link} target="_blank" rel="noreferrer" className="btn btn-outline-secondary me-3">
                            <img src={github} alt="github logo" className="img-fluid link-icon pe-1"/>
                            {name} repository
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2  ">
                        <p>
                           <strong>OR</strong> View the {name} repository on the following <a href={link} target="_blank"
                                                                              rel="noreferrer"className="text-truncate">Link</a>
                        </p>
                    </div>
                </div>
            </div>}
            {tags && tags.length > 0 &&
                <div className="row">
                    <div className="col">
                        <h6>Tags:</h6>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col">
                    <div className="row">
                        {tags?.map((tag, index) => (
                            <div key={index} className="col-auto">
                                <span className="badge bg-secondary">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Project