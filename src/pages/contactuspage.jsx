import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "../styles/contactus.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function ContactUsPage() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    }, [location]);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully!');
                // Reset form fields
                setFormData({
                    firstName: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: ''
                });
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="contactmain">
            <div className="contactmainhero">
                <h1>CONTACT</h1>
            </div>
            <div className="formget">
                <div className="contact-form">
                    <h1>Enter Your Personal Details</h1>
                    <div className="name-email">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="phone-address">
                        <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        <input type="text" id="address" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <textarea id="message" name="message" placeholder="Write Your Message" value={formData.message} onChange={handleChange} required />
                    <div className="buttonsend">
                        <button onClick={handleSubmit}>Send A Message</button>
                    </div>
                </div>
                <div className="getintouchaddress">
                    <div className="getintouch">
                        <h1>Get In Touch</h1>
                        <p>Carve Architects blends creativity with functionality to craft inspiring spaces. Our team focuses on sustainability and client vision, turning concepts into lasting, exceptional architect.</p>
                    </div>
                    <div className="addresses">
                        <div className="address">
                            <h4>Address</h4>
                            <div className="icontext">
                                <div className="locationicon">
                                    <MdLocationOn className="locationcontact" />
                                </div>
                                <p>Citypoint Manjeri</p>
                            </div>
                        </div>
                        <div className="emailaddress">
                            <h4>Email Address</h4>
                            <div className="icontext">
                                <div className="emailicon">
                                    <MdEmail className="emailcontact" />
                                </div>
                                <p>carvearchi@gmail.com</p>
                            </div>
                        </div>
                        <div className="phonenumber">
                            <h4>Phone Number</h4>
                            <div className="symboltext">
                                <div className="phoneicon">
                                    <FaPhoneAlt
                                        className="phonecontact" />
                                </div>
                                <p>8593076469</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
