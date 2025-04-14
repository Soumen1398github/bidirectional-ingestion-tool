import React from 'react';
import IngestionForm from './components/IngestionForm';
import ColumnSelector from './components/ColumnSelector';
import DataPreview from './components/DataPreview';
import StatusDisplay from './components/StatusDisplay';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>Bidirectional Data Ingestion Tool</h1>
            <IngestionForm />
            <ColumnSelector />
            <DataPreview />
            <StatusDisplay />
        </div>
    );
}

export default App;