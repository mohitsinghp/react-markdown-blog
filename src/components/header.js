import React from "react";
import "./components.styles.css";
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <img height="80" src={Logo} alt="MSP Writes"/>
        <div className="searchBar">
          <input type="search" placeholder="Search " />
        </div>
      </div>
    </div>
  );
};

export default Header;
