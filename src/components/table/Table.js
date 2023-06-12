import React, { Component } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";



export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { id: 1, name: "Ramy Mohsen", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 2, name: "Ramy Mohsen2", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 3, name: "Ramy Mohsen3", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 4, name: "Ramy Mohsen4", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 5, name: "Ramy Mohsen5", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 6, name: "Ramy Mohsen6", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
        { id: 7, name: "Ramy Mohsen7", username: 'ramy.mohsen', email: 'ramy.mohsen@gogle.com', group: "Office", status: "Locked", creationdate: "Dec 10, 2020" },
      ],
      columns: [
        {
            field: "id",
            headerName: "ID",
            width: 150,
            editable: true,
        },
        {
          field: "name",
          headerName: "Name",
          width: 150,
          editable: true,
        },
        {
          field: "username",
          headerName: "User Name",
          width: 150,
          editable: true,
        },
        {
          field: "email",
          headerName: "Email Address",
          width: 200,
          editable: true,
        },
        {
          field: "group",
          headerName: "Group",
          width: 100,
          editable: true,
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
          editable: true,
        },
        {
          field: "creationdate",
          headerName: "Created on",
          width: 150,
          editable: true,
        },
      ],
    };
  }

  render() {
    return (
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.state.rows}
          columns={this.state.columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          columnVisibilityModel={{
            // Hide columns status and traderName, the other columns will remain visible
            id: false,
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  }
}
