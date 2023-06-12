import React from 'react'
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


export const Table = ({rowsGiven, columnsGiven}) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsGiven}
        columns={columnsGiven}
        onRowSelectionModelChange={(ids) => {
          // console.log(ids);

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