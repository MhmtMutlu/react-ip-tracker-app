import React, { useContext } from "react";
import { IPContext } from "../../../contexts/IPContext";
import "./header-info.scss";

const HeaderInfo: React.FC = () => {
  const { data } = useContext(IPContext);

  return (
    <div className="info-wrapper">
      <div className="info-wrapper-container">
        <div className="sections">
          <h5>IP ADDRESS</h5>
          <h2>{data && data.ip}</h2>
        </div>
        <hr />
        <div className="sections">
          <h5>LOCATION</h5>
          <h2>
            {data &&
              `${data.location.city && data.location.city + ","} ${
                data.location.region && data.location.region + ","
              } ${data.location.country}`}
          </h2>
        </div>
        <hr />
        <div className="sections">
          <h5>TIMEZONE</h5>
          <h2>{data && data.location.timezone}</h2>
        </div>
        <hr />
        <div className="sections">
          <h5>ISP</h5>
          <h2>{data && data.isp}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
