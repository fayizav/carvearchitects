import React from "react";
import "../styles/aboutus.css";
import aboutus2 from "../assets/aboutus.jpg";
import marque1 from "../assets/slideshow1.jpg";
import marque2 from "../assets/slideshow2.jpg";
import marque3 from "../assets/slideshow4.png";
import marque4 from "../assets/interiordesigning.png";
import marque5 from "../assets/latest1.jpg";
import marque6 from "../assets/residential2.jpg";

import Directors from "../components/directorsswiper";
import Marquee from "react-fast-marquee";
import vision from "../assets/vision.png"
import mission from "../assets/mission.png"
import { FaCheck } from "react-icons/fa6";



function aboutuspage() {
    return (
        <div className="aboutmain">
            <div className="herosection-about">
                <h3>ABOUT US</h3>
            </div>
            <div className="About-secondsection">
                <h5>ABOUT US</h5>

                <div className="aboutimagetext">
                    <div className="aboutimage">
                        <img src={aboutus2} alt="" />
                    </div>
                    <div className="aboutmaintext">
                        <div className="abttexts">
                            <h2>Crafting Innovative and Sustainable Architectural Masterpieces</h2>

                            <p>At Carve Architects, we turn visions into stunning realities. Our team blends innovation with sustainability to craft beautiful, eco-conscious spaces. From start to finish, we exceed expectations, creating unique masterpieces that mirror our clients' dreams.






                            </p>
                            <div className="abtpoints">
                                <div className="singlepoint">
                                    < FaCheck className='tickmark' />

                                    <p>Over 40 positive client reviews and 50+ completed projects</p>
                                </div>
                                <div className="singlepoint">
                                    <FaCheck className='tickmark' />

                                    <p>Expertise in both residential and commercial architecture</p>
                                </div>
                                <div className="singlepoint">
                                    <FaCheck className='tickmark' />

                                    <p>8 years of experience in the industry</p>
                                </div>
                                <div className="singlepoint">
                                    <FaCheck className='tickmark' />

                                    <p>Providing services all over Kerala</p>
                                </div>

                            </div>
                        </div>
                        {/* <p>
                            At Carve Architects, we pride ourselves on turning our clients'
                            unique visions into breathtaking architectural realities. Our team
                            of experts meticulously plans and executes each project, ensuring
                            every detail contributes to the overall exceptional space. We
                            combine innovative design principles with sustainable practices to
                            create spaces that are not only beautiful but also environmentally
                            conscious. From concept to completion, we work closely with our
                            clients to understand their needs and aspirations, delivering
                            results that exceed expectations. With a commitment to excellence
                            and a passion for design, Carve Architects transforms ordinary
                            structures into extraordinary living and working environments. We
                            have garnered over 40 positive client reviews and successfully
                            completed more than 50 projects, specializing in both residential
                            and commercial categories. With 8 years of experience in the
                            industry, we provide our services all over Kerala, ensuring that
                            each project is a unique masterpiece, reflecting our clients'
                            personal styles and aspirations.
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="visionmission">
                <div className="vision">
                    <div className="visionimage">
                        <img src={vision} alt="" />
                        <h1>VISION</h1>
                    </div>
                    <p>
                        our vision is to be the leading architectural firm renowned for
                        transforming innovative and sustainable design concepts into
                        stunning realities. We aspire to set new standards in the industry
                        by creating spaces that inspire, uplift, and endure, reflecting the
                        unique identities and aspirations of our clients.
                    </p>
                </div>
                <div className="mission">
                    <div className="missionimage">
                        <img src={mission} alt="" />
                        <h1>MISSION</h1>
                    </div>
                    <p>
                        Our mission at Carve Architects is to blend visionary design with
                        meticulous craftsmanship, ensuring every project is a masterpiece
                        that enhances the quality of life and the environment. We are
                        committed to delivering exceptional service through close
                        collaboration with our clients, employing cutting-edge technology,
                        and adhering to the highest standards of excellence and
                        sustainability. Our goal is to consistently exceed expectations,
                        creating beautiful, functional, and eco-friendly spaces that stand
                        the test of time.
                    </p>
                </div>
            </div>

            <div className="founders">
                <h3>DIRECTORS</h3>
                <h6>Leading with Vision and Expertise</h6>

                <Directors />
            </div>
            <div className="marqueeprojects">
                <h1>OUR PROJECTS</h1>
                <Marquee autoFill={true}>
                    <div className="marqueimgcontainer">
                        <div className="image-wrapper">
                            <img src={marque1} alt="" />
                        </div>
                        <div className="image-wrapper">
                            <img src={marque2} alt="" />
                        </div>
                        <div className="image-wrapper">
                            <img src={marque3} alt="" />
                        </div>
                        <div className="image-wrapper">
                            <img src={marque1} alt="" />
                        </div>
                        <div className="image-wrapper">
                            <img src={marque5} alt="" />
                        </div>
                        <div className="image-wrapper">
                            <img src={marque6} alt="" />
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default aboutuspage;