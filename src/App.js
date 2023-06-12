import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './components/usermanagement/UserManagement';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<UserManagement />} />
        </Routes>
      </Router>
    )
  }
}
