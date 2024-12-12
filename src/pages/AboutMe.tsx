import TypeWriter from "../components/TypeWriter.tsx";
import Thumbnail from "../components/Thumbnail.tsx";
import pageImage from "../assets/profile-image.png";


const AboutMe = () => {

    const textArray = [
        "Thank you for visiting! I’m a software engineer with an MSc in Computer Science and Engineering, specializing " +
        "in computer security. I also have a background in business administration, with specializations in management " +
        "and marketing, and hold three academic titles. As a lifelong learner, my passion is to learn and acquire new " +
        "skills in various fields and additionally can speak five languages, fluently in English, Hebrew, and Danish. " +
        "My interests include technology, coding, economy,  art, photography, and cinema, along with, as well a passion" +
        " for cars, having grown up in my family’s car service center. My curiosity, diverse background, and wide range " +
        "of interests give me a unique perspective and an innovative approach to engineering and problem-solving!"
    ];

    return (
        <>
            <section id={"home"}>
                <div className="container" id="home">
                    <div className="row">
                        <div className="col-12 col-md-7 ">
                            <div className="row justify-content-center">
                                <h2 className="text-danger font-weight-bold">Hi there,</h2>
                                <h1> I'm Nir and I am a <span className="text-primary">Software Engineer</span></h1>
                            </div>
                            <TypeWriter textArray={textArray}/>
                        </div>
                        <div className="col-4 justify-content-center  mb-5 d-none d-md-inline">
                            <Thumbnail src={pageImage} alt={"profile"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;