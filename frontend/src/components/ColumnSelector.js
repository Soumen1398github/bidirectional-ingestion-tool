import React from 'react';

const ColumnSelector = ({ columns, selectedColumns, onColumnChange }) => {
    const handleChange = (column) => {
        if (selectedColumns.includes(column)) {
            onColumnChange(selectedColumns.filter((c) => c !== column));
        } else {
            onColumnChange([...selectedColumns, column]);
        }
    };

    return (
        <div>
            <h3>Select Columns for Ingestion</h3>
            <ul>
                {columns.map((column) => (
                    <li key={column}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes(column)}
                                onChange={() => handleChange(column)}
                            />
                            {column}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColumnSelector;