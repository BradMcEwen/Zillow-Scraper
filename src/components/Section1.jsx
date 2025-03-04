import React, { useState } from 'react';
import ManualSearchForm from './ManualSearchForm';
import AddressSearchForm from './AddressSearchForm';

function Section1({ onSearch }) {
    const [mode, setMode] = useState(null);

    return (
        <div>
            <h2>Find Deals or Analyze Property</h2>
            <button onClick={() => setMode('manual')}>Find Deals (Manual)</button>
            <button onClick={() => setMode('address')}>Analyze Property (Zillow/Address)</button>

            {mode === 'manual' && <ManualSearchForm onSubmit={onSearch} />}
            {mode === 'address' && <AddressSearchForm onSubmit={onSearch} />}
        </div>
    );
}

export default Section1;
