import React from 'react';

function ExitStrategySelector() {
    return (
        <div>
            <h3>Exit Strategies</h3>
            <button style={{ background: 'red' }}>Worst Case</button>
            <button style={{ background: 'yellow' }}>OK Case</button>
            <button style={{ background: 'green' }}>Best Case</button>
            <button style={{ background: 'blue' }}>Wholesale Price</button>
        </div>
    );
}

export default ExitStrategySelector;
