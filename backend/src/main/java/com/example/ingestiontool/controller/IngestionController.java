package com.example.ingestiontool.controller;

import com.example.ingestiontool.service.IngestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ingestion")
public class IngestionController {

    private final IngestionService ingestionService;

    @Autowired
    public IngestionController(IngestionService ingestionService) {
        this.ingestionService = ingestionService;
    }

    @PostMapping("/start")
    public ResponseEntity<String> startIngestion(@RequestBody IngestionRequest request) {
        // Logic to initiate data ingestion
        ingestionService.processIngestion(request);
        return ResponseEntity.ok("Ingestion started successfully.");
    }

    @GetMapping("/status")
    public ResponseEntity<String> getStatus() {
        // Logic to get the current status of ingestion
        String status = ingestionService.getIngestionStatus();
        return ResponseEntity.ok(status);
    }
    
    // Define IngestionRequest class as a static inner class or separate class as needed
    public static class IngestionRequest {
        private String sourceType;
        private String[] selectedColumns;

        // Getters and Setters
        public String getSourceType() {
            return sourceType;
        }

        public void setSourceType(String sourceType) {
            this.sourceType = sourceType;
        }

        public String[] getSelectedColumns() {
            return selectedColumns;
        }

        public void setSelectedColumns(String[] selectedColumns) {
            this.selectedColumns = selectedColumns;
        }
    }
}