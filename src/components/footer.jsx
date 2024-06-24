import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { FaAngleDoubleRight, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";


function Footer() {
    const location = useLocation();
    console.log(location, "location");
    const footerClass = location.pathname === "/" ? "mainfooter black-bg" : "mainfooter white-bg";

    return (
        <div className="mainfooterr">
            <div className="mainfooter">
                <div className="carve">
                    <div className="imgtitle">
                        <img src={logo} alt="Carve Architects Logo" />
                    </div>
                    <div className="footerline"></div>
                    <p>
                        Creating architectural masterpieces by blending creativity and precision. Elevating design excellence with client-focused innovation.
                    </p>
                </div>
                <div className="pages">
                    <p className="title">Pages</p>
                    <div className="footerline"></div>
                    <div className="submain">
                        <p className="subtitle1">
                            Facebook <FaAngleDoubleRight className="arrow1" />
                        </p>
                    </div>
                    <div className="submain">
                        <p className="subtitle2">
                            LinkedIn <FaAngleDoubleRight className="arrow2" />
                        </p>
                    </div>
                    <div className="submain">
                        <p className="subtitle3">
                            Instagram <FaAngleDoubleRight className="arrow3" />
                        </p>
                    </div>
                </div>
                <div className="office">
                    <p className="titleoff">Office Information</p>
                    <div className="footerline"></div>
                    <div className="subtitle">
                        <div className="loc">
                            <MdLocationOn className="location" />
                            <p className="ppp">Manjeri Kacheripadi</p><br />
                        </div>
                        <div className="em">
                            <MdEmail className="email" />
                            <p className="ppp">carvearchitects@gmail.com</p><br />
                        </div>
                        <div className="ph">
                            <FaPhoneAlt
                                className="phone" />
                            <p className="ppp">Phone: +91 9745700108</p>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <p className="titlenews">Newsletter</p>
                    <div className="input-wrapper">
                        <input type="email" className="email-input" name="email" placeholder="Email" required />
                        <div className="arrowe">
                            <TiLocationArrow className="arroweemail" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerend">
                <div className="copyright">
                    <p>Copyright © 2024 Carve Architects. All Rights Reserved</p>
                </div>
                <div className="terms">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Sitemap</p>
                </div>
            </div>

        </div >
    );
}

export default Footer;
