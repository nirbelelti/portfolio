import TypingAnimator from "react-typing-animator";
import { useEffect, useState } from "react";

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
                        typingSpeed = 100,
                        delaySpeed = 100,
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
    const [isTypingComplete, setIsTypingComplete] = useState(() => {
        const savedState = localStorage.getItem('isTypingComplete');
        if (savedState) {
            const { value, timestamp } = JSON.parse(savedState);
            const oneDay = 24 * 60 * 60 * 1000;
            if (Date.now() - timestamp < oneDay) {
                return value;
            }
        }
        return false;
    });

    useEffect(() => {
        const data = {
            value: isTypingComplete,
            timestamp: Date.now()
        };
        localStorage.setItem('isTypingComplete', JSON.stringify(data));
    }, [isTypingComplete]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
        }, textArray.join(' ').length * 90 ); // Timing based on typing speed and delay

        return () => clearTimeout(timer);
    }, [textArray]);

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
                        <button onClick={() => setIsTypingComplete(true)} className="btn btn-outline-secondary">
                            Skip <i className="bi bi-skip-forward"></i>
                        </button>
                    </div>
                </div>
            )

            }
            {isTypingComplete && (
                <div className="row  mt-5">
                    <div className="col offset-1  text-center">
                        <a href="mailto:nirbelelti@gmail.com" className="btn btn-outline-light btn-lg">Contact me</a>
                    </div>
                    <div className="col-1 text-md-end text-start">
                        <i className="bi bi-arrow-clockwise fs-4 replay" onClick={() => setIsTypingComplete(false)}></i>
                    </div>
                </div>
            )}
        </>
    );
}

export default TypeWriter;