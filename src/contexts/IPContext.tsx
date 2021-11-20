import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IDataObject,
  IContextInitialState,
  IContextProvider,
  InitialLocationState,
} from "../types";

const initialContextState: IContextInitialState = {
  data: InitialLocationState,
  findData: () => {},
};

export const IPContext = React.createContext(initialContextState);

const IPContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [data, setData] = useState<IDataObject>(initialContextState.data);
  const IP_REG_EXP =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const BASE_URL = "https://geo.ipify.org/api/v2/";
  const URL = `${BASE_URL}country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios(URL).then((response) => {
      setData(response.data);
    });
  }, [URL]);

  const findData = (value: string) => {
    if (IP_REG_EXP.test(value)) {
      axios(URL + `&ipAddress=${value}`).then((response) => {
        setData(response.data);
      });
    } else {
      axios(URL + `&domain=${value}`).then((response) => {
        setData(response.data);
      });
    }
  };

  const values = {
    data,
    findData,
  };

  return <IPContext.Provider value={values}>{children}</IPContext.Provider>;
};

export default IPContextProvider;
