import L from "leaflet";
import Icon from "../../../assets/icon-location.svg";

const LocationIcon = new L.Icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(60, 75),
});

export { LocationIcon };
