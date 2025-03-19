import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/'
        },
        {
            'name' : 'Dental Services',
            'link' : '/'
        },
        {
            'name' : 'Dentist',
            'link' : '/'
        },
        {
            'name' : 'Academic Courses',
            'link' : '/'
        },
        {
            'name' : 'FAQs',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '+91 7676148699',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '09:00 AM - 05:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': '2ND Floor, Malkala Samudhya Bhavana, Beside RGUHS, 26th Main Road, Jayanagar 4th T Block, Bangalore - 560041',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <p>Empowering Dental Excellence Through Comprehensive Education and Training</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="https://www.instagram.com/skilldent_academy?igsh=MWJhY2RxN3RyendlMQ=="><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; SkillDent. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;
