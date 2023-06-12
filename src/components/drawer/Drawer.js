import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton, Icon, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PageContent from "../pagecontent/PageContent";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

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

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              >
                Settings
              </ListSubheader>
            }
          >
            <ListItemButton onClick={() => setIsOpen1(!isOpen1)}>
              <ListItemText primary="ATM Settings" />
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
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setIsOpen2(!isOpen2)}>
              <ListItemText primary="Business Setup" />
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
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setIsOpen3(!isOpen3)}>
              <ListItemText primary="User Management" />
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
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Users" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Profiles" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </List>
            </Collapse>

            <Typography m={2}>License Management</Typography>
          </List>
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
