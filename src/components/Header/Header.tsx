import React from "react";
import "./header.scss";
import ArrowLogo from "../../assets/icon-arrow.svg"
import HeaderInfo from "./HeaderInfo/HeaderInfo";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">IP Address Tracker</h1>
      <div className="header-input-wrapper">
        <input placeholder="Search for any IP address or domain" />
        <button>
          <img src={ArrowLogo} alt="Button's Arrow Logo"/>
        </button>
      </div>
      <HeaderInfo />
    </div>
  );
};

export default Header;
