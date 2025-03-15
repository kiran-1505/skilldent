import React from 'react';
import './PageTitle.scss';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const location = useLocation();
    const getTitle = () => {
        switch(location.pathname) {
            case '/academiccourse':
                return 'Our Courses';
            case '/about':
                return 'About Us';
            case '/contact':
                return 'Contact Us';
            case '/clinical':
                return 'Clinical';
            default:
                if (location.pathname.startsWith('/academiccourse/')) {
                    return 'Course Details';
                }
                return 'Welcome';
        }
    };

    return (
        <div className='page-title'>
            <div className="container">
                <h2>{getTitle()}</h2>
            </div>
        </div> 
    );
};

export default PageTitle;