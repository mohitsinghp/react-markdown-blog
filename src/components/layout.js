import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
      <div className="layout">
        <Header />
        <div className="contents">{children}</div>
        <Footer />
    </div>
  );
};

export default Layout;
