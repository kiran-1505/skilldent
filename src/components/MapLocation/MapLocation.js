import React from 'react';
import './MapLocation.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapLocation = () => {
    return (
        <div className="map-location">
            <div className="container">
                <a href="#" className="location-link">
                    <FaMapMarkerAlt className="map-icon" />
                    <span>Click here for location</span>
                </a>
            </div>
        </div>
    );
};

export default MapLocation; 