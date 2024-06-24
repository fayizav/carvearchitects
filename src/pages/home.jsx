import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "../styles/home.css";
import Service from "../components/services";
import Counter1 from "../components/counter1";
import Counter2 from "../components/counter2";
import about from "../assets/aboutus.jpg";
import Projects from "../components/projectswiper";
import counterimg from "../assets/counterimg.jpg";
import { Link } from "react-router-dom";
import aboutimg1 from "../assets/commitment.png";
import aboutimg2 from "../assets/architect.png";

const Home = () => {
    const text = "Build Your Dreams\nWith Art And Craft";
    const lines = text.split("\n").map((line) => line.split(""));

    const serviceText = "Crafting Timeless Spaces with Precision and Passion";
    const discoverText = "Discover our latest innovative projects";

    const [headingRef, headingInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [serviceRef, serviceInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [discoverRef, discoverInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const trail = useTrail(text.length, {
        from: { transform: "translateY(-100%)", opacity: 0 },
        to: {
            transform: headingInView ? "translateY(0)" : "translateY(-100%)",
            opacity: headingInView ? 1 : 0,
        },
        config: { duration: 100 },
    });

    const serviceTrail = useTrail(serviceText.length, {
        from: { transform: "translateY(-100%)", opacity: 0 },
        to: {
            transform: serviceInView ? "translateY(0)" : "translateY(-100%)",
            opacity: serviceInView ? 1 : 0,
        },
        config: { duration: 400 },
    });

    const discoverTrail = useTrail(discoverText.length, {
        from: { transform: "translateY(-100%)", opacity: 0 },
        to: {
            transform: discoverInView ? "translateY(0)" : "translateY(-100%)",
            opacity: discoverInView ? 1 : 0,
        },
        config: { duration: 400 },
    });

    return (
        <div className="home">
            <div className="herosection" ref={headingRef}>
                <div className="textbutton">
                    <h5>
                        {lines.map((line, lineIndex) => (
                            <div key={lineIndex} className="line">
                                {line.map((letter, letterIndex) => (
                                    <animated.span
                                        key={letterIndex}
                                        style={trail[lineIndex * line.length + letterIndex]}
                                        className="text-2xl inline-block"
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </animated.span>
                                ))}
                            </div>
                        ))}
                    </h5>
                    <p className="hero-des">
                        At our firm, we blend visionary design and meticulous craftsmanship
                        to transform your <br />
                        dreams into stunning realities, reflecting your unique style and
                        aspirations.
                    </p>
                    <div className="buttton">
                        <Link to="/aboutus">
                            <button>Read More</button>
                        </Link>
                    </div>
                </div>
                <Counter1 />
            </div>
            <div className="servicesmain" ref={serviceRef}>
                <h3>OUR SERVICES</h3>
                <p className="servicesmainp">
                    {serviceText.split(" ").map((word, index) => (
                        <animated.span key={index} style={serviceTrail[index]}>
                            {word}{" "}
                        </animated.span>
                    ))}
                </p>
                <Service />
            </div>
            <div className="aboutus">
                <h3>ABOUT US</h3>
                <div className="imagedesabout">
                    <div className="abouteeimagee">
                        <img src={about} alt="" />
                    </div>
                    <div className="aboutuswholepara">
                        <h1 className="firstheading">
                            Transforming Visions into Breathtaking Realities
                        </h1>
                        <p className="firstheadingpara">
                            At Carve Architects, we turn unique client visions into
                            architectural masterpieces. Our expert team meticulously plans and
                            executes each project, blending innovative design with sustainable
                            practices to create stunning, eco-friendly spaces.
                        </p>
                        <div className="secondheadingimg">
                            <h2 className="secondheading">Carve Architects</h2>
                            <div className="secndimgpara1">
                                <div className="secimg1">
                                    <img src={aboutimg2} alt="" />
                                </div>
                                <p className="secondheadingpara">
                                    With over 40 positive reviews and more than 50 completed projects
                                    in both residential and commercial categories, we bring 8 years of
                                    experience to clients across Kerala. Each project is a unique
                                    masterpiece, reflecting personal styles and aspirations.
                                </p>
                            </div>
                        </div>
                        <div className="secondheadingimg">
                            <h2 className="secondheading"> Our Commitment</h2>
                            <div className="secndimgpara">
                                <div className="secimg">
                                    <img src={aboutimg1} alt="" />
                                </div>
                                <p className="secondheadingpara">
                                    With a commitment to excellence and a passion for design, Carve
                                    Architects transforms ordinary structures into extraordinary
                                    living and working environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latestprj" ref={discoverRef}>
                <h3>LATEST PROJECTS</h3>
                <p>
                    {discoverText.split(" ").map((word, index) => (
                        <animated.span key={index} style={discoverTrail[index]}>
                            {word}{" "}
                        </animated.span>
                    ))}
                </p>
                <Projects />
            </div>
            <div className="counterimage">
                <div className="countermain">
                    <Counter2 />
                </div>
                <div className="counter-img">
                    <img src={counterimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
