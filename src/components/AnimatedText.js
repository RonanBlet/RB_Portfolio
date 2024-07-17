import { useState } from 'react';
import { useEffect } from 'react';

const AnimatedText = () => {
    const words = ['fullstack', 'Frontend', 'Backend'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className="highlight">{words[currentWordIndex]}</span>
    );
};

export default AnimatedText;

