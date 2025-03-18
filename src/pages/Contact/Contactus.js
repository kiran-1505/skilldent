import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../sections/Footer/Footer';
import './Contactus.scss';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaWhatsapp, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';

const Contactus = () => {
    return (
        <>
            <Navbar />
            <section className='section-bg section-common contact-section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-info">
                                <h2 className="text-center mb-4">Contact Information</h2>
                                <p className="text-center">Feel free to reach out to us for any inquiries about our dental courses and training programs.</p>
                                
                                <div className="info-grid">
                                    <div className="info-item">
                                        <FaPhone className="icon" />
                                        <div className="info-content">
                                            <h4>Call Us</h4>
                                            <p>080 41461047</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <FaWhatsapp className="icon" />
                                        <div className="info-content">
                                            <h4>WhatsApp</h4>
                                            <p>+91 7676148699</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <FaMapMarkerAlt className="icon" />
                                        <div className="info-content">
                                            <h4>Location</h4>
                                            <p>2nd Floor, Malkala Samudhya Bhavana,Jayanagar 4th T Block, Bangalore</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <FaClock className="icon" />
                                        <div className="info-content">
                                            <h4>Working Hours</h4>
                                            <p>Monday - Saturday<br />9:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <FaEnvelope className="icon" />
                                        <div className="info-content">
                                            <h4>Email</h4>
                                            <p>Skilldentacademy@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="register-section">
                                    <h3 className="text-center">Ready to Start Your Journey?</h3>
                                    <div className="register-button-wrapper">
                                        <a 
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSesXTJs_Rr2iu3534GOOBVkg7q6qp6jqBadWoyVi1mNXBMtXg/viewform?usp=sharing" 
                                            className="register-link" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FaGraduationCap className="register-icon" />
                                            Register for Course
                                            <FaExternalLinkAlt className="external-icon" />
                                        </a>
                                    </div>
                                </div>

                                <div className="location-link-box">
                                    <a href="https://maps.app.goo.gl/BhDFZKUnn2hfnsxB9?g_st=aw" target="_blank" rel="noopener noreferrer">
                                        <FaMapMarkerAlt className="location-icon" />
                                        Click here for location
                                        <FaExternalLinkAlt className="external-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contactus;
