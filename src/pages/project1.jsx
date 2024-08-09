import React from "react";
import "../styles/project1.css";
import { useParams } from "react-router-dom";
import { projectlist } from "../helpers/projectlist";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Project1() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    }, [location]);
    const { id } = useParams();
    console.log("Received ID:", id); // Debug log

    const card = projectlist.find((card) =>
        card.images.some((image) => image.id === parseInt(id))
    );
    console.log("Found Card:", card); // Debug log

    if (!card) {
        return <div>Card not found</div>;
    }

    const imageDetails = card.images.find((image) => image.id === parseInt(id));
    console.log("Image Details:", imageDetails); // Debug log

    if (!imageDetails) {
        return <div>Image details not found</div>;
    }

    return (
        <div className="main-project1">
            <div className="herosection-project1">
            </div>
            <div className="project1-secndsec">
                <div className="project1-img">
                    <img src={imageDetails.mainimage} alt={imageDetails.title} />
                </div>
                <div className="text-points">
                    <div className="points">
                        <p>{imageDetails.point1}</p>
                        <p>{imageDetails.point2}</p>
                        <p>{imageDetails.point3}</p>
                        <p>{imageDetails.point4}</p>
                    </div>
                </div>
                <div className="titledescription"></div>
                {/* <div className="twoimage">
                    <img src={imageDetails.subimage1} alt={imageDetails.title} />
                    <img src={imageDetails.subimage2} alt={imageDetails.title} />
                </div> */}
            </div>
        </div>
    );
}

export default Project1;
