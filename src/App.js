
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './comp/login';
import Home from './comp/home';
import InsertProject from './comp/InsertProject';
import ProjectList from './comp/ProjectList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/insertProject" element={<InsertProject />} />
          <Route path="/projectlist" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
