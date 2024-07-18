import { useState } from 'react';
import { useEffect } from 'react';

const AnimatedText = () => {
    const words = ['fullstack', 'Frontend', 'Backend'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOnScreen(true);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsOnScreen(false);
            }, 1000);
            
        }, 4000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className={`highlight ${isOnScreen ? 'fade-out' : 'fade-in'}`}>
            {words[currentWordIndex]}
        </span>
    );
};

export default AnimatedText;

