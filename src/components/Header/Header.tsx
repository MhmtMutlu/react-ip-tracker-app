import React, { ChangeEvent, useContext, useState } from "react";
import "./header.scss";
import ArrowLogo from "../../assets/icon-arrow.svg";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import { IPContext } from "../../contexts/IPContext";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { findData } = useContext(IPContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    findData(inputValue);
    setInputValue("");
  };

  return (
    <div className="header-container">
      <h1 className="header-title">IP Address Tracker</h1>
      <div className="header-input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search for any IP address or domain"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <button onClick={handleSubmit}>
            <img src={ArrowLogo} alt="Button's Arrow Logo" />
          </button>
        </form>
      </div>
      <HeaderInfo />
    </div>
  );
};

export default Header;
