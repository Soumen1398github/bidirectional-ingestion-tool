# Bidirectional ClickHouse & Flat File Data Ingestion Tool - Backend

## Overview
This project is a web-based application designed to facilitate data ingestion between a ClickHouse database and flat files. It supports bidirectional data flow, allowing users to transfer data from ClickHouse to flat files and vice versa.

## Features
- **Bidirectional Data Flow**: Transfer data between ClickHouse and flat files.
- **JWT Token Authentication**: Secure access to ClickHouse data.
- **Column Selection**: Users can select specific columns for ingestion.
- **Completion Reporting**: Displays the total number of records processed.
- **Error Handling**: User-friendly error messages for connection and ingestion issues.

## Project Structure
- **src/main/java/com/example/ingestiontool**: Contains the main application code.
  - `IngestionToolApplication.java`: Entry point of the Spring Boot application.
  - `controller/IngestionController.java`: Handles HTTP requests for data ingestion.
  - `service/IngestionService.java`: Contains business logic for data processing.
  - `model/DataModel.java`: Represents the data structure used in the application.
- **src/main/resources**: Contains configuration and schema files.
  - `application.properties`: Configuration properties for the application.
  - `schema.sql`: SQL statements for initializing the database schema.
- **src/test/java/com/example/ingestiontool**: Contains test cases for the application.
  - `IngestionToolApplicationTests.java`: Unit tests for the application components.
- **pom.xml**: Maven configuration file for managing dependencies and build settings.

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd bidirectional-ingestion-tool/backend
   ```

2. **Build the Project**: 
   ```
   mvn clean install
   ```

3. **Run the Application**: 
   ```
   mvn spring-boot:run
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:8080`.

## Usage
- Use the provided endpoints in `IngestionController` to initiate data transfers.
- Ensure that the ClickHouse database is accessible and the JWT token is valid for authentication.

## Testing
- Unit tests can be run using:
   ```
   mvn test
   ```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.