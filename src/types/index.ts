export interface IContextProvider {
  children: React.ReactNode;
}

export interface IContextInitialState {
  data: IDataObject;
  findData: (data: string) => void;
}

export interface IDataObject {
  ip: string;
  location: Location;
  domains?: Array<string>;
  as: As;
  isp: string;
}

export interface IPropData {
  userData: IDataObject;
}

type Location = {
  country: string;
  region: string;
  timezone: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  geonameId: number;
};

type As = {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
};

export const InitialLocationState = {
  ip: "",
  location: {
    country: "",
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    postalCode: "",
    timezone: "",
    geonameId: 0,
  },
  domains: ["", "", "", "", ""],
  as: {
    asn: 0,
    name: "",
    route: "",
    domain: "",
    type: "",
  },
  isp: "",
};
