import React from "react";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Table from "../table/Table";
import TableManagement from "../tablemanagement/TableManagement";

export const PageContent = ({ setIsDrawerOpen, isDrawerOpen }) => {
  return (
    <>
      <Paper elevation={1}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <MenuIcon />
            </IconButton>
            <Typography display="inline">Good Morning! {new Date().toString()}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Divider
              m={5}
              sx={{ display: "inline" }}
              orientation="vertical"
              flexItem
            />
            <Typography
              m={1}
              display="inline"
            >
              Nader Amer
            </Typography>
          </Box>
        </Box>
      </Paper>
      <TableManagement />
      {/* <Table /> */}
    </>
  );
};

export default PageContent;
