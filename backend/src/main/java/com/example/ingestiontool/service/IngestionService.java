package com.example.ingestiontool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ingestiontool.model.DataModel;

import java.util.List;

@Service
public class IngestionService {

    @Autowired
    private ClickHouseClient clickHouseClient; // Assume this is a client for ClickHouse

    @Autowired
    private FlatFileClient flatFileClient; // Assume this is a client for Flat File operations

    public int ingestFromClickHouseToFlatFile(String query, String flatFilePath) {
        List<DataModel> data = clickHouseClient.fetchData(query);
        return flatFileClient.writeDataToFile(data, flatFilePath);
    }

    public int ingestFromFlatFileToClickHouse(String flatFilePath, String tableName) {
        List<DataModel> data = flatFileClient.readDataFromFile(flatFilePath);
        return clickHouseClient.insertData(tableName, data);
    }

    // Additional methods for error handling, logging, etc. can be added here
}