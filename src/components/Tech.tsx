import Thumbnail from "./Thumbnail.tsx";

interface TechProps {
    src: string;
    alt: string;
    subtitles: string[];

}



const Tech = ({src,alt, subtitles}:TechProps) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 pe-5 justify-content-center text-center ">
                <div className="row text-center justify-content-center text-center">
                    <div className="col-2 col-md-6 col-lg-4  ">
                        <Thumbnail src={src} alt={alt} ></Thumbnail>
                    </div>
                </div>
                <div className="row sub-title  ustify-content-center text-cente mt-4 mb-5">
                    <div className="col-12">
                    {subtitles.map((subtitle, index) =>
                        index < subtitles.length - 1 ? `${subtitle}, ` : subtitle
                    )}
                    </div>
                </div>
            </div>

            </>
            )
            }

            export default Tech;