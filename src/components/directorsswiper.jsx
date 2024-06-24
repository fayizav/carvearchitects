import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Make sure you import autoplay styles if needed

import { Autoplay, FreeMode } from 'swiper/modules';

import "../styles/directorsswiper.css"
import { directorslist } from "../helpers/directorslist"

function DirectorsSwiper() {
    return (
        <div className='directors'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                direction={'horizontal'} // Set the direction to horizontal
                loop={true}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // when window width is < 640px
                    0: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {directorslist.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className='director1'>
                            <img src={item.image} alt={item.name} />
                            <div className='jobname'>
                                <h3>{item.name}</h3>
                                <h6>{item.job}</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default DirectorsSwiper;
