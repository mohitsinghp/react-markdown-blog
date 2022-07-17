import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div classNme="content">
        <hr />
        <p>&copy; msp {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
