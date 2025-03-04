import React, { useState } from 'react';
import Section1 from './components/Section1';
import LoadingScreen from './components/LoadingScreen';
import PropertyDetails from './components/PropertyDetails';
import PropertyPictures from './components/PropertyPictures';
import ExitStrategySelector from './components/ExitStrategySelector';
import './styles.css';

function App() {
    const [step, setStep] = useState(1); 
    const [propertyData, setPropertyData] = useState({});

    const handleSearch = (formData) => {
        setPropertyData(formData);
        setStep(2); 
        setTimeout(() => setStep(3), 4000); 
    };

    return (
        <div className="app">
            {step === 1 && <Section1 onSearch={handleSearch} />}
            {step === 2 && <LoadingScreen />}
            {step === 3 && (
                <div className="results-container">
                    <PropertyDetails data={propertyData} />
                    <PropertyPictures image={propertyData.image} />
                    <ExitStrategySelector />
                </div>
            )}
        </div>
    );
}

export default App;
