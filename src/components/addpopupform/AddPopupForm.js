import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export const AddPopupForm = ({ isAddPopupOpen, setIsAddPopupOpen, rows, setRows, enableEdit, rowToEdit, name, setName, username, setUsername, email, setEmail, group, setGroup, status, setStatus}) => {
  // const row = {};

  const submitForm = (e) => {
    console.log(name);
    e.preventDefault();
    setIsAddPopupOpen(false);
    console.log(e);
    let row;
    if (enableEdit === true) {
      var rowIndex = rows.findIndex(row => row.id === rowToEdit.id);
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
        id: (Math.max.apply(Math, rows.map(function(row) { return row.id; })) + 1 > 0 ? Math.max.apply(Math, rows.map(function(row) { return row.id; })) + 1 : 1), // Sets ID as largest ID + 1 which doesn't work if there's deleting but it's fine for now
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
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{backgroundColor:"#050e2d", color:"#fff"}}>
        <Box sx={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
          <Typography sx={{fontSize:"20px", fontWeight:"bold"}}>{enableEdit === true ? "Edit User" : "Add New User"}</Typography>
        
        
        <IconButton
          aria-label="close"
          onClick={() => setIsAddPopupOpen(false)}
          sx={{
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
        </Box>
        
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <form
            id="addForm"
            onSubmit={submitForm}
          >
            <Typography sx={{fontWeight:"bold"}} mt={2}>Full Name</Typography>
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
              size="small"
            />
            <Typography sx={{fontWeight:"bold"}} mt={2}>User Name</Typography>

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
                            size="small"
            />
            <Typography sx={{fontWeight:"bold"}} mt={2}>Email Address</Typography>

            <TextField
              required
              margin="dense"
              id="email"
              label="Enter email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}              variant="outlined"
              size="small"
            />

<Typography sx={{fontWeight:"bold"}} mt={2}>User Group</Typography>

            <FormControl
              margin="dense"
              fullWidth
            >
              <InputLabel size="small" id="demo-simple-select-label">User Group</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                label="User Group"
                
                // onChange={handleChange}
              size="small"
              >
                <MenuItem value={"Office"}>Office</MenuItem>
                <MenuItem value={"Managers"}>Managers</MenuItem>
                <MenuItem value={"Head Office"}>Head Office</MenuItem>
              </Select>
            </FormControl>

            <Typography sx={{fontWeight:"bold"}} mt={2}>Assign Profile</Typography>

            <FormControl
              margin="dense"
              fullWidth
            >
              <InputLabel size="small" id="demo-simple-select-label">Profile</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Profile"
                // onChange={handleChange}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                size="small"
              >
                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
                <MenuItem value={"Locked"}>Locked</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <Divider>

        </Divider>
        <DialogActions>
          <Box pl={2} pr={2} pt={1} pb={1} sx={{display: 'flex', gap: "10px"}}>
          <Button
            variant="outline"
            onClick={() => setIsAddPopupOpen(false)}
            sx={{
              textTransform:"capitalize",
              fontWeight: "bold",

              border: "1px solid #8a95ab"
            }}
          >
            Cancel
          </Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
          <Button
            form="addForm"
            variant="contained"
            type="submit"
            color="success"
            sx={{
              backgroundColor: "#22a565",
              textTransform:"capitalize"
            }}
          >
            Add
          </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddPopupForm;
