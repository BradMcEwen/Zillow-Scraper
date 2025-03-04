import React, { useState, useEffect } from 'react';
import { loadingPhrases } from '../utils/LoadingPhrases';

function LoadingScreen() {
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <div className="loading">{loadingPhrases[phraseIndex]}</div>;
}

export default LoadingScreen;
