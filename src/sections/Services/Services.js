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

                        <h2>Why Choose SkillDent Dental Academy?</h2>
      
                        <ul>
                            <ul>Comprehensive Education</ul>
                                <li>Wide range of courses : SkillDent offers a variety of dental courses, guided by renowned experts in the respective fields. </li>
                                <li>Curriculum designed by experts : Our curriculum is crafted by experienced dental professionals to ensure students receive a well-rounded education.</li>
                            <ul>Expert Faculty</ul>
                                <li>Experienced and qualified faculty : Our faculty consists of seasoned dental professionals with a passion for teaching and mentoring.</li>
                                <li>Faculty with international exposure : Many of our faculty members have international experience, providing students with a global perspective.</li>
                            <ul>State-of-the-Art Infrastructure </ul>
                                <li>⁠Modern dental clinics : Our clinics are equipped with the latest dental equipment and technology, providing students with hands-on experience.</li>
                                <li>Spacious and well-equipped classrooms : Our classrooms are designed to facilitate interactive learning and feature state-of-the-art audio-visual equipment.</li>
                            <ul>Practical Training</ul>
                                <li>Extensive clinical exposure : Students gain hands-on experience in our dental clinics, working with patients under the supervision of experienced faculty.</li>
                                <li>Simulation-based training : We offer simulation-based training to help students develop their clinical skills in a controlled environment.</li>
                            <ul>Location and Accessibility</ul>
                                <li>Convenient location : Our campus is located in a convenient and accessible area, with ample parking and transportation options.</li>
                                <li>State-of-the-art facilities : Our campus features modern facilities, including a library, auditorium, and recreational spaces.</li>
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