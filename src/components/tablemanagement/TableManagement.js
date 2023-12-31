import { Box, Button, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../table/Table";
import AddPopupForm from "../addpopupform/AddPopupForm";
import { TableTools } from "../tabletools/TableTools";
import { useState } from "react";

export const TableManagement = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const [rowToEdit, setRowToEdit] = useState({});
  const [rows, setRows] = useState(() => {
    const localData = localStorage.getItem("data-rows");
    return localData ? JSON.parse(localData) : [];
  });

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("Office");
  const [status, setStatus] = useState("Active");

  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("data-rows", JSON.stringify(rows));
  }, [rows]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "username",
      headerName: "User Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 200,
    },
    {
      field: "group",
      headerName: "Group",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "creationdate",
      headerName: "Created on",
      width: 150,
    },
  ];

  const [searchName, setSearchName] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchStatus, setSearchStatus] = useState([]);
  const [searchDate1, setSearchDate1] = useState('');
  const [searchDate2, setSearchDate2] = useState('');




  function filteredRows() {
    let newRows = [];
    if (searchStatus.length === 0 || searchStatus.includes("Any")) {
      newRows = rows;
    } else {
      rows.forEach(row => {
        searchStatus.forEach(status => {
          if (row.status.includes(status)) {
            newRows.push(row);
          }
        });
      });
    }

    if (searchDate1 !== '') {
      newRows = newRows.filter((row) => {
        return new Date(row.creationdate).getTime() >= new Date(searchDate1.toISOString().split('T')[0]).getTime();
      })
    }
    if (searchDate2 !== '') {
      newRows = newRows.filter((row) => {
        return new Date(row.creationdate).getTime() <= new Date(searchDate2.toISOString().split('T')[0]).getTime();
      })
    }

    return newRows.filter((row) => {
      return row.name.toLowerCase().includes(searchName.toLowerCase()) && row.username.toLowerCase().includes(searchUsername.toLowerCase());
    });
  }

  return (
    <Box p={2}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} mb={2}>
        <Typography fontWeight="bold" fontSize="24px">User Management</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setName("");
            setUsername("");
            setEmail("");
            setGroup("");
            setStatus("");
            setEnableEdit(false);
            setIsAddPopupOpen(true);
          }}
          color="success"
          sx={{
            backgroundColor: "#22a565",
            textTransform:"capitalize"
          }}
        >
          + Add New
        </Button>

        {isAddPopupOpen && (
          <AddPopupForm
            isAddPopupOpen={isAddPopupOpen}
            setIsAddPopupOpen={setIsAddPopupOpen}
            setRows={setRows}
            rows={rows}
            enableEdit={enableEdit}
            rowToEdit={rowToEdit}
            name={name}
            setName={setName}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            group={group}
            setGroup={setGroup}
            status={status}
            setStatus={setStatus}
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
          setSearchDate1={setSearchDate1}
          setSearchDate2={setSearchDate2}
          selectedCount={selectedCount}
        />
        <Table
          rowsGiven={filteredRows()}
          columnsGiven={columns}
          setEnableEdit={setEnableEdit}
          setIsAddPopupOpen={setIsAddPopupOpen}
          setRowToEdit={setRowToEdit}
          setName={setName}
          setUsername={setUsername}
          setEmail={setEmail}
          setGroup={setGroup}
          setStatus={setStatus}
          setSelectedCount={setSelectedCount}
        />
      </Paper>
    </Box>
  );
};

export default TableManagement;
