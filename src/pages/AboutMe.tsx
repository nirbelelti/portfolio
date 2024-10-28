import TypeWriter from "../components/TypeWriter.tsx";
import Thumbnail from "../components/Thumbnail.tsx";
import pageImage from "../assets/profile-image.png";


const AboutMe = () => {

    const textArray = [
        "Thank you for visiting! I’m a software engineer with an MSc in Computer Science and Engineering, specializing in computer security." +
        " I also have a background in business administration, with specializations in management and marketing, and hold three academic titles." +
        " I love learning and acquiring new skills in various fields.  I can speak five languages (Fluent in three) and enjoy coding and conversation." +
        " Additionally, I have a passion for art, photography, cinema, and car enthusiasts, having grown up in my family’s car service center. " +
        "My curiosity, diverse range of backgrounds, and combination of interests give me a unique perspective and an innovative approach to problem-solving!"
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 ">
                        <div className="row justify-content-center">
                            <h2 className="text-danger font-weight-bold">Hi there,</h2>
                            <h1> I'm Nir a <span className="text-primary">Software Engineer</span></h1>
                        </div>
                        <TypeWriter textArray={textArray}/>
                    </div>
                    <div className="col-4 justify-content-center  mb-5 d-none d-md-inline">
                        <Thumbnail src={pageImage} alt={"profile"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;