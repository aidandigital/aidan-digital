import { useState, useEffect } from "react";

const Typewriter = ({ children, speed = 75 }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        if (text.length < children.length) {
            const interval = setInterval(() => {
                setText(text => text + children[text.length]);
            }, speed);

            return () => clearInterval(interval); // clean up effect
        }
    }, [text]);

    return (
        <span>
            {text}
            <span className="typewriter-cursor">|</span>
        </span>
    );
}

export default Typewriter;