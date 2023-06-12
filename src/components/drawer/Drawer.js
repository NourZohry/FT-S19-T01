import React, { Component } from "react";
import { Box, Toolbar, Drawer, Typography, IconButton, Icon, makeStyles, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PageContent from "../pagecontent/PageContent";
import SendIcon from "@mui/icons-material/Send";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: true, isOpen1: false, isOpen2: false, isOpen3: false };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  }

  render() {
    return (
      <>
        <Box sx={this.state.isDrawerOpen && { display: "flex", flexDirection: "row" }}>
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
            open={this.state.isDrawerOpen}
            variant="persistent"
            //   onClose={() => this.setState({ isDrawerOpen: false })}
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
              <ListItemButton onClick={() => this.setState({ isOpen1: !this.state.isOpen1 })}>
                <ListItemText primary="ATM Settings" />
                {this.state.isOpen1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={this.state.isOpen1}
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

              <ListItemButton onClick={() => this.setState({ isOpen2: !this.state.isOpen2 })}>
                <ListItemText primary="Business Setup" />
                {this.state.isOpen2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={this.state.isOpen2}
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

              <ListItemButton onClick={() => this.setState({ isOpen3: !this.state.isOpen3 })}>
                <ListItemText primary="User Management" />
                {this.state.isOpen3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={this.state.isOpen3}
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

          <div>
            <PageContent handler={this.handler} />
          </div>
        </Box>
      </>
    );
  }
}
