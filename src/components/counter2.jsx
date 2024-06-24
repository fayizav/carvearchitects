import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/counter2.css"
function counter2() {
    const [counterState, setCounterState] = useState(false);

    return (

        < ScrollTrigger onEnter={() => setCounterState(true)
        }>

            <div className='counter'>
                < p className='p' > {counterState && <CountUp start={0} end={8} ></CountUp>
                } +</p >
                <p>Years of<br />
                    Experience</p>
                <div className='line'></div>
                <p className='p'>{counterState && <CountUp start={0} end={40} ></CountUp>}+</p>
                <p>Satisfied Client<br /> Reviews
                </p>
                <div className='line'></div>
                <p className='p'>{counterState && <CountUp start={0} end={50} ></CountUp>}+</p>
                <p>Completed<br />
                    Projects</p>
                <div className='line'></div>
                <p className='p'>{counterState && <CountUp start={0} end={100} ></CountUp>}%</p>
                <p>Quality<br />
                    Excellence</p>
                <div className='line'></div>
            </div >
        </ScrollTrigger >

    )
}

export default counter2
