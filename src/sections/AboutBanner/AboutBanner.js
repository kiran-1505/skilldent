import React from 'react';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner3.png';
import bannerTwo from '../../assets/about/banner/banner4.png';
import bannerThree from '../../assets/about/banner/banner5.png';

const AboutBanner = () => {
    return (
        <section className='about-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    
                                    <div className="about-content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7">
                                                <div className="vision-section">
                                                    <h3>Vision</h3>
                                                    <p className="vision-text">
                                                        To be a premier dental education institution, renowned for excellence in clinical training, research, and community service, and to shape the future of dentistry by empowering students to become compassionate, skilled, and innovative dental professionals.
                                                    </p>
                                                </div>

                                                <div className="mission-section">
                                                    <h3>Our Mission</h3>
                                                    <p className="mission-text">
                                                        SkillDent Dental Academy, our mission is to provide high-quality dental education, foster a culture of excellence, and promote lifelong learning. We aim to:
                                                    </p>
                                                    <ul className="mission-objectives">
                                                        <li>
                                                            <span className="objective-title">Educational Excellence</span>
                                                            <p>Deliver comprehensive and innovative dental education that prepares students for successful careers in dentistry.</p>
                                                        </li>
                                                        <li>
                                                            <span className="objective-title">Culture of Innovation</span>
                                                            <p>Foster a culture of excellence by promoting creativity, and professionalism among students and faculty.</p>
                                                        </li>
                                                        <li>
                                                            <span className="objective-title">Industry Partnerships</span>
                                                            <p>Develop strong partnerships with dental professionals, organizations, and industries to stay at the forefront of dental education.</p>
                                                        </li>
                                                        <li>
                                                            <span className="objective-title">Leadership Development</span>
                                                            <p>Empower students to become leaders in the dental profession, equipped with skills and knowledge for societal impact.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-5">
                                                <div className="about-banner-img">
                                                    <div className="image-stack">
                                                        <img src={bannerOne} alt="About Banner 1" className="image-1" />
                                                        <img src={bannerTwo} alt="About Banner 2" className="image-2" />
                                                        <img src={bannerThree} alt="About Banner 3" className="image-3" />
                                                    </div>
                                                    <div className="frame-border"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;