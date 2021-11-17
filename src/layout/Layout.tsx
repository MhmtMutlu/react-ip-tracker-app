import React from "react";
import "./layout.scss";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
