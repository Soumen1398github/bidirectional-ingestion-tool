import React from 'react';

const StatusDisplay = ({ status, recordCount, errorMessage }) => {
    return (
        <div className="status-display">
            <h2>Status: {status}</h2>
            {status === 'Completed' && <p>Total Records Processed: {recordCount}</p>}
            {status === 'Error' && <p>Error: {errorMessage}</p>}
        </div>
    );
};

export default StatusDisplay;