import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import WhyChooseUs from '../sections/Safety/WhyChooseUs';
import Team from '../sections/Team/Team';
import Footer from '../sections/Footer/Footer';
import Mission from '../sections/Mission/Mission';
import Blogs from '../sections/Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Mission />
            <WhyChooseUs />
            <Blogs />
            <Team />
            <Footer />
        </>
    );
};

export default Home;