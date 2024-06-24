import React from 'react';
import { useTrail, animated } from '@react-spring/web';

const Test = () => {
    const text = "This is nice property";
    const letters = text.split("");

    const trail = useTrail(letters.length, {
        from: { transform: 'translateY(-100%)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { duration: 1 }, // faster transition duration
        delay: 1, // initial delay before the animation starts
    });

    return (
        <>
            <div className='h-48 flex items-center justify-center'>
                {trail.map((props, index) => (
                    <animated.span key={index} style={props} className='text-2xl inline-block'>
                        {letters[index] === " " ? "\u00A0" : letters[index]}
                    </animated.span>
                ))}
            </div>
        </>
    );
};

export default Test;
