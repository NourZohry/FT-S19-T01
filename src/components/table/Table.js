import React from 'react'
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const Table = ({rowsGiven, columnsGiven, setEnableEdit, setIsAddPopupOpen, setRowToEdit, setName, setUsername, setEmail, setGroup, setStatus, setSelectedCount}) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid 
      sx={{
        '.MuiDataGrid-checkboxInput': {
          color: "green!important"
        }
      }}
      onRowClick={(row) => {
        setEnableEdit(true);
        setIsAddPopupOpen(true);
        setRowToEdit(row.row);
        setName(row.row.name);
        setUsername(row.row.username);
        setEmail(row.row.email);
        setGroup(row.row.group);
        setStatus(row.row.status);
      }}
        rows={rowsGiven}
        columns={columnsGiven}
        onRowSelectionModelChange={(ids) => {
          setSelectedCount(ids.length);
        }}
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
  )
}

export default Table