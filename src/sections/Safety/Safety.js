import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70'>
            <div className="container">
                <SectionTitle 
                    title="Core Values"
                />
            </div>
            <div className='core'>
                <ul>
                    <li>Excellence : We strive for excellence in all aspects of dental education and practice.</li>
                    <li>Innovation : We encourage creativity, critical thinking, and innovation in dental education and research.</li>
                    <li>⁠Compassion : We foster a culture of compassion, empathy, and respect for patients, students, and colleagues.</li>
                    <li>⁠Integrity : We uphold the highest standards of integrity, ethics, and professionalism in all our endeavors.</li>
                    <li>⁠Collaboration : We promote collaboration and teamwork among students, faculty, and dental professionals to achieve common goals.</li>
                </ul>
                </div>
        </section>
    );
};

export default Safety;