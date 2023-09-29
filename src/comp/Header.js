// Header.js

import React from 'react';
import IMG from './IMG/Header-bg.svg'; 

function Header() {
  return (
    
    <header className="App-header">
      <div className="header-svg">
        <img src={IMG}  style={{ width: '120%', margin: 0, padding: 0 }} /> 
      </div>
     
      <h1>Your Header Title</h1>
    </header>
  );
}

export default Header;
