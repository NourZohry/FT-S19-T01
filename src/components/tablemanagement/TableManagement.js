import { Box, Button, Typography, Paper, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React, { Component } from "react";
import Table from "../table/Table";

export default class TableManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userstatus: "Any",

      rows: []
    };
  }

  handleChangeStatus(e) {
    e.preventDefault();
    this.setState({ userstatus: e.target.value });
    console.log(e.target.value);
  }
  
  render() {
    return (
      <Box p={2}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>User Management</Typography>
          <Button variant="contained">+ Add New</Button>
        </Box>

        <Paper fullWidth>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Search..."
                type="search"
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
              />
            </Box>
            <Box>
              <FormControl>
                <InputLabel id="demo-simple-select-label">User Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.userstatus}
                  label="User Status"
                  onChange={(e) => this.handleChangeStatus(e)}
                >
                  <MenuItem value={"Any"}>Any</MenuItem>
                  <MenuItem value={"Locked"}>Locked</MenuItem>
                  <MenuItem value={"Inactive"}>Inactive</MenuItem>
                  <MenuItem value={"Active"}>Active</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
                Date Placeholder
            </Box>
          </Box>

          <Table />
        </Paper>
      </Box>
    );
  }
}
