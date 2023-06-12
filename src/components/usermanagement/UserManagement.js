import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Navbar from '../navbar/Navbar';
// import Table from '../table/Table';
import DrawerComponent from '../drawer/Drawer';

export default class UserManagement extends Component {
  render() {
    return (
      <div>
        <DrawerComponent />
      </div>
    )
  }
}

