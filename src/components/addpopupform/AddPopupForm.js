import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

export const AddPopupForm = ({ isAddPopupOpen, setIsAddPopupOpen, rows, setRows }) => {
  // const row = {};

  const submitForm = (e) => {
    e.preventDefault();
    setIsAddPopupOpen(false);
    console.log(e);
    let row = {
      id: 50,
      name: e.target[0].value,
      username: e.target[2].value,
      email: e.target[4].value,
      group: e.target[6].value,
      status: e.target[8].value,
      creationdate: "placeholder"
    }
    setRows([...rows, row]);
  };

  return (
    <Box position="absolute">
      <Dialog
        open={isAddPopupOpen}
        onClose={() => setIsAddPopupOpen(false)}
      >
        <DialogTitle>Add New User</DialogTitle>
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
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              id="username"
              label="Enter username"
              type="username"
              fullWidth
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              id="email"
              label="Enter email"
              type="email"
              fullWidth
              variant="outlined"
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
                value={"Office"}
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
                value={"Active"}
                label="Profile"
                // onChange={handleChange}
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
