import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import WhyChooseUs from '../sections/Safety/WhyChooseUs';
import Team from '../sections/Team/Team';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <WhyChooseUs />
            <Team />
            <Footer />
        </>
    );
};

export default About;