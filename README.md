# Bidirectional ClickHouse & Flat File Data Ingestion Tool

## Overview
This project is a web-based application designed to facilitate data ingestion between a ClickHouse database and flat files. It supports bidirectional data flow, allowing users to transfer data from ClickHouse to flat files and vice versa.

## Features
- **Bidirectional Data Flow**: Transfer data between ClickHouse and flat files.
- **User Authentication**: JWT token-based authentication for ClickHouse as a source.
- **Column Selection**: Users can select specific columns for ingestion.
- **Completion Reporting**: Displays the total number of records processed upon completion.
- **Error Handling**: Basic error handling with user-friendly messages.

## Project Structure
```
bidirectional-ingestion-tool
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── ingestiontool
│   │   │   │               ├── IngestionToolApplication.java
│   │   │   │               ├── controller
│   │   │   │               │   └── IngestionController.java
│   │   │   │               ├── service
│   │   │   │               │   └── IngestionService.java
│   │   │   │               └── model
│   │   │   │                   └── DataModel.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── schema.sql
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── ingestiontool
│   │                       └── IngestionToolApplicationTests.java
│   ├── pom.xml
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── ColumnSelector.js
│   │   │   ├── DataPreview.js
│   │   │   ├── IngestionForm.js
│   │   │   └── StatusDisplay.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Backend Setup
1. Navigate to the `backend` directory.
2. Ensure you have Java and Maven installed.
3. Run the following command to build the backend:
   ```
   mvn clean install
   ```
4. Start the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Ensure you have Node.js and npm installed.
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the React application:
   ```
   npm start
   ```

## Testing
- The backend includes unit tests located in the `src/test/java/com/example/ingestiontool` directory. Run the tests using Maven:
  ```
  mvn test
  ```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.