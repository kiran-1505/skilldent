import React from 'react';
import './Banner.scss';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/3.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {
    return (
        <section className='section-bg section-common banner-section'>
            <div className="banner-gradient-overlay"></div>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="welcome-badge">Welcome to</div>
                                    <h1>
                                        <span className="highlight">Skill</span>
                                        <span className="highlight-alt">Dent</span>
                                    </h1>
                                    <h3 className="tagline">
                                        Empowering Dental Excellence Through
                                        <span className="emphasis"> Comprehensive Education</span> and
                                        <span className="emphasis"> Training</span>
                                    </h3>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSesXTJs_Rr2iu3534GOOBVkg7q6qp6jqBadWoyVi1mNXBMtXg/viewform?usp=sharing" className="cta-button" target="_blank" rel="noopener noreferrer">
                                                <span>Register for Course</span>
                                                <svg className="arrow" viewBox="0 0 24 24">
                                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                                </svg>
                                            </a>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon pulse'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Contact Us</p>
                                                <h6>+91 7676148699</h6>
                                                <h6>080 41461047</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" className="floating" />
                                    </div>

                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" className="shape-animate shape1" />
                                        <img src={shapeTwo} alt="shape" className="shape-animate shape2" />
                                        <img src={shapeThree} alt="shape" className="shape-animate shape3" />
                                        <img src={shapeFour} alt="shape" className="shape-animate shape4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;