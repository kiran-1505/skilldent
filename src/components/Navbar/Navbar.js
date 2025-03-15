import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import skilldentlogo from './../../assets/skilldentlogo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Clinical',
            path: '/clinical',
        },
        {
            name: 'Academic Courses',
            path: '/academiccourse',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        }
    ];

    return (
        <div className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={skilldentlogo} alt="SkillDent Logo" />
                        </Link>
                        <button 
                            className={`navbar-toggler ${isOpen ? 'active' : ''}`} 
                            type="button" 
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation"
                        >
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                {navbarItems.map((navItem, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link 
                                            className={`nav-link ${location.pathname === navItem.path ? 'active' : ''}`} 
                                            to={navItem.path}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {navItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSesXTJs_Rr2iu3534GOOBVkg7q6qp6jqBadWoyVi1mNXBMtXg/viewform?usp=sharing" 
                                    className="register-button" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <span>Register Now</span>
                                    <svg className="arrow" viewBox="0 0 24 24">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;