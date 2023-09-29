// SideNav.js

import React from 'react';

function SideNav() {
  return (
    <nav className="side-nav">
      {/* Add your navigation links here */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default SideNav;
