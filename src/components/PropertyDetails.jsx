import React, { useState } from 'react';

function PropertyDetails({ data }) {
    const [editableData, setEditableData] = useState(data);

    const handleChange = (e) => {
        setEditableData({ ...editableData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3>Property Details</h3>
            <div>
                Address: <strong>{editableData.address}</strong>
            </div>
            <input name="beds" value={editableData.beds || ''} onChange={handleChange} placeholder="Beds" />
            <input name="baths" value={editableData.baths || ''} onChange={handleChange} placeholder="Baths" />
            <input name="sqFt" value={editableData.sqFt || ''} onChange={handleChange} placeholder="Square Feet" />
            <input name="price" value={editableData.price || ''} onChange={handleChange} placeholder="Price" />
            <input name="zestimate" value={editableData.zestimate || ''} onChange={handleChange} placeholder="Zestimate" />
        </div>
    );
}

export default PropertyDetails;
