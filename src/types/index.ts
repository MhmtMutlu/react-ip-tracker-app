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
  domains: Array<string>;
  as: As;
  isp: string;
}

type Location = {
  country: string;
  region: string;
  timezone: string;
  "city": string,
  "lat": number,
  "lng": number,
  "postalCode": string,
  "geonameId": number
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
    lat: 37.40599,
    lng: -122.078514,
    postalCode: "94043",
    timezone: "-07:00",
    geonameId: 5375481,
  },
  domains: [
    "0d2.net",
    "003725.com",
    "0f6.b0094c.cn",
    "007515.com",
    "0guhi.jocose.cn",
  ],
  as: {
    asn: 15169,
    name: "Google LLC",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
}