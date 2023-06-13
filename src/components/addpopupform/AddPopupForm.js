import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";


export const AddPopupForm = ({ isAddPopupOpen, setIsAddPopupOpen, rows, setRows, enableEdit, rowToEdit, name, setName, username, setUsername, email, setEmail, group, setGroup, status, setStatus}) => {
  // const row = {};

  const submitForm = (e) => {
    console.log(name);
    e.preventDefault();
    setIsAddPopupOpen(false);
    console.log(e);
    let row;
    if (enableEdit === true) {
      var rowIndex = rows.findIndex(row => row.id == rowToEdit.id);
      let newRows = [...rows];
      newRows[rowIndex].name = name;
      newRows[rowIndex].username = username;
      newRows[rowIndex].email = email;
      newRows[rowIndex].group = group;
      newRows[rowIndex].status = status;
      setRows(newRows);
    }
    else {
      console.log(row);
      row = {
        id: Math.max.apply(Math, rows.map(function(row) { return row.id; })) + 1, // Sets ID as largest ID + 1 which doesn't work if there's deleting but it's fine for now
        name: name,
        username: username,
        email: email,
        group: group,
        status: status,
        creationdate: new Date().toISOString().split('T')[0]
      }
      console.log(row);
      console.log([...rows,row]);
      setRows([...rows, row]);
    }
  };

  return (
    <Box position="absolute">
      <Dialog
        open={isAddPopupOpen}
        onClose={() => setIsAddPopupOpen(false)}
      >
        <DialogTitle>{enableEdit === true ? "Edit User" : "Add New User"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <form
            id="addForm"
            onSubmit={submitForm}
          >
            <TextField
              required
              margin="dense"
              id="fullname"
              label="Enter full name"
              type="text"
              fullWidth
              // value={(enableEdit == true && rowToEdit != {} && rowToEdit != "") ? rowToEdit.name : ""}
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              id="username"
              label="Enter username"
              type="username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
                            variant="outlined"
            />
            <TextField
              required
              margin="dense"
              id="email"
              label="Enter email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}              variant="outlined"
            />
            <FormControl
              margin="dense"
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">User Group</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                label="User Group"
                // onChange={handleChange}
              >
                <MenuItem value={"Office"}>Office</MenuItem>
                <MenuItem value={"Managers"}>Managers</MenuItem>
                <MenuItem value={"Head Office"}>Head Office</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              margin="dense"
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Profile</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Profile"
                // onChange={handleChange}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
                <MenuItem value={"Locked"}>Locked</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setIsAddPopupOpen(false)}
          >
            Cancel
          </Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
          <Button
            form="addForm"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddPopupForm;
