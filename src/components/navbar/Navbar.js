import React, { Component } from "react";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default class Navbar extends Component {
  render() {
    return (
      <IconButton onClick={() => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })}>
        <MenuIcon />
      </IconButton>
    );
  }
}
