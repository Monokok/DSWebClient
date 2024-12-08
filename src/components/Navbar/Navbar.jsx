import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import { useState } from 'react';


const Navbar = () => {


  return (
     <nav>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="/profile">Profile</Link>
      </div>

      <div>
        <Link to="/login">Login</Link>
      </div>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
