import React from 'react';
import "../styles/directorsswiper.css";
import { directorslist } from "../helpers/directorslist";

function DirectorsSwiper() {
    return (
        <div className='directors'>
            <div className='directors-grid'>
                {directorslist.map((item, key) => (
                    <div className='director1' key={key}>
                        <div className='director1image'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='jobname'>
                            <h3>{item.name}</h3>
                            <h6>{item.job}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DirectorsSwiper;
