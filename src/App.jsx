import React from 'react';
import './App.css';
import UserProfile from './Components/user-profile';

const App = () => {
  return (
    <div className="app"> 
    <h1>My <span>DETROIT</span> Tech Team</h1>
    <p> Over the years, various technological systems have been developed to streamline workflows, enhance efficiency, and maximize productivity. I am pleased to introduce my team of seasoned tech experts who excel in implementing these innovative solutions. </p>
      <UserProfile />
    </div>
  );
};

export default App;
