import React, { useState } from 'react';

function ManualSearchForm({ onSubmit }) {
    const [form, setForm] = useState({ beds: '', baths: '', sqFt: '', zip: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div>
            <input name="beds" placeholder="Beds" onChange={handleChange} />
            <input name="baths" placeholder="Baths" onChange={handleChange} />
            <input name="sqFt" placeholder="Sq Ft" onChange={handleChange} />
            <input name="zip" placeholder="Zip" onChange={handleChange} />
            <button onClick={() => onSubmit(form)}>Start Search</button>
        </div>
    );
}

export default ManualSearchForm;
