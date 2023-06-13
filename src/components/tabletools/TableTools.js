import React from "react";
import { Box, Button, Typography, Paper, TextField, MenuItem, Select, InputLabel, FormControl, Divider, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import LockIcon from "@mui/icons-material/Lock";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const TableTools = ({ setSearchName, searchName, setSearchUsername, searchUsername, setSearchStatus, searchStatus }) => {
  return (
    <>
      {/* Top Bar */}

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search..."
            type="search"
            variant="outlined"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
          />
        </Box>
        <Box>
          <FormControl>
            <InputLabel id="demo-simple-select-label">User Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="User Status"
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
            >
              <MenuItem value={"Any"}>Any</MenuItem>
              <MenuItem value={"Locked"}>Locked</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>Date Placeholder</Box>
      </Box>

      {/* Bottom Bar */}

      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems:"center", gap: "10px", height: "36px" }}
        m={1}
      >
        <Typography>1 selected</Typography>
        <Divider
          m={5}
          sx={{ display: "inline" }}
          orientation="vertical"
          flexItem
        />

        <IconButton
          aria-label="delete"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px" }}
        >
          <CreateIcon sx={{ color: "#53596f" }} />
        </IconButton>

        <IconButton
          aria-label="delete"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px" }}
        >
          <DoNotDisturbIcon sx={{ color: "#53596f" }} />
        </IconButton>

        <IconButton
          aria-label="delete"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px" }}
        >
          <LockIcon sx={{ color: "#53596f" }} />
        </IconButton>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", boxShadow: "0",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.04)", // theme.palette.primary.main
            boxShadow: "0",
          }, }}
        >
          <Typography
            sx={{
              color: "#53596f",
              textTransform: "capitalize"
            }}
          >
            Assign to Profile
          </Typography>
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", boxShadow: "0",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.04)", // theme.palette.primary.main
            boxShadow: "0",
          }, }}
        >
          <Typography
            sx={{
              color: "#53596f",
              textTransform: "capitalize"
              
            }}
          >
            Assign to Group
          </Typography>
        </Button>

        <IconButton
          aria-label="delete"
          sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px" }}
        >
          <MoreVertIcon sx={{ color: "#53596f" }} />
        </IconButton>

        <Typography sx={{
          textDecoration: "underline",
          color: "#5c6276"
        }}>Unselect All</Typography>
      </Box>
    </>
  );
};
