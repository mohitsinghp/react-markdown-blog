import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p>&copy; msp {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
