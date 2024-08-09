import React, { useState, useEffect } from "react";
import "../styles/projectsmain.css";
import { projectlist } from "../helpers/projectlist";
import Form from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Projectsmain() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    }, [location]);

    const [activeProjectIndex, setActiveProjectIndex] = useState(0); // Show "All Projects" by default
    const [visibleImageIndex, setVisibleImageIndex] = useState(null);

    const handleProjectClick = (index) => {
        if (projectlist[index].title === "Interiors") {
            navigate("/interiors");
        } else {
            setActiveProjectIndex(index);
            setVisibleImageIndex(null); // Reset visible image when project changes
        }
    };

    const handleMouseEnter = (imageIndex) => {
        setVisibleImageIndex(imageIndex);
    };

    return (
        <div className="main-project">
            <div className="herosection-project">
                <h3>PROJECTS</h3>
            </div>
            <div className="project-secondsection">
                <h5>LATEST PROJECTS</h5>
                <h1>
                    Where Form Meets Function
                    <br /> with Flair designer
                </h1>

                {/* Buttons Section */}
                <div className="projects-button">
                    {projectlist.map((project, projectIndex) => (
                        <button
                            onClick={() => handleProjectClick(projectIndex)}
                            className={activeProjectIndex === projectIndex ? "active" : ""}
                            key={projectIndex}
                        >
                            {project.title}
                        </button>
                    ))}
                </div>

                {/* Images Section */}
                <div className="projects-images">
                    {projectlist[activeProjectIndex].images.map((image, imageIndex) => (
                        <div
                            key={imageIndex}
                            className="imagemap"
                            onMouseEnter={() => handleMouseEnter(imageIndex)}
                        >
                            <div className="projectimages">
                                <img
                                    src={image.src}
                                    alt={`Project ${activeProjectIndex} Image ${imageIndex}`}
                                />
                                <Link to={`/project1/${image.id}`}>
                                    <button>Read more</button>
                                </Link>
                            </div>
                            {/* <div
                                className={`image-info ${visibleImageIndex === imageIndex ? "visible" : ""
                                    }`}
                            >
                                <Link to={`/project1/${image.id}`}>
                                    <button className="readbutton">Read More</button>
                                </Link>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Projectsmain;
