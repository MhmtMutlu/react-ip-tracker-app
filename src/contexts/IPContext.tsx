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
  loading: false,
};

export const IPContext = React.createContext(initialContextState);

const IPContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [data, setData] = useState<IDataObject>(initialContextState.data);
  const [loading, setLoading] = useState<boolean>(false);
  const IP_REG_EXP =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const BASE_URL = "https://geo.ipify.org/api/v2/";
  const URL = `${BASE_URL}country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  // useEffect(() => {
  //   setLoading(true);
  //   axios(URL).then((response) => {
  //     setData(response.data);
  //     setLoading(false);
  //   });
  // }, [URL]);

  const findData = (value: string) => {
    if (IP_REG_EXP.test(value)) {
      setLoading(true);
      axios(URL + `&ipAddress=${value}`).then((response) => {
        setData(response.data);
        setLoading(false);
      });
    } else {
      setLoading(true);
      axios(URL + `&domain=${value}`).then((response) => {
        setData(response.data);
        setLoading(false);
      });
    }
  };

  const values = {
    data,
    findData,
    loading,
  };

  return <IPContext.Provider value={values}>{children}</IPContext.Provider>;
};

export default IPContextProvider;
