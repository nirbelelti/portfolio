import TypingAnimator from "react-typing-animator";
import { useEffect, useState } from "react";

const Introduction = () => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const textArray = [
        "Thank you for visiting! Allow me to introduce myself, I'm a software engineer with an MSc in Computer Science and Engineering, specializing in computer security." +
        " But wait, there's more! I also have a background in business administration with a focus on management and marketing, " +
        "and I've earned three academic titles along the way. I can speak five languages at different levels, so whether it's code or conversation, I'm in!" +
        " On the creative side, I've dabbled in photography and cinema. And as a proud car enthusiast who grew up working in my family's car service center," +
        " I love bringing all these passions together to tackle problems in fresh and exciting ways!"
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
        }, textArray.join(' ').length * 120 + 30000); // Adjust timing based on typing speed and delay

        return () => clearTimeout(timer);
    });

    return (
        <>
            <div className="row">
                <h2 className="text-danger font-weight-bold">Hi there,</h2>
                <h1> I'm Nir a <span className="text-primary">Software Engineer</span></h1>
            </div>
            <div className="row">
                <div className="col-12 d-flex">
                    {!isTypingComplete ? (
                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="none"
                            textColor="silver"
                            fontSize="24px"
                            loop={false}
                            typingSpeed={120}
                            delaySpeed={300}
                            backspace={false}
                            height="auto"
                            dynamicDelay
                            style={{ fontFamily: "Helvetica", fontWeight: "bold", marginTop: "10px" }}
                        />
                    ) : (
                        <p style={{ fontFamily: "Helvetica", fontWeight: "bold", marginTop: "10px", color: "silver", fontSize: "24px" }}>
                            {textArray.join(' ')}
                        </p>
                    )}
                </div>
            </div>
            {!isTypingComplete && (
                <div className="row justify-content-end mt-3">
                    <div className="col-12 text-end">
                        <button onClick={() => setIsTypingComplete(true)} className="btn btn-outline-light ">
                            Skip
                        </button>
                    </div>
                </div>
            )}
            {isTypingComplete && (
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <a href="mailto: nirbelelti@gmail.com" className="btn btn-outline-secondary btn-lg">Contact me</a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Introduction;