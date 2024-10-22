interface certificateProps {
    name: string;
    date: string;
    description: string;
    src: string;
    alt: string;
}


const Certificate = ({name, date, description, src, alt}: certificateProps) => {
    return (
        <>
            <div className="row justify-content-center ">
                <div className="col-md-10 col-12 rounded  bg-secondary p-5 ">
                    <div className="row justify-content-end d-none d-md-inline">
                        <div className="col-md-2 col-sm-12 text-end">
                           <strong>Compilation:</strong>
                        </div>
                        < div className="col-md-1 col-12 text-md-start text-end">
                            {date}
                        </div>
                    </div>
                    <div className="row text-center">
                    <h2 className="text-center">{name}</h2>
                    </div>

                    <p>{description}</p>
                    <div className="row justify-content-center">
                    <img src={src} alt={alt}  className={`img-fluid`}/>
                    </div>

                </div>
            </div>


        </>
    );
}
export default Certificate;