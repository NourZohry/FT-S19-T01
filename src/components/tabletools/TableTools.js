import React from "react";
import { Box, Button, Typography, Paper, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export const TableTools = ({ setSearchName, searchName, setSearchUsername, searchUsername, setSearchStatus, searchStatus }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <TextField
          id="outlined-basic"
          label="Search..."
          type="search"
          variant="outlined"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
        />
      </Box>
      <Box>
        <FormControl>
          <InputLabel id="demo-simple-select-label">User Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="User Status"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
          >
            <MenuItem value={"Any"}>Any</MenuItem>
            <MenuItem value={"Locked"}>Locked</MenuItem>
            <MenuItem value={"Inactive"}>Inactive</MenuItem>
            <MenuItem value={"Active"}>Active</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>Date Placeholder</Box>
    </Box>
  );
};
