import React from 'react';
import './Mission.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Mission = () => {
    const coreValues = [
        {
            title: "Excellence",
            description: "We strive for excellence in all aspects of dental education and practice.",
            icon: "🌟"
        },
        {
            title: "Innovation",
            description: "We encourage creativity, critical thinking, and innovation in dental education and research.",
            icon: "💡"
        },
        {
            title: "Compassion",
            description: "We foster a culture of compassion, empathy, and respect for patients, students, and colleagues.",
            icon: "💖"
        },
        {
            title: "Integrity",
            description: "We uphold the highest standards of integrity, ethics, and professionalism in all our endeavors.",
            icon: "⚖️"
        },
        {
            title: "Collaboration",
            description: "We promote collaboration and teamwork among students, faculty, and dental professionals to achieve common goals.",
            icon: "👥"
        }
    ];

    return (
        <section className='mission-section'>
            <div className="container">
                <SectionTitle 
                    title="Our Mission & Values"
                    subTitle="What Drives Us"
                />
                
                <div className="mission-content">
                    <div className="mission-statement">
                        <div className="statement-card">
                            <h3>Our Mission</h3>
                            <p>
                                To provide high-quality dental education, foster a culture of excellence, 
                                and promote lifelong learning. We aim to shape the future of dentistry 
                                by empowering students with comprehensive knowledge and practical skills.
                            </p>
                        </div>
                    </div>

                    <div className="core-values">
                        <h3>Core Values</h3>
                        <div className="values-grid">
                            {coreValues.map((value, index) => (
                                <div className="value-card" key={index}>
                                    <div className="value-icon">{value.icon}</div>
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission; 