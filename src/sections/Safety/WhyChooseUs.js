import React from 'react';
import './WhyChooseUs.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const WhyChooseUs = () => {
    return (
        <section className='whychooseus-section pt-100 section-bg section-common pb-70'>
            <div className="container">
                <SectionTitle 
                    title="Why Choose SkillDent Dental Academy?"
                />
                <div className='core'>
                    <div className="whychooseus-content">
                        <div className="whychooseus-category">
                            <h3 className="category-title">Comprehensive Education</h3>
                            <ul>
                                <li>Wide range of courses</li>
                                <li>Curriculum designed by experts</li>
                            </ul>
                        </div>

                        <div className="whychooseus-category">
                            <h3 className="category-title">Expert Faculty</h3>
                            <ul>
                                <li>Experienced and qualified faculty : Our faculty consists of seasoned dental professionals with a passion for teaching and mentoring.</li>
                                <li>Faculty with international exposure : Many of our faculty members have international experience, providing students with a global perspective.</li>
                            </ul>
                        </div>

                        <div className="whychooseus-category">
                            <h3 className="category-title">State-of-the-Art Infrastructure</h3>
                            <ul>
                                <li>Modern dental clinics : Our clinics are equipped with the latest dental equipment and technology, providing students with hands-on experience.</li>
                                <li>Spacious and well-equipped classrooms : Our classrooms are designed to facilitate interactive learning and feature state-of-the-art audio-visual equipment.</li>
                            </ul>
                        </div>

                        <div className="whychooseus-category">
                            <h3 className="category-title">Practical Training</h3>
                            <ul>
                                <li>Extensive clinical exposure : Students gain hands-on experience in our dental clinics, working with patients under the supervision of experienced faculty.</li>
                                <li>Simulation-based training : We offer simulation-based training to help students develop their clinical skills in a controlled environment.</li>
                            </ul>
                        </div>

                        <div className="whychooseus-category">
                            <h3 className="category-title">Location and Accessibility</h3>
                            <ul>
                                <li>Convenient location : Our campus is located in a convenient and accessible area, with ample parking and transportation options.</li>
                                <li>State-of-the-art facilities : Our campus features modern facilities, including a library, auditorium, and recreational spaces.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs; 