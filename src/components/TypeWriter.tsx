import TypingAnimator from "react-typing-animator";
import {useEffect, useState} from "react";

interface TypeWriterProps {
    textArray: string[];
    cursorColor?: string;
    textColor?: string;
    fontSize?: string;
    loop?: false;
    typingSpeed?: number;
    delaySpeed?: number;
    backspace?: boolean;
    dynamicDelay?: boolean;
    style?: React.CSSProperties;
}

const TypeWriter = ({
                        textArray,
                        cursorColor = "none",
                        textColor = "silver",
                        fontSize = "20px",
                        loop = false,
                        typingSpeed = 120,
                        delaySpeed = 300,
                        backspace = false,
                        dynamicDelay = true,
                        style = {
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                            marginTop: "10px",
                            color: `${textColor}`,
                            fontSize: `${fontSize}`
                        }
                    }: TypeWriterProps) => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
        }, textArray.join(' ').length * 120 + 3000); // Timing based on typing speed and delay

        return () => clearTimeout(timer);
    });

    return (
        <>

            {!isTypingComplete ? (
                <TypingAnimator
                    textArray={textArray}
                    cursorColor={cursorColor}
                    textColor={textColor}
                    fontSize={fontSize}
                    loop={loop}
                    typingSpeed={typingSpeed}
                    delaySpeed={delaySpeed}
                    backspace={backspace}
                    height="auto"
                    dynamicDelay={dynamicDelay}
                    style={style}
                />
            ) : (
                <p style={style}>
                    {textArray.join(' ')}
                </p>
            )}

            {!isTypingComplete && (
                <div className="row justify-content-end mt-3">
                    <div className="col-12 text-end">
                        <button onClick={() => setIsTypingComplete(true)} className="btn btn-outline-secondary ">
                            Skip
                        </button>
                    </div>
                </div>
            )}
            {isTypingComplete && (
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <a href="mailto: nirbelelti@gmail.com" className="btn btn-outline-light btn-lg">Contact
                            me</a>
                    </div>
                </div>
            )}
        </>
    );
}

export default TypeWriter;