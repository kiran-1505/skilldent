import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import Footer from '../../sections/Footer/Footer';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                />
                <div className="contact-info">
                    <h4>Mobile: +91 7676148699</h4>
                    <h4>Location: 2nd Floor, Malkala Samudhya Bhavana, Jayanagar 4th T Block, Bangalore.</h4>
                    <h4>Working Days : Monday - Sunday</h4>
                    <h4>Time : 9 am - 6 pm</h4>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default Contactus;