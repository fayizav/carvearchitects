import React from "react";
import { projectlist } from "../helpers/projectlist";
import { Link } from "react-router-dom";
import "../styles/interior.css"

function interior() {
    const interiorsProject = projectlist.find(project => project.title === "Interiors");

    return (
        <div className="interiors-page">
            <div className="herosection-interior">        <h3>Interiors</h3>
            </div>

            <div className="interiors-images">
                {interiorsProject.images.map((image, index) => (
                    <div key={index} className="interior-image">
                        <img src={image.src} alt={`Interior ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default interior;

