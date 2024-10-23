import TypeWriter from "../components/TypeWriter.tsx";
import {useEffect} from "react";
import Thumbnail from "../components/Thumbnail.tsx";
import pageImage from "../assets/profile-image.png";


const AboutMe = () => {
    useEffect(() => {
        document.body.classList.add('welcome-page-bg');
        return () => {
            document.body.classList.remove('welcome-page-bg');
        };
    }, []);

    const textArray = [
        "Thank you for visiting! Allow me to introduce myself, I'm a software engineer with an MSc in Computer Science and Engineering, specializing in computer security." +
        " But wait, there's more! I also have a background in business administration with a focus on management and marketing, " +
        "and I've earned three academic titles along the way. I can speak five languages at different levels, so whether it's code or conversation, I'm in!" +
        " On the creative side, I've dabbled in photography and cinema. And as a proud car enthusiast who grew up working in my family's car service center," +
        " I love bringing all these passions together to tackle problems in fresh and exciting ways!"
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 ">
                        <div className="row">
                            <h2 className="text-danger font-weight-bold">Hi there,</h2>
                            <h1> I'm Nir a <span className="text-primary">Software Engineer</span></h1>
                        </div>
                        <TypeWriter textArray={textArray}/>
                    </div>
                    <div className="col-4  mb-5 d-none d-md-inline">
                        <Thumbnail src={pageImage} alt={"profile"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;