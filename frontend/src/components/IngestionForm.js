import React, { useState } from 'react';

const IngestionForm = () => {
    const [source, setSource] = useState('ClickHouse');
    const [host, setHost] = useState('');
    const [port, setPort] = useState('');
    const [database, setDatabase] = useState('');
    const [user, setUser] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const [flatFile, setFlatFile] = useState(null);
    const [columns, setColumns] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [status, setStatus] = useState('');

    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };

    const handleFileChange = (event) => {
        setFlatFile(event.target.files[0]);
    };

    const handleColumnSelection = (column) => {
        setSelectedColumns(prevSelected => 
            prevSelected.includes(column) 
                ? prevSelected.filter(c => c !== column) 
                : [...prevSelected, column]
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('Ingesting...');

        // Logic for data ingestion goes here
        // This would typically involve making an API call to the backend

        // Simulate a successful ingestion process
        setTimeout(() => {
            setStatus('Ingestion completed successfully!');
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Data Ingestion Form</h2>
            <div>
                <label>
                    Source:
                    <select value={source} onChange={handleSourceChange}>
                        <option value="ClickHouse">ClickHouse</option>
                        <option value="Flat File">Flat File</option>
                    </select>
                </label>
            </div>
            {source === 'ClickHouse' && (
                <>
                    <div>
                        <label>
                            Host:
                            <input type="text" value={host} onChange={(e) => setHost(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Port:
                            <input type="text" value={port} onChange={(e) => setPort(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Database:
                            <input type="text" value={database} onChange={(e) => setDatabase(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            User:
                            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            JWT Token:
                            <input type="text" value={jwtToken} onChange={(e) => setJwtToken(e.target.value)} required />
                        </label>
                    </div>
                </>
            )}
            {source === 'Flat File' && (
                <div>
                    <label>
                        Upload Flat File:
                        <input type="file" onChange={handleFileChange} required />
                    </label>
                </div>
            )}
            <div>
                <label>
                    Select Columns:
                    <div>
                        {columns.map((column) => (
                            <div key={column}>
                                <input
                                    type="checkbox"
                                    checked={selectedColumns.includes(column)}
                                    onChange={() => handleColumnSelection(column)}
                                />
                                {column}
                            </div>
                        ))}
                    </div>
                </label>
            </div>
            <button type="submit">Start Ingestion</button>
            <div>{status}</div>
        </form>
    );
};

export default IngestionForm;