import { Box, Button, Typography, Paper, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React from "react";
import Table from "../table/Table";
import { TableTools } from "../tabletools/TableTools";
import { useState } from "react";

export const TableManagement = () => {
  const [rows, setRows] = useState([]);
  const [userStatus, setUserStatus] = useState("Any");

  return (
    <Box p={2}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography>User Management</Typography>
        <Button variant="contained">+ Add New</Button>
      </Box>

      <Paper>
        <TableTools userStatus={userStatus} setUserStatus={setUserStatus}/>
        <Table />
      </Paper>
    </Box>
  );
};

export default TableManagement;
