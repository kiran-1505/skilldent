import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({blog}) => {
    const {title, img, description, category,url} = blog;

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="academic-card">
                <div className="academic-img">
                    <img src={img} alt="academic"/>
                </div>
                <div className="academic-text">
                    <span><Link to="/">{category}</Link></span>
                    <h3><Link to={`/academic/${url}`}>{title}</Link></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;