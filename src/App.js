import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FestaEvents from './components/Festaevents';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FestaEvents />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
