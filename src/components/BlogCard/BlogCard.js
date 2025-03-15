import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({blog}) => {
    const {title, img, description, category} = blog;

    return (
        <div className='col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch'>
            <div className="blog-card w-100">
                <div className="blog-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="blog-text">
                    <span><Link to="/academiccourse">{category}</Link></span>
                    <h3><Link to="/contact">{title}</Link></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard; 