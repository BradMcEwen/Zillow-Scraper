import React from 'react';

function PropertyPictures({ image }) {
    return (
        <div>
            <h3>Property Pictures</h3>
            <img src={image || 'https://via.placeholder.com/400'} alt="Property" />
        </div>
    );
}

export default PropertyPictures;
