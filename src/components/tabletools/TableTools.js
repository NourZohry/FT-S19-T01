import React from "react";
import { Box, Button, Typography, TextField, MenuItem, Select, InputLabel, FormControl, Divider, IconButton, InputAdornment, Checkbox, ListItemText } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import LockIcon from "@mui/icons-material/Lock";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import { DateRangePicker, LocalizationProvider, SingleInputDateRangeField } from "@mui/x-date-pickers-pro";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const groups = ["Any", "Locked", "Inactive", "Active"];

export const TableTools = ({ setSearchName, searchName, setSearchUsername, searchUsername, setSearchStatus, searchStatus, setSearchDate, selectedCount }) => {
  return (
    <>
      {/* Top Bar */}

      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
        pt={3}
        ml={3}
        mb={3}
      >
        <Box>
          <TextField
            id="outlined-basic"
            label="Search..."
            type="search"
            variant="outlined"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            size="small"
            // InputProps={{
            //   sx: { borderRadius: "5px", backgroundColor: "white" },
            //   startAdornment: (
            //     <InputAdornment position="start" sx={{marginLeft: "-10px"}}>
            //         <SearchIcon />
            //     </InputAdornment>
            //   ),
            // }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
            size="small"
            sx={{
              width: "150px",
            }}
          />
        </Box>
        <Box>
          <FormControl>
            <InputLabel
              size="small"
              id="demo-simple-select-label"
            >
              User Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="User Status"
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
              size="small"
              renderValue={(selected) => selected.join(", ")}
              sx={{
                width: "200px",
              }}
              multiple
            >
              {groups.map((group) => (
                <MenuItem
                  key={group}
                  value={group}
                >
                  <Checkbox checked={searchStatus.includes(group)} />
                  <ListItemText primary={group} />
                </MenuItem>
              ))}
              {/* <MenuItem value={"Any"}>Any</MenuItem>
              <MenuItem value={"Locked"}>Locked</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem> */}
            </Select>
          </FormControl>
        </Box>

        <Box>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
    </LocalizationProvider> */}

          <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer  components={["DatePicker"]}>
              <DatePicker
                slotProps={{ textField: { size: 'small' } }}
                label="Creation Date"
                onChange={(value) => setSearchDate(new Date(value.$y.toString() + "-" + (value.$M+1).toString() + "-" + (value.$D+1).toString() ))}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>

      {/* Bottom Bar */}

      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
        m={1}
        mr={3}
        ml={3}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", height: "36px" }}>
          <Typography>{selectedCount} selected</Typography>
          <Divider
            m={5}
            sx={{ display: "inline" }}
            orientation="vertical"
            flexItem
          />

          <IconButton
            aria-label="delete"
            sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", height: "100%" }}
          >
            <CreateIcon sx={{ color: "#53596f" }} />
          </IconButton>

          <IconButton
            aria-label="delete"
            sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", height: "100%" }}
          >
            <DoNotDisturbIcon sx={{ color: "#53596f" }} />
          </IconButton>

          <IconButton
            aria-label="delete"
            sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", height: "100%" }}
          >
            <LockIcon sx={{ color: "#53596f" }} />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e7e9ef",
              borderRadius: "4px",
              boxShadow: "0",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.04)", // theme.palette.primary.main
                boxShadow: "0",
              },
            }}
          >
            <Typography
              sx={{
                color: "#53596f",
                textTransform: "capitalize",
              }}
            >
              Assign to Profile
            </Typography>
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e7e9ef",
              borderRadius: "4px",
              boxShadow: "0",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.04)", // theme.palette.primary.main
                boxShadow: "0",
              },
            }}
          >
            <Typography
              sx={{
                color: "#53596f",
                textTransform: "capitalize",
              }}
            >
              Assign to Group
            </Typography>
          </Button>

          <IconButton
            aria-label="delete"
            sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", height: "100%" }}
          >
            <MoreVertIcon sx={{ color: "#53596f" }} />
          </IconButton>

          <Typography
            sx={{
              textDecoration: "underline",
              color: "#5c6276",
            }}
          >
            Unselect All
          </Typography>
        </Box>
        <Box>
          {" "}
          <IconButton
            aria-label="delete"
            sx={{ backgroundColor: "#e7e9ef", borderRadius: "4px", height: "100%" }}
          >
            <DownloadIcon sx={{ color: "#53596f" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
