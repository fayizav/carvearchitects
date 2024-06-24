import React from 'react';
import "../styles/services.css";

import { servicelist } from '../helpers/servicelist';

function Services() {
    return (
        <div className='servicecards padding'>
            {servicelist.map((item, index) => (
                <div className='servicecard' key={index}>
                    <div className='imagetitle'>
                        <div className='imagediv'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h1>{item.title}</h1>
                    </div>
                    <div className='des'>

                        <p className='desp'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services;
