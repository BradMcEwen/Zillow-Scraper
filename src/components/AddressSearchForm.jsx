import React, { useState } from 'react';

function AddressSearchForm({ onSubmit }) {
    const [form, setForm] = useState({ address: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSearch = async () => {
        setLoading(true);
        try {
            // In real use case, replace with actual Zillow API endpoint
            const response = await fetch(`/api/zillow?address=${encodeURIComponent(form.address)}`);
            if (!response.ok) throw new Error('Failed to fetch data');

            const zillowData = await response.json();

            const propertyData = {
                address: form.address,
                beds: zillowData.bedrooms,
                baths: zillowData.bathrooms,
                sqFt: zillowData.livingArea,
                price: zillowData.price,
                zestimate: zillowData.zestimate,
                image: zillowData.image,
            };

            onSubmit(propertyData);
        } catch (error) {
            console.error('Zillow API Error:', error);
            alert('Failed to fetch property data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input 
                name="address" 
                placeholder="Property Address" 
                value={form.address} 
                onChange={handleChange} 
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Fetching Data...' : 'Start Analysis'}
            </button>
        </div>
    );
}

export default AddressSearchForm;
