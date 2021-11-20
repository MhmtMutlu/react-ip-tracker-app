export interface IContextProvider {
  children: React.ReactNode;
}

export interface IContextInitialState {
  data: IDataObject;
  findData: (data: string) => void;
  loading: boolean;
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
  ip: "8.8.8.8",
  location: {
    country: "US",
    region: "California",
    city: "Mountain View",
    lat: 37.38605,
    lng: -122.08385,
    postalCode: "94035",
    timezone: "-08:00",
    geonameId: 5375480,
  },
  domains: [
    "000180.top",
    "00049ok.com",
    "000xs.net",
    "007515.com",
    "007pingtai.www.bbs.global-harbor.com",
  ],
  as: {
    asn: 15169,
    name: "GOOGLE",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
};
