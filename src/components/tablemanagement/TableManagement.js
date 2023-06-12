import { Box, Button, Typography, Paper, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../table/Table";
import AddPopupForm from "../addpopupform/AddPopupForm";
import { TableTools } from "../tabletools/TableTools";
import { useState } from "react";

export const TableManagement = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [rows, setRows] = useState(() => {
    const localData = localStorage.getItem("data-rows");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data-rows", JSON.stringify(rows));
  }, [rows]);

  const columns = [
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
  ];

  const [searchName, setSearchName] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchStatus, setSearchStatus] = useState("Any");

  function filteredRows() {
    let checkStatus = true;
    let newRows;
    if (searchStatus == "Any") {
      checkStatus = false;
      newRows = rows;
    } else {
      newRows = rows.filter((row) => {
        return row.status === searchStatus;
      });
    }
    return newRows.filter((row) => {
      return row.name.toLowerCase().includes(searchName.toLowerCase()) && row.username.toLowerCase().includes(searchUsername.toLowerCase());
    });
  }

  return (
    <Box p={2}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography>User Management</Typography>
        <Button
          variant="contained"
          onClick={() => setIsAddPopupOpen(true)}
        >
          + Add New
        </Button>
        {isAddPopupOpen && (
          <AddPopupForm
            isAddPopupOpen={isAddPopupOpen}
            setIsAddPopupOpen={setIsAddPopupOpen}
            setRows={setRows}
            rows={rows}
          />
        )}
      </Box>

      <Paper>
        <TableTools
          setSearchName={setSearchName}
          searchName={searchName}
          setSearchUsername={setSearchUsername}
          searchUsername={searchUsername}
          setSearchStatus={setSearchStatus}
          searchStatus={searchStatus}
        />
        <Table
          rowsGiven={filteredRows()}
          columnsGiven={columns}
        />
      </Paper>
    </Box>
  );
};

export default TableManagement;
