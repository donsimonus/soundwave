import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className='header'>
      <img src="/images/logowhite.png" className='logo' alt="Soundwave Logo"/>
      
      <input className='input' type="text" placeholder="Search" />
      
      <div className="icon-wrapper">
        <img src="/icons/fav.svg" className='icon' alt="Fav" />
        <img src="/icons/user.svg" className='icon' alt="User" />
        <img src="/icons/cart.svg" className='icon' alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
