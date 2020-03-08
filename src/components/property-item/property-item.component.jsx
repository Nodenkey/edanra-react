import React from 'react';
import {Link} from "react-router-dom";
import './property-item.styles.scss';

const PropertyItem = ({main_image_url, town, region, username, price, negotiation_status, property_type}) => {

    return (
        <>
            <div className="slide-item">
                <div className="item-image">
                    <img className="img-fluid" src={main_image_url}
                         alt="house"/>
                </div>
                <div className="item-content">
                    <div className="item-location">{town} &#9679; {region}</div>
                    <div className="item-name">{property_type} hosted by {username}</div>
                    <div className="item-price">Ghc {price} &#9679; <span
                        className="negotiation-status">{negotiation_status}</span>
                    </div>
                    <Link className="workspace-link" to="/view-space">View Efie</Link>
                </div>
            </div>
        </>
    );
};

export default PropertyItem;
