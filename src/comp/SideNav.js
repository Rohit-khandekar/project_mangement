// SideNav.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import dashboard from "./IMG/Dashboard.svg";
import projectslist from "./IMG/Project-list.svg";
import createproject from "./IMG/create-project.svg";
import logoutIcon from "./IMG/Logout.svg"; // Replace with your actual logout icon
import './SideNav.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function SideNav() {
  const location = useLocation();
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleLogout = () => {
    // Perform logout logic here
    // After logout, navigate to the root or home page
    navigate("/");
  };

  return (
    <nav className="side-nav">
      <ul>
        <li className="text-center">
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            <img
              src={dashboard}
              alt="Dashboard"
              width="24"
              height="24"
            />
          </Link>
        </li>
        <li className="text-center">
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            <img
              src={projectslist}
              alt="Projects"
              width="24"
              height="24"
            />
          </Link>
        </li>
        <li className="text-center">
          <Link to="/create-project" className={location.pathname === '/create-project' ? 'active' : ''}>
            <img
              src={createproject}
              alt="Create Project"
              width="24"
              height="24"
            />
          </Link>
        </li>
        <li className="logout-button"> {/* Apply the logout-button class */}
          <button onClick={handleLogout}>
            <img
              src={logoutIcon}
              alt="Logout"
              width="24"
              height="24"
            />
          </button>
        </li>
        {/* Add more navigation links with icons as needed */}
      </ul>
    </nav>
  );
}

export default SideNav;
