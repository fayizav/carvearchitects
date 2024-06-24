import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import '../styles/project.css';

// Import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import project1 from "../assets/latest1.jpg"
import project2 from "../assets/latest2.jpg"
import project3 from "../assets/latest3.jpg"
import project4 from "../assets/latest4.jpg"
import project5 from "../assets/latest5.jpg"

function App() {
    return (
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
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
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
            <SwiperSlide>
                <div className='prjctimge'>
                    <img src={project1} alt="Project 1" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='prjctimge'>
                    <img src={project2} alt="Project 2" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='prjctimge'>
                    <img src={project3} alt="Project 3" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='prjctimge'>
                    <img src={project4} alt="Project 4" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='prjctimge'>
                    <img src={project5} alt="Project 5" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default App;
