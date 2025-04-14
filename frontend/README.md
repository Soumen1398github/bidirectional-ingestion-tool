# Bidirectional ClickHouse & Flat File Data Ingestion Tool

## Frontend Application

This directory contains the frontend application for the Bidirectional ClickHouse & Flat File Data Ingestion Tool, built using React.

### Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd bidirectional-ingestion-tool/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

### Folder Structure

- **public/**: Contains the static files, including the main HTML file.
- **src/**: Contains the React components and application logic.
  - **components/**: Reusable components for the application.
  - **styles/**: CSS styles for the application.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.

### Components

- **ColumnSelector.js**: Allows users to select columns for data ingestion.
- **DataPreview.js**: Displays a preview of the data before ingestion.
- **IngestionForm.js**: Contains the form for initiating data ingestion.
- **StatusDisplay.js**: Shows the current status of the ingestion process.

### Additional Information

For more details on the backend application, refer to the backend directory's README.md file. 

### License

This project is licensed under the MIT License. See the LICENSE file for more information.