import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
const Home = () => {
  return (
    <div className="home">
      <SideNav/>
      <Header/>
      <h1>Welcome to My Website</h1>
      <p>Enjoy exploring our content!</p>
    </div>
  );
}

export default Home;
