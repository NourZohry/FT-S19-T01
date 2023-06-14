import React from "react";
import { Badge, Box, Divider, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TableManagement from "../tablemanagement/TableManagement";

export const PageContent = ({ setIsDrawerOpen, isDrawerOpen }) => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        boxShadow={1}
      >
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography
            display="inline"
            sx={{ color: "#565b71", fontSize: "14px" }}
          >
            <span style={{ fontWeight: "bold" }}>Good Morning!</span> {new Date().toDateString()} {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <Box mr={2}>
          <IconButton>
            <Badge
              badgeContent={10}
              max={9}
              color="error"
              overlap="circular"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          </Box>
          <Divider
            // m={5}
            // sx={{ display: "inline" }}
            variant="middle"
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
      <TableManagement />
      {/* <Table /> */}
    </>
  );
};

export default PageContent;
