import React from "react";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
