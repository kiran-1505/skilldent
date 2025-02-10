import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                title="Mission"
                                description="SkillDent Dental Academy, our mission is to provide high-quality dental education, foster a culture of excellence, and promote lifelong learning. We aim to:"
                            />
                            <div >
                                <ul>
                                    <li>⁠Deliver comprehensive and innovative dental education that prepares students for successful careers in dentistry.</li>
                                    <li>Foster a culture of excellence by promoting creativity, and professionalism among students and faculty.</li>
                                    <li>Develop strong partnerships with dental professionals, organizations, and industries to stay at the forefront of dental education and practice.</li>
                                    <li>Empower students to become leaders in the dental profession, equipped with the skills, knowledge, and values necessary to make a positive impact on society.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;