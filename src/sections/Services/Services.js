import React from 'react';
import './Services.scss';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="why-choose">
                    <h2>Our Mission</h2>
                        <p>
                            To provide high-quality dental education and training that equips students with the skills, knowledge, and confidence to succeed in their dental careers.
                        </p>
                        <h2>Core Values</h2>
                    <ul>
                        <li>Excellence : We strive for excellence in all aspects of dental education and practice.</li>
                        <li>Innovation : We encourage creativity, critical thinking, and innovation in dental education and research.</li>
                        <li>⁠Compassion : We foster a culture of compassion, empathy, and respect for patients, students, and colleagues.</li>
                        <li>⁠Integrity : We uphold the highest standards of integrity, ethics, and professionalism in all our endeavors.</li>
                        <li>⁠Collaboration : We promote collaboration and teamwork among students, faculty, and dental professionals to achieve common goals.</li>
                    </ul>
                    </div>
                </div>   
            </div>

            <div className="services-link text-center">
                <Link to='/academic'>
                    View all courses offered
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;