import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton, Icon, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, TextField, InputAdornment } from "@mui/material";
import PageContent from "../pagecontent/PageContent";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const textColor = "white";

export const DrawerComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <Box sx={isDrawerOpen && { display: "flex", flexDirection: "row" }}>
        <Drawer
          sx={{
            width: 220,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 220,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          open={isDrawerOpen}
          variant="persistent"
        >
          <Box sx={{ minHeight: "100vh", backgroundColor: "#050e2d" }}>
            <Box
              p={1}
              width="200px"
              textAlign="center"
            >
              {/* Drawer Content Here */}
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 100,
                }}
                alt="Reno Systems"
                src={require("../../images/reno-logo.png")}
              />
            </Box>

            <Box m={1}>
              <TextField
                id="outlined-basic"
                label="Quick Access"
                variant="outlined"
                size="small"
                InputProps={{
                  sx: { borderRadius: 10, backgroundColor: "white" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box>
              <IconButton>
                <DashboardIcon sx={{ color: "#828796" }} />
                <Typography sx={{ color: "#828796" }}>Dashboard</Typography>
              </IconButton>
            </Box>

            <Box
              ml={2}
              mt={2}
            >
              <Typography sx={{ color: "#4e5469" }}>Settings</Typography>
            </Box>

            <List
              sx={{ width: "100%", maxWidth: 360 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              // subheader={
              //   <ListSubheader
              //     component="div"
              //     id="nested-list-subheader"
              //   >
              //     Settings
              //   </ListSubheader>
              // }
            >
              {/* here */}
              <ListItemButton
                sx={{ color: "#828796" }}
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <ListItemText
                  sx={{ color: "#828796" }}
                  primary="ATM Settings"
                />
                {isOpen1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={isOpen1}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    backgroundColor: "#1e2642",
                  }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      sx={{ color: "#828796" }}
                      primary="Starred"
                    />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                sx={{ color: "#828796" }}
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <ListItemText
                  sx={{ color: "#828796" }}
                  primary="Business Setup"
                />
                {isOpen2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={isOpen2}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    backgroundColor: "#1e2642",
                  }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      sx={{ color: "#828796" }}
                      primary="Starred"
                    />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                sx={{ color: "#828796" }}
                onClick={() => setIsOpen3(!isOpen3)}
              >
                <ListItemText
                  sx={{ color: "#828796" }}
                  primary="User Management"
                />
                {isOpen3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={isOpen3}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    backgroundColor: "#1e2642",
                  }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      sx={{ color: "#828796" }}
                      primary="Users"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      sx={{ color: "#828796" }}
                      primary="Profiles"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      sx={{ color: "#828796" }}
                      primary="Groups"
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <Typography
              m={2}
              sx={{ color: "#828796" }}
            >
              License Management
            </Typography>
          </Box>
        </Drawer>

        <Box sx={{ flexGrow: 1 }}>
          <PageContent
            setIsDrawerOpen={setIsDrawerOpen}
            isDrawerOpen={isDrawerOpen}
          />
        </Box>
      </Box>
    </>
  );
};

export default DrawerComponent;
