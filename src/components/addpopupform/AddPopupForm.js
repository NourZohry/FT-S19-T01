/* eslint-disable no-useless-escape */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

import './AddPopupForm.css'

export const AddPopupForm = ({ isAddPopupOpen, setIsAddPopupOpen, rows, setRows, enableEdit, rowToEdit, name, setName, username, setUsername, email, setEmail, group, setGroup, status, setStatus }) => {
  // const row = {};

  const form = useForm({
    defaultValues: {
      fullname: enableEdit ? name : "",
      username: enableEdit ? username : "",
      email: enableEdit ? email : "",
      group: enableEdit ? group : "",
      status: enableEdit ? status : ""
    }
  });
  // const { register, control, handleSubmit, formState } = form;
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    // console.log('submitted.', data);
    submitForm();
  }

  const deleteRow = (rowToDelete) => {
    setIsAddPopupOpen(false);
    setRows(rows.filter((row) => {
      return row.id !== rowToDelete.id
    }));
  }

  const submitForm = () => {
    // e.preventDefault();
    setIsAddPopupOpen(false);
    let row;
    if (enableEdit === true) {
      var rowIndex = rows.findIndex((row) => row.id === rowToEdit.id);
      let newRows = [...rows];
      newRows[rowIndex].name = name;
      newRows[rowIndex].username = username;
      newRows[rowIndex].email = email;
      newRows[rowIndex].group = group;
      newRows[rowIndex].status = status;
      setRows(newRows);
    } else {
      row = {
        id:
          Math.max.apply(
            Math,
            rows.map(function (row) {
              return row.id;
            })
          ) +
            1 >
          0
            ? Math.max.apply(
                Math,
                rows.map(function (row) {
                  return row.id;
                })
              ) + 1
            : 1, // Sets ID as largest ID + 1 which doesn't work if there's deleting but it's fine for now
        name: name,
        username: username,
        email: email,
        group: group,
        status: status,
        creationdate: new Date().toISOString().split("T")[0],
      };
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
        <DialogTitle sx={{ backgroundColor: "#050e2d", color: "#fff" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{enableEdit === true ? "Edit User" : "Add New User"}</Typography>

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
          <form onSubmit={handleSubmit(onSubmit)} id="addForm" noValidate className="popup-form">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" {...register("fullname", {
              required: 'Full name is required',
              onChange: (e) => {setName(e.target.value)}
            })} />
            <p className="form-error-msg">{errors.fullname?.message}</p>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", {
              required: 'Username is required',
              onChange: (e) => {setUsername(e.target.value)}
            })} />
            <p className="form-error-msg">{errors.username?.message}</p>


            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", {
              required: 'Email is required',
              onChange: (e) => {setEmail(e.target.value)},
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,  
                message: "Invalid email"
              }
            })} />
            <p className="form-error-msg">{errors.email?.message}</p>

            <label htmlFor="group">Group</label>
            <select name="group" id="group" {...register("group", {
              required: 'Group is required',
              onChange: (e) => {setGroup(e.target.value)},
              validate: {
                notSelected: (fieldValue) => {
                  return (
                    fieldValue !== "Select..." || "Select a group"
                  )
                }
              }
            })}
            >
              <option value="Select..." selected disabled>Select...</option>
              <option value="Office">Office</option>
              <option value="Managers">Managers</option>
              <option value="Head Office">Head Office</option>
            </select>
            <p className="form-error-msg">{errors.group?.message}</p>

            <label htmlFor="status">Status</label>
            <select name="status" id="status"  {...register("status", {
              required: 'Status is required',
              onChange: (e) => {setStatus(e.target.value)},
              validate: {
                notSelected: (fieldValue) => {
                  return (
                    fieldValue !== "Select..." || "Select a status"
                  )
                }
              }
            })}
            >
              <option value="Select..." selected disabled>Select...</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Locked">Locked</option>
            </select>
            <p className="form-error-msg">{errors.status?.message}</p>

            
          </form>
          {/* <DevTool control={control}/> */}

        </DialogContent>
        <Divider></Divider>
        <DialogActions>
          <Box
            pl={2}
            pr={2}
            pt={1}
            pb={1}
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
          >
            <Box>
              {enableEdit && 
              <Button variant="contained"
            onClick={() => deleteRow(rowToEdit)}
            color="error"
            sx={{
              textTransform: "capitalize",

              border: "1px solid #8a95ab",
            }}
            >Delete
              </Button>
              }
            </Box>
            <Box sx={{ display: "flex", gap: "10px"}}>
              <Button
                variant="outline"
                onClick={() => setIsAddPopupOpen(false)}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",

                  border: "1px solid #8a95ab",
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
                  textTransform: "capitalize",
                }}
              >
                {enableEdit === true ? "Edit" : "Add"}
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddPopupForm;
