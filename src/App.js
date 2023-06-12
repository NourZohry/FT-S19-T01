import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerComponent from './components/drawer/Drawer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<DrawerComponent />} />
        </Routes>
      </Router>
    )
  }
}
