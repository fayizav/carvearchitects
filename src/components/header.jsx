import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import the menu and close icons
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isHomePage = location.pathname === '/';

    return (
        <div className='headermain'>
            <div className={`header ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
                {/* <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div> */}
                <div className='logo'>
                    {isHomePage ? (
                        <img src={logo} alt="Logo" />
                    ) : (
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    )}
                </div>
                <div className='menu-icon' onClick={toggleMenu}>
                    <IoMdMenu className='menu' size={40} />
                </div>
                <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                    {/* Render close button only in mobile view */}
                    {isMenuOpen && (
                        <IoMdClose className='close-button' onClick={toggleMenu} size={30} />
                    )}
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    <Link to="/contactus" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
