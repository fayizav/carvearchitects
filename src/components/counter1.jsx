import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/counter1.css"
function counter1() {
    const [counterState, setCounterState] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterState(true)}>
            <div className='review-project'>

                <div className='review'>
                    <p className='number'>{counterState && <CountUp start={0} end={40}></CountUp>}+</p>
                    <p className='text'>Client Reviews</p>

                </div>
                <div className='project'>
                    <p className='number'>{counterState && <CountUp start={0} end={50}></CountUp>}+</p>
                    <p className='text'>Completed Projects</p>
                </div>
            </div >
        </ScrollTrigger >

    )
}

export default counter1
